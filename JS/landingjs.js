document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Please select a file to upload.');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    fetch('https://v83juolvqh.execute-api.us-east-1.amazonaws.com/ImportCsv/Tester', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').textContent = 'File uploaded successfully!';
    })
    .catch(error => {
        console.error('Error uploading file:', error);
        document.getElementById('message').textContent = 'Error uploading file.';
    });
    
});
