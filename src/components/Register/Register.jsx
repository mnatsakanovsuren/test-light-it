import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let history = useHistory();

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
    if (response.ok) {
      history.push("/login");
    }
  }

  return (
    <section className="register section">
      <h1 className="register__title">Register</h1>
      <form  className="register__form form">
        <label className="register__form__item form__item" htmlFor="username">
          Username
          <input className="register__form__input form__input" onChange={handleUsername} value={username} id="username" type="text"/>
        </label>
        <label className="register__form__item form__item" htmlFor="password">
          Password
          <input className="register__form__input form__input" onChange={handlePassword} value={password} id="password" type="password"/>
        </label>
        <button className="form__button" type="submit" onClick={handleSubmit}>Register</button>

      </form>
    </section>
  );
};

export default Register;