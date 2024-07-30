import React from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import Menu from "./components/layouts/Menu";
import Cart from "./components/cart/Cart";
import Login from './components/users/Login';
import Register from './components/users/Register';
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom'

export default function App() {
  return <div className="App">
    <Router>
    <Header/>
    <div className="container ">
    <Home/>
    <Menu/>
    <Routes>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Register/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </div>
    <Footer/>
    </Router>
  </div>;
}
