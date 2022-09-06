import React from 'react';
import Image from 'next/image';
import styles from "@styles/Checkout.module.scss";

const CheckoutOrder = ({ product, indexValue }) => {
  return (
    <div className={styles['shopping-cart']}>
      <figure>
        <div>
          <Image loader={() => product.images[0]} src={product.images[0]} alt={product.title} width="100%" height="100%" layout="responsive" />
        </div>
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default CheckoutOrder;