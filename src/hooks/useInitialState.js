import { useState } from "react";

const initialState = {
  cart: [],
  toggleOrders: false,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (indexValue) => {
    setState({
        ... state,
        cart: state.cart.filter( (product, index) => index !== indexValue),
    })
  }

  const setToggleOrders = () => {
    setState({
      ... state,
      toggleOrders: !state.toggleOrders,
    });
  }

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };


  return {
    state,
    addToCart,
    removeFromCart,
    setToggleOrders,
    sumTotal,
  };
};

export default useInitialState;
