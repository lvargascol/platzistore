import React, {useContext} from 'react';
import Link from 'next/link';
import AppContext from '@context/AppContext';
import styles from '@styles/Menu.module.scss';

const Menu = () => {
  const {state} = useContext(AppContext);
  let classMenu;

  if(state.toggleOrders) {
    classMenu = `${styles['menu']} ${styles['displayedOrders']}`;
  } else {
    classMenu = styles['menu'];
  };
  
  return (
    <div className={classMenu} >
      <ul>
        <li>
          <Link href="/orders" className={styles['menu-title']}>
            My orders
          </Link>
        </li>
        <li>
          <Link href="/account">My account</Link>
        </li>
        <li>
          <Link href="/">Sign out</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu