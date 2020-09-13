import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/login">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <Link to="/">
        <div className="header__option">
          <div className="header__optionLineOne">Hello newt0</div>
          <div className="header__optionLineTwo">Sign in</div>
        </div>
      </Link>
      <Link to="/orders">
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
      </Link>

      <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">Prime</span>
      </div>

      <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
