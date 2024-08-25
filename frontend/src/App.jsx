import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import Menu from "./components/layouts/Menu";
import Cart from "./components/cart/Cart";
import Login from "./components/users/Login";
import Profile from './components/users/Profile';
import Register from "./components/users/Register";
import ForgotPassword from "./components/users/ForgotPassword"
import NewPassword from './components/users/NewPassword'
import OrderSuccess from "./components/cart/OrderSuccess"
import OrderDetails from "./components/order/OrderDetails"
import ListOrders from "./components/order/ListOrders"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from "react-alert-template-basic";
import store from './store'
import { loadUser } from "./actions/userAction";
import UpdateProfile from "./components/users/UpdateProfile";

const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: "30px",
};

export default function App() {
  console.log(store)
  useEffect(()=>{
    store.dispatch(loadUser())
  },[])

  // const dispatch = useDispatch()
  // const {user}=useSelector((state)=>state.auth)
  // if(user){
  //   dispatch(fetchCartItems())
  // }

  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <div className="App">
        <Router>
          <Header />
          <div className="container ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users/login" element={<Login />} />
              <Route path="/users/signup" element={<Register />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/eats/stores/:id/menus" element={<Menu />} />
              <Route path="/users/me" element={<Profile/>} />
              <Route path="/users/me/update" element={<UpdateProfile/>} />
              <Route path="/users/forgetPassword" element={<ForgotPassword/>} />
              <Route path="/users/resetPassword/:token" element={<NewPassword/>} />
              <Route path="/success" element={<OrderSuccess/>} />
              <Route path="/eats/orders/me/myOrders" element={<ListOrders/>} />
              <Route path="/eats/orders/:id" element={<OrderDetails/>} />
              <Route path="*" element={<h1 className="text-center mt-5">The Page Doesnot exist</h1>} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
      ;
    </AlertProvider>
  );
}
