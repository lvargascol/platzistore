import React from 'react';
import '../styles/ProductDetail.scss';
import closeIcon from '@icons/icon_close.png';
import addToCartIcon from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
  return (
    <div className='product-detail'>
      <div className="product-detail-close">
        <img src={closeIcon} alt="close" />
      </div>
      <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="bike"
        className="product-info-img"
      />
      <div className="product-info">
        <p>$ 120.00</p>
        <p>Bike</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          aliquam nemo dolorem unde dolore dolorum nisi atque, praesentium
          beatae iste quas sit, ex modi. Temporibus id laboriosam possimus! Cum,
          sapiente?
        </p>
      </div>
      <button className="primary-button add-to-card-button">
        <img src={addToCartIcon} alt="add to cart" />
        Add to cart
      </button>
    </div>
  );
}

export default ProductInfo