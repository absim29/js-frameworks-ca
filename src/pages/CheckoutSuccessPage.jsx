import { Link } from "react-router-dom";

export default function Success() {
  return (
  <>
    <h1>Your purchase was successful!</h1>
  <div className='prodContainer'>
    <Link to={"/"}>
        <button className="checkout-btn">Continue Shopping</button>
      </Link>
  </div>
  </>
)}