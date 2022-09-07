import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ShoppingCartItem from '@components/ShoppingCartItem';
import arrowIcon from '@icons/flechita.svg';
import AppContext from '@context/AppContext';
import styles from '@styles/ShoppingCart.module.scss';

const ShoppingCart = () => {
  const { state, setToggleOrders ,sumTotal } = useContext(AppContext);


  const handleToggleOrders = () => {
    setToggleOrders();
  };

  return (
    <aside className={styles['shopping-cart-detail']}>
      <div className={styles['shopping-cart-title-container']}>
        <div onClick={() => handleToggleOrders()}>
          <div className={styles['arrowIcon']}>
            <Image src={arrowIcon} alt="arrow" />
          </div>
        </div>
        <p className={styles['shopping-cart-title']}>Shopping cart</p>
      </div>

      <div className={styles['order-content']}>
        {state.cart.map((product, index) => (
          <ShoppingCartItem product={product} key={index} indexValue={index} />
        ))}
      </div>
      <div className={styles['order-total']}>
        <p>
          <span>Total</span>
        </p>
        <p>${sumTotal()}</p>
      </div>
      <Link href="/checkout">
        <Link className={styles['primary-button']} href="/checkout" >Checkout</Link>
      </Link>
    </aside>
  );
};

export default ShoppingCart;
