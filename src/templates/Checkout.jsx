import React, {useContext} from 'react';
import "@styles/Checkout.scss";
import CheckoutOrder from '@components/CheckoutOrder';
import AppContext from '@context/AppContext';

const Checkout = () => {

  const {state} =useContext(AppContext);


  return (
    <div className="Checkout">
      <div className="Checkout-container">
        <h1 className="title">My order</h1>
        <div className="Checkout-content">
          <div className="Checkout-total">
            <p>
              <span>04.25.2021</span>
              <span>4 articulos</span>
            </p>
            <p>$ 560.00</p>
          </div>    
          {state.cart.map((product, index) => (
          <CheckoutOrder product={product} key={index} indexValue={index} />
        ))}  
        </div>
      </div>
    </div>
  );
}

export default Checkout