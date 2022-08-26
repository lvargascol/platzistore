import React from 'react';
import Header from '../components/Header';
import ProductDetail from '../containers/ProductDetail';
import ProductList from '../containers/ProductList';
import ShoppingCart from '../containers/ShoppingCart';

const Home = () => {
  return (
    <div>
      <Header />
      <ProductList />
      {/* <ProductDetail /> */}
    </div>
  );
}

export default Home