import React from 'react';
import Contact from './pages/ContactPage';
import Cart from './pages/CheckoutPage';
import Home from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Post from './pages/ProductPage';
import Success from './pages/CheckoutSuccessPage';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Layout>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Checkout' element={<Cart />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='/Success' element={<Success />} />
          <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
      </div>
      </Layout>
    </>
  );
}

export default App;
