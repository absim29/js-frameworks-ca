import { Link } from "react-router-dom";

export default function Success() {
  return (
  <>
    <h1>Thank you for your purchase!</h1>
  <div className='prodContainer'>
    <p>Your purchase was successful. We appreciate your business and hope you enjoy your new items.</p>
    <p>Order Number: <strong>#123456</strong></p>
    <p>We have sent a confirmation email with your order details.</p>
    <Link to={"/"}>
        <button className="checkout-btn">Continue Shopping</button>
      </Link>
  </div>
  </>
)}