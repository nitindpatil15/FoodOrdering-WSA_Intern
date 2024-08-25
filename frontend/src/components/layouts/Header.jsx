import React from "react";
import Search from "./Search";
import { Link,useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userAction";

const Header = () => {
  const alert = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();
   // eslint-disable-next-line 
  const { user, loading } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);
  
  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged Out Successfully");
    navigate("/");
  };

  return (
    <nav className="navbar row sticky-top">
      <div className="col-12 col-md-3">
        <img src={"/images/logo.webp"} alt="logo" className="logo" />
      </div>
      <div className="col-12 col-md-6 mt-2 mt-md-6">
        <Search />
      </div>
      <Link to={"/cart"} style={{textDecoration:"none"}}>
        <span className="ml-3" id="cart">
          cart
        </span>
        <span className="ml-1" id="cart_count">
          {cartItems.length}
        </span>

        {user ? (
          <>
            <div className="ml-4 dropdown d-inline">
              <Link
                to="/"
                className="btn dropdown-toggle text-white mr-4"
                type="button"
                id="dropDownButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <figure className="avatar avatar-nav">
                  <img
                    src={user.avatar.url}
                    alt="avatar"
                    className="rounded-circle "
                  />
                </figure>
                <span>{user && user.name}</span>
              </Link>

              <div
                className="dropdown-menu"
                aria-labelledby="dropDownMenuButton"
              >
                <Link to="/eats/orders/me/myOrders" className="dropdown-item">
                  Orders
                </Link>
                <Link to="/user/me" className="dropdown-item">
                  Profile
                </Link>
                <Link to="/" onClick={logoutHandler} className="dropdown-item">
                  Logout
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link to="/users/login" className="btn ml-4" id="login_btn">
              Login
            </Link>
          </>
        )}
      </Link>
    </nav>
  );
};

export default Header;
