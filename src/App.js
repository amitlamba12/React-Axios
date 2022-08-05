import './App.css';
import React from 'react';
import HooksCounter from './Components/HooksCounter';
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
// import About from './Components/About';
 import {AuthProvider} from './Components/auth'
import Navbar from './Components/Navbar';
import OrderSummary from './Components/OrderSummary';
import NoMatch from './Components/NoMatch';
import Product from './Components/Product';
import FeaturedProduct from './Components/FeaturedProduct';
import NewProducts from './Components/NewProducts';
import User from './Components/User';
import UserDetail from './Components/UserDetail';
import Profile from './Components/Profile'
import { Login } from './Components/Login';
import RegistrationForm from './Components/RegistrationForm';
import HTMLFORM from './Components/HTMLFORM';
import ImageUpload from './Components/ImageUpload';

import axios from 'axios';
import StaticForm from './Components/StaticForm';
const LazyAbout=React.lazy(()=>import('./Components/About'))
 function App() {
  // try {
  //   const url='https://course-api.com/react-store-products';
  //   const response= await axios.get(url)
  //   const data=await response.data
  //   console.log('Data',data)
  // } catch (error) {
  //   console.log(error.response)
  // }
  return (
    <div className="App">
      <AuthProvider>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='about' element={<React.Suspense  fallback='Loading ...'><LazyAbout /></React.Suspense>}></Route>
          <Route path='order-summary' element={<OrderSummary />}></Route>
          <Route path='products' element={<Product />}>
            <Route path='featured' element={<FeaturedProduct/>}></Route>
            <Route path='new' element={<NewProducts/>}></Route>
          </Route>
          <Route path='profile' element={<Profile/>}></Route>
          <Route path='user' element={<User/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='user/:userId' element={<UserDetail/>}></Route>
          <Route path='registration' element={<RegistrationForm/>}></Route>
          <Route path='static' element={<StaticForm/>}></Route>
          <Route path='hello' element={<HTMLFORM/>}></Route>
          <Route path='imageData' element={<ImageUpload/>}></Route>
          <Route path='/*' element={<NoMatch/>}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
