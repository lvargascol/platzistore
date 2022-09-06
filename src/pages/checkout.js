import React, {useContext} from 'react';
import Head from 'next/head';
import CheckoutOrder from '@components/CheckoutOrder';
import ShoppingCartItem from '@components/ShoppingCartItem';
import AppContext from '@context/AppContext';
import styles from "@styles/Checkout.module.scss";

const Checkout = () => {

  const {state} =useContext(AppContext);


  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.Checkout}>
        <div className={styles['Checkout-container']}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles['Checkout-content']}>
            <div className={styles['Checkout-total']}>
              <p>
                <span>04.25.2021</span>
                <span>4 articulos</span>
              </p>
              <p>$ 560.00</p>
            </div>
            {state.cart.map((product, index) => (
              <CheckoutOrder product={product} key={index} indexValue={index} />
            ))}
            {/* <ShoppingCartItem/> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout