import React from 'react';
import Head from 'next/head';
import styles from "@styles/Account.module.scss";

const Account = () => {
  return (
    <>
    <Head>
    <title>Account</title>
  </Head>
    <div className={styles.account}>
      <div className={styles['account-form-container']}>
        <h1 className={styles.title}>My account</h1>
        <form action="/" className={styles['account-form']}>
          <div>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <p className="value">Camila Yokoo</p>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <p className="value">camilayokoo@example.com</p>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <p className={styles.value}>********</p>
          </div>
          <input
            type="submit"
            value="Edit"
            className={`${styles['secondary-button']} ${styles['login-button']}`}
          />
        </form>
      </div>
    </div>
    </>
  );
}

export default Account