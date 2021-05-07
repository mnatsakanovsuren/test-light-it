import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  let history = useHistory();

  const loginUser = async (credentials) => {
    return fetch('http://smktesting.herokuapp.com/api/login/', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(data => data.json());
  }

  const handleUsername = (event) => {
    setUsername(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await loginUser({username, password});
    if (response.success) {
      setToken(response.token);
      history.push("/home");
    } else {
      setError(true)
    }
  }

  return (
    <div>
      <h1>Login</h1>
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
      {error && <p>wrong login or password, please try again with another data</p>}
      <p>if don't have login - <Link to="/register">registration</Link></p>
    </div>
  );
};

export default Login;