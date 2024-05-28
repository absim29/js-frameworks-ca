import { NavLink } from "react-router-dom";

export default function Navbar() {
  return <nav className="nav">
    <div className="logo">eCOMstore</div>
    <ul>
      <li><NavLink to="/" className={({ isActive }) => (isActive ? 'li active' : 'li')}>Home</NavLink> </li>
      <li><NavLink to="/Contact">Contact</NavLink></li>
      <li><NavLink to="/Checkout">Cart</NavLink></li>
    </ul>
  </nav>
}