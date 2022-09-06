import React from 'react';
import Image from 'next/image';
import arrowIcon from '@icons/flechita.svg';
import styles from '@styles/Orders.module.scss';

const Orders = () => {
  return (
    <div className={styles.Orders}>
      <div className={styles['Orders-container']}>
        <h1 className={styles.title}>My orders</h1>
        <div className={styles['Orders-content']}>
          <div className={styles['Orders-total']}>
            <p>
              <span>04.25.2021</span>
              <span>4 articulos</span>
            </p>
            <p>$ 560.00</p>
            <Image src={arrowIcon} alt="arrow" width="100%" height="100%" layout="responsive" />
          </div>
          <div className={styles['Orders-total']}>
            <p>
              <span>04.25.2021</span>
              <span>4 articulos</span>
            </p>
            <p>$ 560.00</p>
            <Image src={arrowIcon} alt="arrow" width="100%" height="100%" layout="responsive" />
          </div>
          <div className={styles['Orders-total']}>
            <p>
              <span>04.25.2021</span>
              <span>4 articulos</span>
            </p>
            <p>$ 560.00</p>
            <Image src={arrowIcon} alt="arrow" width="100%" height="100%" layout="responsive" />
          </div>
          <div className={styles['Orders-total']}>
            <p>
              <span>04.25.2021</span>
              <span>4 articulos</span>
            </p>
            <p>$ 560.00</p>
            <Image src={arrowIcon} alt="arrow" width="100%" height="100%" layout="responsive" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Orders;
