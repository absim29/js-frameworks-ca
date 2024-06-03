import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "../SearchBar";
import { useCart } from "../../context/Shop";

export default function Navbar() {

  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
  <nav className="nav">
    <div>
    <div className="logo">eCOMstore</div>
    <ul>
      <li><NavLink to="/" className={({ isActive }) => (isActive ? 'li active' : 'li')}>Home</NavLink> </li>
      <li><NavLink to="/Contact">Contact</NavLink></li>
      <li>
          <NavLink to="/Checkout">
            <div className="cart-icon">
              <FontAwesomeIcon icon={faShoppingCart} />
                {totalItems > 0 && <div className="cart-overlay">{totalItems}</div>}
            </div>
          </NavLink>
      </li>
    </ul>
    </div>
    <SearchBar />
  </nav>
  </>
  );
};