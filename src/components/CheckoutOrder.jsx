import React from 'react';

const CheckoutOrder = ({ product, indexValue }) => {
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
  </div>
  )
};

export default CheckoutOrder;