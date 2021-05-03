import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Location from "./Location";
import "./HeaderResp.css";

const HeaderResp = () => {
  return (
    <div className="header__responsive">
      <div className="header__right">
        <img
          className="header__logo hoverBorder"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
        <div className="header__nav">
          <div className="header__option hoverBorder">
            <span className="header__optionLineOne">Deliver to</span>
            <span className="header__optionLineTwo">
              <Location />
            </span>
          </div>
          <div className="header__option hoverBorder">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
          <div className="header__option hoverBorder">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
          <div className="header__option hoverBorder">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {/* {basket?.length} */}0
            </span>
          </div>
        </div>
      </div>
      <div className="header__left">
        <div className="header__search">
          <div className="header__searchSelect">
            <select name="cars" className="header__searchSelectItem">
              <option>All</option>
              <option>Arts &amp; Crafts</option>
              <option>Automotive</option>
              <option>Baby</option>
              <option>Beauty &amp; Personal Care</option>
              <option>Books</option>
              <option>Computers</option>
              <option>Digital Music</option>
              <option>Electronics</option>
              <option>Kindle Store</option>
              <option>Prime Video</option>
              <option>Women's Fashion</option>
              <option>Men's Fashion</option>
              <option>Girls' Fashion</option>
              <option>Boys' Fashion</option>
              <option>Deals</option>
              <option>Health &amp; Household</option>
              <option>Home &amp; Kitchen</option>
              <option>Industrial &amp; Scientific</option>
              <option>Luggage</option>
              <option>Movies &amp; TV</option>
              <option>Music, CDs &amp; Vinyl</option>
              <option>Pet Supplies</option>
              <option>Software</option>
              <option>Sports &amp; Outdoors</option>
              <option>Tools &amp; Home Improvement</option>
              <option>Toys &amp; Games</option>
              <option>Video Games</option>
            </select>
          </div>
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
      </div>
    </div>
  );
};

export default HeaderResp;
