import React, { useState, useRef } from 'react';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // Get the first selected file
  };

  const handleUploadClick = () => {
    fileInputRef.current.click(); // Trigger the hidden file input
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      setMessage('Please select a file to upload.');
      return;
    }

    const formDataz = new FormData();
    formDataz.append('file', selectedFile); // Append the file to the FormData object

    console.log(formDataz)
    try {
      const response = await fetch('YOUR_UPLOAD_ENDPOINT', {
        method: 'POST',
        body: formDataz,
      });

      if (response.ok) {
        setMessage('File uploaded successfully!');
        setSelectedFile(null);
        fileInputRef.current.value = null; // Clear the input visually
      } else {
        setMessage('File upload failed.');
      }
    } catch (error) {
      setMessage('An error occurred while uploading the file.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>File Upload</h2>
      <button onClick={handleUploadClick}>Select File</button>
      <input
        type="file"
        onChange={handleFileChange}
        ref={fileInputRef} // Reference for the hidden input
        style={{ display: 'none' }} // Hide the input
        required
      />
      <button onClick={handleSubmit}>Upload</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FileUpload;
