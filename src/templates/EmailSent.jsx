import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/EmailSent.scss';
import emailIcon from '@icons/email.svg';
import logo from '@logos/logo_yard_sale.svg';

const EmailSent = () => {
  return (
    <div className="emailSent">
      <div className="email-form-container">
        <Image src={logo} alt="logo" className="email-logo" />
        <h1 className="title">Email has been sent</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <Image src={emailIcon} alt="email" />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>Didn&#34t receive the email?</span>
          <Link href="/">Resend</Link>
        </p>
      </div>
    </div>
  );
}

export default EmailSent