import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return <nav className="nav">
    <div className="logo">eCOMstore</div>
    <ul>
      <li><NavLink to="/" className={({ isActive }) => (isActive ? 'li active' : 'li')}>Home</NavLink> </li>
      <li><NavLink to="/Contact">Contact</NavLink></li>
      <li><NavLink to="/Checkout"><FontAwesomeIcon icon={faShoppingCart} /></NavLink></li>
    </ul>
  </nav>
}