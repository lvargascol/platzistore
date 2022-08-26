import React from 'react'; 
import '../styles/Password.scss';
import logo from '@logos/logo_yard_sale.svg';

const Password = () => {
  return (
    <div className="password" >
        <div className="password-form-container">
            <img src={logo} alt="logo" className="password-logo"/>
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for your account</p>
            <form action="/" className="form">
                <label for="password" className="label">Password</label>
                <input type="password" id="password" className="input input-password" placeholder="********"/>
                <label for="new-password" className="label">Re-enter password</label>
                <input type="password" id="new-password" className="input input-password" placeholder="********"/>
                <input type="submit" value="Confirm" className="primary-button login-button"/>
            </form>
        </div>
    </div>
  )
}

export default Password