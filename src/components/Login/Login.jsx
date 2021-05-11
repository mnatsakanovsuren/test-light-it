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
      localStorage.setItem('token', response.token);
      history.push("/home");
    } else {
      setError(true)
    }
  }

  return (
    <section className="login section">
      <h1 className="login__title">Login</h1>
      <form className="login__form form">
        <label className="login__form__item form__item" htmlFor="username">
          Username
          <input className="form__input" onChange={handleUsername} value={username} id="username" type="text"/>
        </label>
        <label className="login__form__item form__item" htmlFor="password">
           Password
          <input className="form__input" onChange={handlePassword} value={password} id="password" type="password"/>
        </label>
        <button className="form__button" type="submit" onClick={handleSubmit}>Login</button>
        {error && <p className="login__error form__error">wrong login or password, please try again with another data</p>}
      </form>
      <p>If you don't have login - click <Link to="/register">registration</Link></p>
    </section>
  );
};

export default Login;