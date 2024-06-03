import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/Shop";

export default function CartComponent() {
  const { cart, removeFromCart, clearCart } = useCart();

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  const totalPrice = cart.reduce((total, item) => total + item.discountedPrice, 0);


  return (
    <>
      <div className="prodContainer">
        {cart.length === 0 ? (
          <>
            <p>Your cart is empty</p>
            <Link to={"/"}>
              <button className="checkout-btn">Continue Shopping</button>
            </Link>
          </>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <img src={item.image.url} alt={item.image.alt || item.title} className="image" />
                  {item.title} - ${item.discountedPrice.toFixed(2)}
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <Link to={"/Success"}>
              <button className="checkout-btn" onClick={clearCart}>Checkout</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
