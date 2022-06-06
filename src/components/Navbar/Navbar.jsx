import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const { cartItemsCount } = useContext(CartContext);
  const navigate = useNavigate();
  const handleLoginClick = () => {
    if (isAuth) {
      logout();
    } else {
      navigate("/login");
    }
  };
  return (
    <div data-cy="navbar" className="p-3 flex gap-5 justify-between">
      <div className="flex gap-5">
        <Link data-cy="navbar-home-link" to="/">Logo</Link>
      </div>
      <div className="flex gap-5">
        <span data-cy="navbar-cart-items-count">Cart: {cartItemsCount && `(${cartItemsCount})`}</span>
        <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>
          {isAuth ? "Logout" : "Login"}
        </button>
      </div>
      
    </div>
  );
};

export default Navbar;
