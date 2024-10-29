<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
Partial Class Form1
    Inherits System.Windows.Forms.Form

    'Form overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()>
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Required by the Windows Form Designer
    Private components As System.ComponentModel.IContainer

    'NOTE: The following procedure is required by the Windows Form Designer
    'It can be modified using the Windows Form Designer.  
    'Do not modify it using the code editor.
    <System.Diagnostics.DebuggerStepThrough()>
    Private Sub InitializeComponent()
        Me.DataGridView1 = New System.Windows.Forms.DataGridView()
        Me.browseBtn = New System.Windows.Forms.Button()
        Me.Label1 = New System.Windows.Forms.Label()
        Me.OpenFileDialog1 = New System.Windows.Forms.OpenFileDialog()
        Me.txtFileName = New System.Windows.Forms.TextBox()
        Me.Label2 = New System.Windows.Forms.Label()
        Me.cbSheet = New System.Windows.Forms.ComboBox()
        Me.txtSearch = New System.Windows.Forms.TextBox()
        Me.Label3 = New System.Windows.Forms.Label()
        Me.Panel1 = New System.Windows.Forms.Panel()
        Me.UserInfo = New System.Windows.Forms.Panel()
        Me.controlLabel = New System.Windows.Forms.Label()
        Me.xControl = New System.Windows.Forms.Button()
        Me.OngoingValue = New System.Windows.Forms.TextBox()
        Me.ReturnedValue = New System.Windows.Forms.TextBox()
        Me.btnSave = New System.Windows.Forms.Button()
        Me.NameValue = New System.Windows.Forms.TextBox()
        Me.ApprovedValue = New System.Windows.Forms.TextBox()
        Me.DateValue = New System.Windows.Forms.DateTimePicker()
        Me.WithFeedbackValue = New System.Windows.Forms.TextBox()
        Me.NoValue = New System.Windows.Forms.TextBox()
        Me.MunicipalityValue = New System.Windows.Forms.TextBox()
        Me.TypeOfDocumentValue = New System.Windows.Forms.TextBox()
        Me.btnDelete = New System.Windows.Forms.Button()
        Me.btnEdit = New System.Windows.Forms.Button()
        Me.addBtn = New System.Windows.Forms.Button()
        Me.GroupBox1 = New System.Windows.Forms.GroupBox()
        CType(Me.DataGridView1, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.Panel1.SuspendLayout()
        Me.UserInfo.SuspendLayout()
        Me.GroupBox1.SuspendLayout()
        Me.SuspendLayout()
        '
        'DataGridView1
        '
        Me.DataGridView1.AllowUserToResizeRows = False
        Me.DataGridView1.Anchor = CType((((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Bottom) _
            Or System.Windows.Forms.AnchorStyles.Left) _
            Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.DataGridView1.AutoSizeColumnsMode = System.Windows.Forms.DataGridViewAutoSizeColumnsMode.AllCells
        Me.DataGridView1.BackgroundColor = System.Drawing.SystemColors.ButtonHighlight
        Me.DataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize
        Me.DataGridView1.Location = New System.Drawing.Point(26, 23)
        Me.DataGridView1.Name = "DataGridView1"
        Me.DataGridView1.RowTemplate.DefaultCellStyle.NullValue = "--"
        Me.DataGridView1.RowTemplate.Height = 25
        Me.DataGridView1.SelectionMode = System.Windows.Forms.DataGridViewSelectionMode.FullRowSelect
        Me.DataGridView1.Size = New System.Drawing.Size(1189, 461)
        Me.DataGridView1.TabIndex = 0
        '
        'browseBtn
        '
        Me.browseBtn.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.browseBtn.Location = New System.Drawing.Point(490, 32)
        Me.browseBtn.Name = "browseBtn"
        Me.browseBtn.Size = New System.Drawing.Size(43, 23)
        Me.browseBtn.TabIndex = 1
        Me.browseBtn.Text = "..."
        Me.browseBtn.UseVisualStyleBackColor = True
        '
        'Label1
        '
        Me.Label1.AutoSize = True
        Me.Label1.Location = New System.Drawing.Point(17, 35)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(90, 15)
        Me.Label1.TabIndex = 2
        Me.Label1.Text = "Excel File Name"
        '
        'OpenFileDialog1
        '
        Me.OpenFileDialog1.FileName = "OpenFileDialog1"
        '
        'txtFileName
        '
        Me.txtFileName.Location = New System.Drawing.Point(113, 32)
        Me.txtFileName.Name = "txtFileName"
        Me.txtFileName.ReadOnly = True
        Me.txtFileName.Size = New System.Drawing.Size(371, 23)
        Me.txtFileName.TabIndex = 3
        '
        'Label2
        '
        Me.Label2.AutoSize = True
        Me.Label2.Location = New System.Drawing.Point(38, 69)
        Me.Label2.Name = "Label2"
        Me.Label2.Size = New System.Drawing.Size(69, 15)
        Me.Label2.TabIndex = 4
        Me.Label2.Text = "Sheet name"
        '
        'cbSheet
        '
        Me.cbSheet.FormattingEnabled = True
        Me.cbSheet.Location = New System.Drawing.Point(113, 61)
        Me.cbSheet.Name = "cbSheet"
        Me.cbSheet.Size = New System.Drawing.Size(196, 23)
        Me.cbSheet.TabIndex = 5
        '
        'txtSearch
        '
        Me.txtSearch.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle
        Me.txtSearch.Font = New System.Drawing.Font("Segoe UI", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point)
        Me.txtSearch.Location = New System.Drawing.Point(113, 123)
        Me.txtSearch.Name = "txtSearch"
        Me.txtSearch.PlaceholderText = "(name, municipality ... )"
        Me.txtSearch.Size = New System.Drawing.Size(521, 29)
        Me.txtSearch.TabIndex = 6
        '
        'Label3
        '
        Me.Label3.AutoSize = True
        Me.Label3.Font = New System.Drawing.Font("Segoe UI", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point)
        Me.Label3.Location = New System.Drawing.Point(17, 126)
        Me.Label3.Name = "Label3"
        Me.Label3.Size = New System.Drawing.Size(86, 21)
        Me.Label3.TabIndex = 7
        Me.Label3.Text = "Search Box"
        '
        'Panel1
        '
        Me.Panel1.Anchor = CType((((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Bottom) _
            Or System.Windows.Forms.AnchorStyles.Left) _
            Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.Panel1.Controls.Add(Me.UserInfo)
        Me.Panel1.Controls.Add(Me.DataGridView1)
        Me.Panel1.Location = New System.Drawing.Point(12, 158)
        Me.Panel1.Name = "Panel1"
        Me.Panel1.Size = New System.Drawing.Size(1231, 500)
        Me.Panel1.TabIndex = 8
        '
        'UserInfo
        '
        Me.UserInfo.Anchor = System.Windows.Forms.AnchorStyles.None
        Me.UserInfo.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle
        Me.UserInfo.Controls.Add(Me.controlLabel)
        Me.UserInfo.Controls.Add(Me.xControl)
        Me.UserInfo.Controls.Add(Me.OngoingValue)
        Me.UserInfo.Controls.Add(Me.ReturnedValue)
        Me.UserInfo.Controls.Add(Me.btnSave)
        Me.UserInfo.Controls.Add(Me.NameValue)
        Me.UserInfo.Controls.Add(Me.ApprovedValue)
        Me.UserInfo.Controls.Add(Me.DateValue)
        Me.UserInfo.Controls.Add(Me.WithFeedbackValue)
        Me.UserInfo.Controls.Add(Me.NoValue)
        Me.UserInfo.Controls.Add(Me.MunicipalityValue)
        Me.UserInfo.Controls.Add(Me.TypeOfDocumentValue)
        Me.UserInfo.Location = New System.Drawing.Point(101, 53)
        Me.UserInfo.Name = "UserInfo"
        Me.UserInfo.Size = New System.Drawing.Size(953, 375)
        Me.UserInfo.TabIndex = 1
        '
        'controlLabel
        '
        Me.controlLabel.AutoSize = True
        Me.controlLabel.Font = New System.Drawing.Font("Segoe UI Semibold", 12.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point)
        Me.controlLabel.Location = New System.Drawing.Point(35, 20)
        Me.controlLabel.Name = "controlLabel"
        Me.controlLabel.Size = New System.Drawing.Size(108, 21)
        Me.controlLabel.TabIndex = 22
        Me.controlLabel.Text = "Control Label"
        '
        'xControl
        '
        Me.xControl.Anchor = CType((System.Windows.Forms.AnchorStyles.Top Or System.Windows.Forms.AnchorStyles.Right), System.Windows.Forms.AnchorStyles)
        Me.xControl.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.xControl.Location = New System.Drawing.Point(916, 3)
        Me.xControl.Name = "xControl"
        Me.xControl.Size = New System.Drawing.Size(32, 23)
        Me.xControl.TabIndex = 21
        Me.xControl.Text = "X"
        Me.xControl.UseVisualStyleBackColor = True
        '
        'OngoingValue
        '
        Me.OngoingValue.Location = New System.Drawing.Point(473, 161)
        Me.OngoingValue.Name = "OngoingValue"
        Me.OngoingValue.Size = New System.Drawing.Size(100, 23)
        Me.OngoingValue.TabIndex = 17
        '
        'ReturnedValue
        '
        Me.ReturnedValue.Location = New System.Drawing.Point(473, 287)
        Me.ReturnedValue.Name = "ReturnedValue"
        Me.ReturnedValue.Size = New System.Drawing.Size(100, 23)
        Me.ReturnedValue.TabIndex = 20
        '
        'btnSave
        '
        Me.btnSave.Location = New System.Drawing.Point(498, 327)
        Me.btnSave.Name = "btnSave"
        Me.btnSave.Size = New System.Drawing.Size(75, 23)
        Me.btnSave.TabIndex = 9
        Me.btnSave.Text = "Save"
        Me.btnSave.UseVisualStyleBackColor = True
        '
        'NameValue
        '
        Me.NameValue.Location = New System.Drawing.Point(253, 176)
        Me.NameValue.Name = "NameValue"
        Me.NameValue.Size = New System.Drawing.Size(100, 23)
        Me.NameValue.TabIndex = 12
        '
        'ApprovedValue
        '
        Me.ApprovedValue.Location = New System.Drawing.Point(473, 245)
        Me.ApprovedValue.Name = "ApprovedValue"
        Me.ApprovedValue.Size = New System.Drawing.Size(100, 23)
        Me.ApprovedValue.TabIndex = 19
        '
        'DateValue
        '
        Me.DateValue.CustomFormat = "1-jan-24"
        Me.DateValue.Format = System.Windows.Forms.DateTimePickerFormat.Custom
        Me.DateValue.Location = New System.Drawing.Point(253, 83)
        Me.DateValue.Name = "DateValue"
        Me.DateValue.RightToLeft = System.Windows.Forms.RightToLeft.No
        Me.DateValue.Size = New System.Drawing.Size(200, 23)
        Me.DateValue.TabIndex = 13
        '
        'WithFeedbackValue
        '
        Me.WithFeedbackValue.Location = New System.Drawing.Point(473, 204)
        Me.WithFeedbackValue.Name = "WithFeedbackValue"
        Me.WithFeedbackValue.Size = New System.Drawing.Size(100, 23)
        Me.WithFeedbackValue.TabIndex = 18
        '
        'NoValue
        '
        Me.NoValue.Location = New System.Drawing.Point(253, 131)
        Me.NoValue.Name = "NoValue"
        Me.NoValue.Size = New System.Drawing.Size(100, 23)
        Me.NoValue.TabIndex = 14
        '
        'MunicipalityValue
        '
        Me.MunicipalityValue.Location = New System.Drawing.Point(473, 82)
        Me.MunicipalityValue.Name = "MunicipalityValue"
        Me.MunicipalityValue.Size = New System.Drawing.Size(100, 23)
        Me.MunicipalityValue.TabIndex = 15
        '
        'TypeOfDocumentValue
        '
        Me.TypeOfDocumentValue.Location = New System.Drawing.Point(473, 122)
        Me.TypeOfDocumentValue.Name = "TypeOfDocumentValue"
        Me.TypeOfDocumentValue.Size = New System.Drawing.Size(100, 23)
        Me.TypeOfDocumentValue.TabIndex = 16
        '
        'btnDelete
        '
        Me.btnDelete.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnDelete.Location = New System.Drawing.Point(242, 22)
        Me.btnDelete.Name = "btnDelete"
        Me.btnDelete.Size = New System.Drawing.Size(75, 23)
        Me.btnDelete.TabIndex = 10
        Me.btnDelete.Text = "Delete"
        Me.btnDelete.UseVisualStyleBackColor = True
        '
        'btnEdit
        '
        Me.btnEdit.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.btnEdit.Location = New System.Drawing.Point(146, 22)
        Me.btnEdit.Name = "btnEdit"
        Me.btnEdit.Size = New System.Drawing.Size(75, 23)
        Me.btnEdit.TabIndex = 11
        Me.btnEdit.Text = "Edit"
        Me.btnEdit.UseVisualStyleBackColor = True
        '
        'addBtn
        '
        Me.addBtn.FlatStyle = System.Windows.Forms.FlatStyle.Flat
        Me.addBtn.Location = New System.Drawing.Point(55, 22)
        Me.addBtn.Name = "addBtn"
        Me.addBtn.Size = New System.Drawing.Size(75, 23)
        Me.addBtn.TabIndex = 12
        Me.addBtn.Text = "Add"
        Me.addBtn.UseVisualStyleBackColor = True
        '
        'GroupBox1
        '
        Me.GroupBox1.Controls.Add(Me.btnDelete)
        Me.GroupBox1.Controls.Add(Me.addBtn)
        Me.GroupBox1.Controls.Add(Me.btnEdit)
        Me.GroupBox1.Location = New System.Drawing.Point(906, 93)
        Me.GroupBox1.Name = "GroupBox1"
        Me.GroupBox1.Size = New System.Drawing.Size(337, 59)
        Me.GroupBox1.TabIndex = 13
        Me.GroupBox1.TabStop = False
        Me.GroupBox1.Text = "Action"
        '
        'Form1
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(7.0!, 15.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(1255, 701)
        Me.Controls.Add(Me.GroupBox1)
        Me.Controls.Add(Me.Panel1)
        Me.Controls.Add(Me.Label3)
        Me.Controls.Add(Me.txtSearch)
        Me.Controls.Add(Me.cbSheet)
        Me.Controls.Add(Me.Label2)
        Me.Controls.Add(Me.txtFileName)
        Me.Controls.Add(Me.Label1)
        Me.Controls.Add(Me.browseBtn)
        Me.Name = "Form1"
        Me.RightToLeft = System.Windows.Forms.RightToLeft.No
        Me.SizeGripStyle = System.Windows.Forms.SizeGripStyle.Show
        Me.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen
        Me.Text = "ExcelViewer v.01"
        CType(Me.DataGridView1, System.ComponentModel.ISupportInitialize).EndInit()
        Me.Panel1.ResumeLayout(False)
        Me.UserInfo.ResumeLayout(False)
        Me.UserInfo.PerformLayout()
        Me.GroupBox1.ResumeLayout(False)
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents DataGridView1 As DataGridView
    Friend WithEvents browseBtn As Button
    Friend WithEvents Label1 As Label
    Friend WithEvents OpenFileDialog1 As OpenFileDialog
    Friend WithEvents txtFileName As TextBox
    Friend WithEvents Label2 As Label
    Friend WithEvents cbSheet As ComboBox
    Friend WithEvents txtSearch As TextBox
    Friend WithEvents Label3 As Label
    Friend WithEvents Panel1 As Panel
    Friend WithEvents btnSave As Button
    Friend WithEvents btnDelete As Button
    Friend WithEvents btnEdit As Button
    Friend WithEvents ReturnedValue As TextBox
    Friend WithEvents ApprovedValue As TextBox
    Friend WithEvents WithFeedbackValue As TextBox
    Friend WithEvents OngoingValue As TextBox
    Friend WithEvents TypeOfDocumentValue As TextBox
    Friend WithEvents MunicipalityValue As TextBox
    Friend WithEvents NoValue As TextBox
    Friend WithEvents DateValue As DateTimePicker
    Friend WithEvents NameValue As TextBox
    Friend WithEvents UserInfo As Panel
    Friend WithEvents addBtn As Button
    Friend WithEvents xControl As Button
    Friend WithEvents controlLabel As Label
    Friend WithEvents GroupBox1 As GroupBox
End Class
