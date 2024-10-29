Imports System.IO
Imports System.Text
Imports ExcelDataReader
Imports ClosedXML.Excel
Imports DocumentFormat.OpenXml.Spreadsheet
Imports DocumentFormat.OpenXml.Wordprocessing


Public Class Form1
    Dim tables As DataTableCollection
    Dim originalDataTable As DataTable ' Store the original DataTable for reference
    Dim bindingSource As New BindingSource() ' For search functionality

    Public Sub New()
        ' This call is required by the designer.
        InitializeComponent()

        ' Register the encoding provider
        Encoding.RegisterProvider(CodePagesEncodingProvider.Instance)
    End Sub

    Private Sub browseBtn_Click(sender As Object, e As EventArgs) Handles browseBtn.Click
        Using ofd As OpenFileDialog = New OpenFileDialog() With {.Filter = "Excel Workbook|*.xls;*.xlsx"}
            If ofd.ShowDialog() = DialogResult.OK Then
                txtFileName.Text = ofd.FileName
                Try
                    Using stream = File.Open(ofd.FileName, FileMode.Open, FileAccess.Read)
                        Using reader As IExcelDataReader = ExcelReaderFactory.CreateReader(stream)
                            Dim result As DataSet = reader.AsDataSet(New ExcelDataSetConfiguration() With {
                                .ConfigureDataTable = Function(__) New ExcelDataTableConfiguration() With {.UseHeaderRow = True}})
                            tables = result.Tables
                            cbSheet.Items.Clear()
                            cbSheet.Enabled = False  ' Disable until loaded

                            For Each table As DataTable In tables
                                cbSheet.Items.Add(table.TableName)
                            Next
                            cbSheet.Enabled = True  ' Enable after loading                   
                        End Using
                    End Using
                Catch ex As Exception
                    MessageBox.Show("Error: " & ex.Message)
                End Try
            End If
        End Using
    End Sub

    Private Sub cbSheet_SelectedIndexChanged(sender As Object, e As EventArgs) Handles cbSheet.SelectedIndexChanged
        originalDataTable = tables(cbSheet.SelectedItem.ToString()).Copy() ' Store a copy of the original DataTable
        bindingSource.DataSource = originalDataTable

        ' Remove the first row from the DataTable and rebind
        If originalDataTable.Rows.Count > 0 Then
            originalDataTable.Rows.RemoveAt(0)
        End If

        DataGridView1.DataSource = bindingSource
        DataGridView1.AutoSizeColumnsMode = DataGridViewAutoSizeColumnsMode.Fill  ' Auto-resize columns

        ' Clear existing headers
        DataGridView1.Columns.Clear()

        ' Create custom headers
        Dim customHeaders As String() = {"DATE", "NO", "NAME", "MUNICIPALITY", "TYPE OF DOCUMENT", "ONGOING", "WITH FEEDBACK", "APPROVED", "RETURNED TO LCR(with lacking requirements)"}

        ' Add columns with custom headers
        For i As Integer = 0 To originalDataTable.Columns.Count - 1
            Dim column As New DataGridViewTextBoxColumn()
            column.Name = originalDataTable.Columns(i).ColumnName
            column.HeaderText = customHeaders(i Mod customHeaders.Length) ' Cycle through custom headers
            column.DataPropertyName = originalDataTable.Columns(i).ColumnName
            DataGridView1.Columns.Add(column)
        Next

        ' Resize the "Name" column based on its content
        Dim nameColumnIndex As Integer = Array.IndexOf(customHeaders, "NAME")
        If nameColumnIndex >= 0 Then
            Dim maxWidth As Integer = 0

            ' Calculate the maximum width based on the content of the "Name" field
            For Each row As DataRow In originalDataTable.Rows
                Dim cellValue As String = row("NAME").ToString()
                Dim cellWidth As Integer = TextRenderer.MeasureText(cellValue, DataGridView1.Font).Width
                maxWidth = Math.Max(maxWidth, cellWidth)
            Next

            ' Set the width of the "Name" column, adding some padding
            DataGridView1.Columns(nameColumnIndex).Width = maxWidth + 20 ' Adding padding for better visibility
            addBtn.Enabled = True
            btnDelete.Enabled = True
            btnEdit.Enabled = True

        End If

        ' Bind the data again to reflect the custom headers
        DataGridView1.DataSource = bindingSource
        txtSearch.Select()
    End Sub

    Private Sub txtSearch_TextChanged(sender As Object, e As EventArgs) Handles txtSearch.TextChanged
        Dim filter As String = txtSearch.Text.Trim()
        If originalDataTable IsNot Nothing Then
            If String.IsNullOrEmpty(filter) Then
                ' Clear the filter if the search box is empty
                originalDataTable.DefaultView.RowFilter = String.Empty ' Reset filter
                bindingSource.DataSource = originalDataTable.DefaultView.ToTable() ' Update binding source with original data
            Else
                ' Create a filter string for all columns
                Dim filterString As New List(Of String)()

                For Each col As DataColumn In originalDataTable.Columns
                    ' Check the data type of the column
                    If col.DataType = GetType(String) Then
                        ' For string columns, use LIKE
                        Dim columnName As String = If(col.ColumnName.Contains(" "), $"[{col.ColumnName}]", col.ColumnName)
                        filterString.Add($"{columnName} LIKE '%{filter}%'")
                    ElseIf col.DataType = GetType(Double) Then
                        ' For numeric columns, check if the filter can be parsed
                        Dim numericValue As Double
                        If Double.TryParse(filter, numericValue) Then
                            Dim columnName As String = If(col.ColumnName.Contains(" "), $"[{col.ColumnName}]", col.ColumnName)
                            filterString.Add($"{columnName} = {numericValue}")
                        End If
                    End If
                    ' Add more cases here if you want to handle other types (e.g., DateTime)
                Next

                ' Join the filter conditions with " OR "
                originalDataTable.DefaultView.RowFilter = String.Join(" OR ", filterString)
                bindingSource.DataSource = originalDataTable.DefaultView.ToTable() ' Update binding source with filtered data
            End If
        End If
    End Sub

    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load

        cbSheet.Enabled = False
        addBtn.Enabled = False
        btnDelete.Enabled = False
        btnEdit.Enabled = False
        UserInfo.Visible = False
    End Sub

    Private Sub SaveToExcel(filePath As String, dataTable As DataTable)
        Dim workbook As XLWorkbook

        ' Load existing workbook or create a new one
        If File.Exists(filePath) Then
            workbook = New XLWorkbook(filePath) ' Load existing workbook
        Else
            workbook = New XLWorkbook() ' Create a new workbook
        End If

        ' Get the sheet name from the ComboBox
        Dim sheetName As String = cbSheet.SelectedItem.ToString()
        Dim worksheet As IXLWorksheet

        ' Check if the sheet already exists
        If workbook.Worksheets.Contains(sheetName) Then
            worksheet = workbook.Worksheet(sheetName)
            worksheet.Clear() ' Clear existing data before writing new
        Else
            worksheet = workbook.AddWorksheet(sheetName)
        End If

        ' Clear existing content in the worksheet and set headers
        worksheet.Cell(1, 1).InsertTable(dataTable, False) ' True to include headers

        ' Save the workbook
        workbook.SaveAs(filePath)
    End Sub

    Private Sub btnSave_Click(sender As Object, e As EventArgs) Handles btnSave.Click
        Dim newRow As DataRow = originalDataTable.NewRow()

        newRow("DATE") = DateValue.Text
        newRow("NO") = NoValue.Text
        newRow("NAME") = NameValue.Text
        newRow("MUNICIPALITY") = MunicipalityValue.Text
        newRow("TYPE OF DOCUMENT") = TypeOfDocumentValue.Text
        newRow("ONGOING") = OngoingValue.Text
        newRow("WITH FEEDBACK") = WithFeedbackValue.Text
        newRow("APPROVED") = ApprovedValue.Text
        newRow("RETURNED TO LCR(with lacking requirements)") = ReturnedValue.Text

        ' Add the new row to the DataTable
        originalDataTable.Rows.Add(newRow)

        ' Save the updated DataTable back to Excel
        SaveToExcel(txtFileName.Text, originalDataTable)

        ' Refresh the DataGridView
        bindingSource.ResetBindings(False) ' Refresh data in DataGridView
    End Sub

    Private Sub btnDelete_Click(sender As Object, e As EventArgs) Handles btnDelete.Click
        If DataGridView1.SelectedRows.Count > 0 Then
            Dim selectedRow As DataGridViewRow = DataGridView1.SelectedRows(0)
            Dim rowToDelete As DataRow = CType(selectedRow.DataBoundItem, DataRowView).Row

            ' Remove the row from the DataTable
            originalDataTable.Rows.Remove(rowToDelete)

            ' Save the current sheet back to Excel
            SaveToExcel(txtFileName.Text, originalDataTable) ' Ensure you only save the current sheet

            bindingSource.ResetBindings(False) ' Refresh data in DataGridView
        Else
            MessageBox.Show("Please select a row to delete.")

        End If
    End Sub

    Private Sub addBtn_Click(sender As Object, e As EventArgs) Handles addBtn.Click
        UserInfo.Visible = True
        controlLabel.Text = "Add Member"
    End Sub

    Private Sub xControl_Click(sender As Object, e As EventArgs) Handles xControl.Click
        UserInfo.Visible = False
    End Sub

    Private Sub btnEdit_Click(sender As Object, e As EventArgs) Handles btnEdit.Click
        UserInfo.Visible = True
        controlLabel.Text = "Edit Member"
    End Sub
End Class