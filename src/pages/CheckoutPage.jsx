import { Link } from "react-router-dom";

export default function Cart() {
  return (
  <>
  <h1>Cart - Checkout</h1>
  <div className='prodContainer'>
    {/* <div className="btn-wrap"> */}
      <Link to={"/Success"}>
        <button className="checkout-btn">Checkout</button>
      </Link>
    {/* </div> */}
    </div>
  </>
)}