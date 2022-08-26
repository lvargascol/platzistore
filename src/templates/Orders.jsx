import React from 'react';
import "@styles/Orders.scss";
import arrowIcon from '@icons/flechita.svg';

const Orders = () => {
  return (
    <div className="Orders">
      <div className="Orders-container">
        <h1 className="title">My orders</h1>
        <div className="Orders-content">
          <div className="Orders-total">
            <p>
              <span>04.25.2021</span>
              <span>4 articulos</span>
            </p>
            <p>$ 560.00</p>
            <img src="./icons/flechita.svg" alt="arrow" />
          </div>
          <div className="Orders-total">
            <p>
              <span>04.25.2021</span>
              <span>4 articulos</span>
            </p>
            <p>$ 560.00</p>
            <img src="./icons/flechita.svg" alt="arrow" />
          </div>
          <div className="Orders-total">
            <p>
              <span>04.25.2021</span>
              <span>4 articulos</span>
            </p>
            <p>$ 560.00</p>
            <img src="./icons/flechita.svg" alt="arrow" />
          </div>
          <div className="Orders-total">
            <p>
              <span>04.25.2021</span>
              <span>4 articulos</span>
            </p>
            <p>$ 560.00</p>
            <img src="./icons/flechita.svg" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders