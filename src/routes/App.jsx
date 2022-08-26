//type rafce

import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "@containers/Layout";
import Password from "@pages/Password";
import Recovery from "@pages/Recovery";
import '@styles/global.css';
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import CreateAccount from "@pages/CreateAccount";
import Login from "@pages/Login";
import Orders from "@pages/Orders";
import EmailSent from "@pages/EmailSent";
import Account from "@pages/Account";
import Checkout from "@pages/Checkout";
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();
    return (
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/account" element={<Account />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/new-password" element={<Password />} />
              <Route path="/password-recovery" element={<Recovery />} />
              <Route path="/email-sent" element={<EmailSent />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AppContext.Provider>
    );
}

export default App;