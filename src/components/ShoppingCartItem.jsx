import React, {useContext} from 'react';
import closeIcon from '@icons/icon_close.png';
import AppContext from '@context/AppContext';

const ShoppingCartItem = ({ product, indexValue }) => {
  const {removeFromCart} = useContext(AppContext);

  const handleRemove = index => {
    removeFromCart(index);
  };

  return (
    <div className="shopping-cart">
      <figure>
        <img
          src={product.images[0]}
          alt={product.title}
        />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img src={closeIcon} alt="close" onClick={() => handleRemove(indexValue)} />
    </div>
  );
}

export default ShoppingCartItem