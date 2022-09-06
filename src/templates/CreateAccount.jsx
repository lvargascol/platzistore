import React from 'react';
import '../styles/CreateAccount.scss';

const CreateAccount = () => {
  return (
    <div className="createAccount">
      <div className="form-container">
        <h1 className="title">My account</h1>
        <form action="/" className="form">
          <div>
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="input input-name"
              placeholder="Your name"
            />

            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="input input-email"
              placeholder="email@example.com"
            />

            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input input-password"
              placeholder="********"
            />
          </div>

          <input
            type="submit"
            value="Create"
            className="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
}

export default CreateAccount