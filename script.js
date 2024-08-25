function previewImage(inputId, previewId) {
    const fileInput = document.getElementById(inputId);
    const preview = document.getElementById(previewId);

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block';  
        };
        
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        preview.style.display = 'none';  
    }
}

function openPreview() {
    const form = document.getElementById('admissionForm');
    if (form.checkValidity()) {
        const formData = new FormData(form);

        const previewWindow = window.open('', '_blank');
        previewWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>NJV School Karachi Admission Form</title>
                <style>
                    body { font-family: Arial, sans-serif; background-color: #fff; padding: 20px; }
                    .header { text-align: center; margin-bottom: 20px; }
                    .logo { max-width: 100px; vertical-align: middle; }
                    .logo-left { float: left; }
                    .logo-right { float: right; }
                    .title { clear: both; margin-top: 20px; font-size: 24px; font-weight: bold; }
                    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                    td, th { padding: 10px; border: 1px solid #ddd; vertical-align: top; }
                    th { background-color: #f4f4f4; text-align: left; }
                    td img { max-width: 100px; max-height: 100px; border-radius: 10px; border: 1px solid #ddd; }
                    .form-actions { text-align: center; margin-top: 20px; }
                    button { background-color: blue; color: white; padding: 10px 20px; font-size: 16px; cursor: pointer; 
                    border: 3px solid rgb(114, 114, 146); text-align :center}
                </style>
            </head>
            <body>
                <div class="header">
                    <img src="njv logo.jpeg" alt="NJV School Logo Left" class="logo logo-left">
                    <img src="akhlogo.png" alt="NJV School Logo Right" class="logo logo-right">
                    <div class="title">NJV School Karachi Admission Form</div>
                </div>
                <table>
                    <tr>
                        <th>Student Image</th>
                        <td><img src="${URL.createObjectURL(formData.get('studentPhoto'))}" alt="Student Image"></td>
                    </tr>
                    <tr>
                        <th>Student First Name</th>
                        <td>${formData.get('applicantFirstName')}</td>
                    </tr>
                    <tr>
                        <th>Student Last Name</th>
                        <td>${formData.get('applicantLastName')}</td>
                    </tr>
                    <tr>
                        <th>Father’s Name</th>
                        <td>${formData.get('fatherName')}</td>
                    </tr>
                    <tr>
                        <th>Father’s CNIC</th>
                        <td>${formData.get('fatherCnic')}</td>
                    </tr>
                    <tr>
                        <th>Student’s CNIC/B-Form</th>
                        <td>${formData.get('studentCnic')}</td>
                    </tr>
                    <tr>
                        <th>Date of Birth</th>
                        <td>${formData.get('dob')}</td>
                    </tr>
                    <tr>
                        <th>Place of Birth</th>
                        <td>${formData.get('placeOfBirth')}</td>
                    </tr>
                    <tr>
                        <th>E-mail</th>
                        <td>${formData.get('email')}</td>
                    </tr>
                    <tr>
                        <th>Father’s Occupation</th>
                        <td>${formData.get('fatherOccupation')}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>${formData.get('phone')}</td>
                    </tr>
                    <tr>
                        <th>Postal Address</th>
                        <td>${formData.get('postalAddress')}</td>
                    </tr>
                    <tr>
                        <th>Emergency Contact</th>
                        <td>${formData.get('emergencyContact')}</td>
                    </tr>
                    <tr>
                        <th>Health Issue</th>
                        <td>${formData.get('healthIssue')}</td>
                    </tr>
                    <tr>
                        <th>Student’s CNIC/B-Form Image</th>
                        <td><img src="${URL.createObjectURL(formData.get('studentCnicImage'))}" alt="Student’s CNIC/B-Form Image"></td>
                    </tr>
                    <tr>
                        <th>Paid Chalan Voucher</th>
                        <td><img src="${URL.createObjectURL(formData.get('paidChalanImage'))}" alt="Paid Chalan Voucher"></td>
                    </tr>
                </table>
                <div class="form-actions">
                    <button onclick="window.print()">Print</button>
                </div>
            </body>
            </html>
        `);
        previewWindow.document.close();
    } else {
        alert('Please fill in all required fields.');
    }
}
