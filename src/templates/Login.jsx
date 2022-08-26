import React, { useRef } from 'react';
import '@styles/Login.scss'
import logo from '@logos/logo_yard_sale.svg';

const Login = () => {

  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password'),
    }
    console.log(data);
  }

  return (
    <div className="login">
      <div className="login-form-container">
        <div>
          <img src={logo} alt="logo" className="login-logo" />
          <form action="/" className="login-form" ref={form}>
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="input input-email"
              placeholder="email@example.com"
            />
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input input-password"
              placeholder="********"
            />
            <button
              className="primary-button login-button"
              onClick={handleSubmit}
            >
              Log in
            </button>

            <a href="/">Forgot my password</a>
          </form>
        </div>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
}

export default Login