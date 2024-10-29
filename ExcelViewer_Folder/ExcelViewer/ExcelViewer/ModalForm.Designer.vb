<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
Partial Class ModalForm
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
        Me.NameValue = New System.Windows.Forms.TextBox()
        Me.DateValue = New System.Windows.Forms.DateTimePicker()
        Me.NoValue = New System.Windows.Forms.TextBox()
        Me.MunicipalityValue = New System.Windows.Forms.TextBox()
        Me.TypeOfDocumentValue = New System.Windows.Forms.TextBox()
        Me.OngoingValue = New System.Windows.Forms.TextBox()
        Me.WithFeedbackValue = New System.Windows.Forms.TextBox()
        Me.ApprovedValue = New System.Windows.Forms.TextBox()
        Me.ReturnedValue = New System.Windows.Forms.TextBox()
        Me.SuspendLayout()
        '
        'NameValue
        '
        Me.NameValue.Location = New System.Drawing.Point(144, 153)
        Me.NameValue.Name = "NameValue"
        Me.NameValue.Size = New System.Drawing.Size(100, 23)
        Me.NameValue.TabIndex = 0
        '
        'DateValue
        '
        Me.DateValue.CustomFormat = "1-jan-24"
        Me.DateValue.Format = System.Windows.Forms.DateTimePickerFormat.Custom
        Me.DateValue.Location = New System.Drawing.Point(144, 60)
        Me.DateValue.Name = "DateValue"
        Me.DateValue.RightToLeft = System.Windows.Forms.RightToLeft.No
        Me.DateValue.Size = New System.Drawing.Size(200, 23)
        Me.DateValue.TabIndex = 1
        '
        'NoValue
        '
        Me.NoValue.Location = New System.Drawing.Point(144, 108)
        Me.NoValue.Name = "NoValue"
        Me.NoValue.Size = New System.Drawing.Size(100, 23)
        Me.NoValue.TabIndex = 2
        '
        'MunicipalityValue
        '
        Me.MunicipalityValue.Location = New System.Drawing.Point(144, 193)
        Me.MunicipalityValue.Name = "MunicipalityValue"
        Me.MunicipalityValue.Size = New System.Drawing.Size(100, 23)
        Me.MunicipalityValue.TabIndex = 3
        '
        'TypeOfDocumentValue
        '
        Me.TypeOfDocumentValue.Location = New System.Drawing.Point(144, 233)
        Me.TypeOfDocumentValue.Name = "TypeOfDocumentValue"
        Me.TypeOfDocumentValue.Size = New System.Drawing.Size(100, 23)
        Me.TypeOfDocumentValue.TabIndex = 4
        '
        'OngoingValue
        '
        Me.OngoingValue.Location = New System.Drawing.Point(144, 272)
        Me.OngoingValue.Name = "OngoingValue"
        Me.OngoingValue.Size = New System.Drawing.Size(100, 23)
        Me.OngoingValue.TabIndex = 5
        '
        'WithFeedbackValue
        '
        Me.WithFeedbackValue.Location = New System.Drawing.Point(144, 315)
        Me.WithFeedbackValue.Name = "WithFeedbackValue"
        Me.WithFeedbackValue.Size = New System.Drawing.Size(100, 23)
        Me.WithFeedbackValue.TabIndex = 6
        '
        'ApprovedValue
        '
        Me.ApprovedValue.Location = New System.Drawing.Point(144, 356)
        Me.ApprovedValue.Name = "ApprovedValue"
        Me.ApprovedValue.Size = New System.Drawing.Size(100, 23)
        Me.ApprovedValue.TabIndex = 7
        '
        'ReturnedValue
        '
        Me.ReturnedValue.Location = New System.Drawing.Point(144, 398)
        Me.ReturnedValue.Name = "ReturnedValue"
        Me.ReturnedValue.Size = New System.Drawing.Size(100, 23)
        Me.ReturnedValue.TabIndex = 8
        '
        'ModalForm
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(7.0!, 15.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(800, 450)
        Me.Controls.Add(Me.ReturnedValue)
        Me.Controls.Add(Me.ApprovedValue)
        Me.Controls.Add(Me.WithFeedbackValue)
        Me.Controls.Add(Me.OngoingValue)
        Me.Controls.Add(Me.TypeOfDocumentValue)
        Me.Controls.Add(Me.MunicipalityValue)
        Me.Controls.Add(Me.NoValue)
        Me.Controls.Add(Me.DateValue)
        Me.Controls.Add(Me.NameValue)
        Me.Name = "ModalForm"
        Me.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen
        Me.Text = "ModalForm"
        Me.TopMost = True
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents NameValue As TextBox
    Friend WithEvents DateValue As DateTimePicker
    Friend WithEvents NoValue As TextBox
    Friend WithEvents MunicipalityValue As TextBox
    Friend WithEvents TypeOfDocumentValue As TextBox
    Friend WithEvents OngoingValue As TextBox
    Friend WithEvents WithFeedbackValue As TextBox
    Friend WithEvents ApprovedValue As TextBox
    Friend WithEvents ReturnedValue As TextBox
End Class
