import React from 'react';
import "../styles/Account.scss";

const Account = () => {
  return (
    <div className="account">
      <div className="account-form-container">
        <h1 className="title">My account</h1>
        <form action="/" className="account-form">
          <div>
            <label for="name" className="label">
              Name
            </label>
            <p className="value">Camila Yokoo</p>
            <label for="email" className="label">
              Email
            </label>
            <p className="value">camilayokoo@example.com</p>
            <label for="password" className="label">
              Password
            </label>
            <p className="value">********</p>
          </div>
          <input
            type="submit"
            value="Edit"
            className="secondary-button login-button"
          />
        </form>
      </div>
    </div>
  );
}

export default Account