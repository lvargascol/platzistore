import React from 'react';
import Image from 'next/image';
import closeIcon from '@icons/icon_close.png';
import addToCartIcon from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductInfo.module.scss';

const ProductInfo = () => {
  return (
    <div className={styles['product-detail']}>
      <div className={styles['product-detail-close']}>
        <Image src={closeIcon} alt="close" />
      </div>
      <Image
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="bike"
        className={styles['product-info-Image']}
      />
      <div className={styles['product-info']}>
        <p>$ 120.00</p>
        <p>Bike</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          aliquam nemo dolorem unde dolore dolorum nisi atque, praesentium
          beatae iste quas sit, ex modi. Temporibus id laboriosam possimus! Cum,
          sapiente?
        </p>
      </div>
      <button className={`${styles['primary-button']} ${styles['add-to-card-button']}`}>
        <Image src={addToCartIcon} alt="add to cart" />
        Add to cart
      </button>
    </div>
  );
}

export default ProductInfo