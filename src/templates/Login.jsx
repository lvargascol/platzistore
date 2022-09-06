import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@logos/logo_yard_sale.svg';
import '@styles/Login.scss'

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
          <Image src={logo} alt="logo" className="login-logo" />
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

            <Link href="/">Forgot my password</Link>
          </form>
        </div>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
}

export default Login