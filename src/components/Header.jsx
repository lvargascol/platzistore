import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from '@components/Menu';
import ShoppingCart from '@containers/ShoppingCart';
import logo from '@logos/logo_yard_sale.svg';
import menuIcon from '@icons/icon_menu.svg';
import shoppingCartIcon from '@icons/icon_shopping_cart.svg';
import MobileMenu from '@components/MobileMenu';
import AppContext from '@context/AppContext';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const {state, setToggleOrders} = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleToggleOrders = () => {
    setToggleOrders();
  };

  return (
    <nav className={styles.Nav}>
      <div className={styles['menu-icon']}>
        <Image src={menuIcon} alt="menu" onClick={handleToggle} />
      </div>
      <div className={styles['navbar-left']}>
        <div className={styles['nav-logo']}>
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Clothes</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furnitures</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={handleToggle}>
            mail@example.com
          </li>
          <li className={styles['navbar-shopping-cart']} onClick={() => handleToggleOrders()}>
            <Image src={shoppingCartIcon} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <MobileMenu />}
      {toggle && <Menu />}
      {state.toggleOrders && <ShoppingCart />}
    </nav>
  );
};

export default Header;