import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handlePost = () => {
    axios.post('https://dev-skillsconnectgateway.onzitr.com/api/Auth/Login', { 'username': '9074498649', 'password': 'Divya@123', 'rememberMe': true  })
      .then(response => setResponse(response.data))
      .catch(error => setError(error));
  };

  return (
    <div>
      <button onClick={handlePost}>Submit Data</button>
      {error && <div>Error: {error.message}</div>}
      {response && (
        <div>
          <h1>API Data:</h1>
          <pre>Username: {JSON.stringify(response.username, null, 2)}</pre>
          <pre>Token: {JSON.stringify(response.token, null, 2)}</pre>          
        </div>
      )}
    </div>
  );
}

export default LoginForm;
