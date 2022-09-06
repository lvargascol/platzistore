import React from 'react'; 
import Image from 'next/image';
import logo from '@logos/logo_yard_sale.svg';
import '../styles/Password.scss';

const Password = () => {
  return (
    <div className="password" >
        <div className="password-form-container">
            <Image src={logo} alt="logo" className="password-logo"/>
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for your account</p>
            <form action="/" className="form">
                <label htmlFor="password" className="label">Password</label>
                <input type="password" id="password" className="input input-password" placeholder="********"/>
                <label htmlFor="new-password" className="label">Re-enter password</label>
                <input type="password" id="new-password" className="input input-password" placeholder="********"/>
                <input type="submit" value="Confirm" className="primary-button login-button"/>
            </form>
        </div>
    </div>
  )
}

export default Password