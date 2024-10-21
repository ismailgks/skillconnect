import React, { useState, useEffect } from 'react';

const TestForm = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');
  const [file, setFile] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('tokenQQ')
    setToken(token)
  }, []);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
    }
    alert(121)
  };
  const uploadSubmit = async (event) => {

    const formData = new FormData();
    formData.append('file', file);



  }

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    const formData = new FormData();
    const data = new FormData();
    // Append form fields
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    // Append the image file
    if (image) {
      data.append('image', image);
    }
    formData.append('file', file);

    console.log(formData)
    try {
      const response = await fetch('https://dev-skillsconnectgateway.onzitr.com/api/student/Student/UpdateFile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Registration failed.');
      }

      const result = await response.json();
      setMessage('Registration successful: ' + result.message);
    } catch (error) {
      setMessage('Registration failed: ' + error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <button type="submit">Register</button>
      </form>
      <button value='Login' className='signBtn btnEditPro' onClick={uploadSubmit}> Continue </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default TestForm;
