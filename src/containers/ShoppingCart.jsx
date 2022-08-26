import React, {useContext} from 'react'
import ShoppingCartItem from '@components/ShoppingCartItem';
import arrowIcon from '@icons/flechita.svg';
import '@styles/ShoppingCart.scss';
import AppContext from '@context/AppContext';


const ShoppingCart = () => {

  const {state, setToggleOrders} =useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer,0);
    return sum;
  }

  const handleToggleOrders = () => {
    setToggleOrders();
  };

  return (
    <aside className="shopping-cart-detail">
      <div className="shopping-cart-title-container">
        <div onClick={() => handleToggleOrders()}>
          <img src={arrowIcon} alt="arrow"/>
        </div>
        <p className="shopping-cart-title">Shopping cart</p>
      </div>

      <div className="order-content">
        {state.cart.map((product, index) => (
          <ShoppingCartItem product={product} key={index} indexValue={index} />
        ))}
      </div>
      <div className="order-total">
        <p>
          <span>Total</span>
        </p>
        <p>${sumTotal()}</p>
      </div>
      <a href="/checkout">
        <button className="primary-button">Checkout</button>
      </a>
    </aside>
  );
}

export default ShoppingCart