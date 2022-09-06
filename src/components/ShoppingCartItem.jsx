import React, {useContext} from 'react';
import Image from 'next/image';
import closeIcon from '@icons/icon_close.png';
import AppContext from '@context/AppContext';
import styles from '@styles/ShoppingCart.module.scss'

//ATENTO: Estoy usando los stilos en componente padre ShopingCart.jsx. En caso de error, crear archivo de estilos independiente


const ShoppingCartItem = ({ product, indexValue }) => {
  const {removeFromCart} = useContext(AppContext);

  const handleRemove = index => {
    removeFromCart(index);
  };

  return (
    <div className={styles['shopping-cart']}>
      <figure className={styles['product-image']}>
        <Image
          loader={() => product?.images[0]}
          src={product?.images[0]}
          alt={product?.title}
          width="100%"
          height="100%"
          layout="responsive"
        />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image src={closeIcon} alt="close" onClick={() => handleRemove(indexValue)} />
    </div>
  );
}

export default ShoppingCartItem