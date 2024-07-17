import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Success from './pages/Success';
import './App.css';


const App = () => {

  return (
    
    <Provider store={store}>
      <Router>
       <Routes>
       <Route exact path="/" element={<Home/>} />
       <Route exact path="/cart" element={<Cart />} />
       <Route exact path="/success" element={<Success />} />
       </Routes>
       </Router>

    </Provider>


  );
};

export default App;
