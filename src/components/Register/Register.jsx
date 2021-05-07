import React, {useState} from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async (credentials) => {
    return fetch('http://smktesting.herokuapp.com/api/register/', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  const handleUsername = (event) => {
    setUsername(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await registerUser({username, password});
    console.log(response);
    if (response.ok) {
      window.location.href = '/login';
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <form>
        <label htmlFor="username">
          Username
          <input onChange={handleUsername} value={username} id="username" type="text"/>
        </label>
        <label htmlFor="password">
          Password
          <input onChange={handlePassword} value={password} id="password" type="password"/>
        </label>
        <button type="submit" onClick={handleSubmit}>Login</button>

      </form>
    </div>
  );
};

export default Register;