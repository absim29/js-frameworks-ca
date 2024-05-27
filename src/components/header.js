import { NavLink } from "react-router-dom";

export default function Navbar() {
  return <nav className="nav">
    <div className="logo">Logo</div>
    <ul>
      <li><NavLink to="/HomePage">Home</NavLink> </li>
      <li><NavLink to="/ContactPage">Contact</NavLink></li>
      <li><NavLink to="/CheckoutPage">Cart</NavLink></li>
    </ul>
  </nav>
}