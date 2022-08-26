import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import addToCartIcon from '@icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
  const {addToCart} = useContext(AppContext);

  const handleClick = item => {
    addToCart(item);
  };

  return (
    <div className="product-card">
      <img
        src={product.images[0]}
        alt={product.title}
      />
      <div className="product-item">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={addToCartIcon} alt="add-to-card" />
        </figure>
      </div>
    </div>
  );
}

export default ProductItem