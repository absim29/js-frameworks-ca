import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/Shop";

export default function CartComponent() {
  const { cart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = useCart();

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  const handleIncrement = (itemId) => {
    incrementQuantity(itemId);
  };

  const handleDecrement = (itemId) => {
    decrementQuantity(itemId);
  };

  const totalPrice = cart.reduce((total, item) => total + item.discountedPrice * item.quantity, 0);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

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
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <input value={item.quantity} />
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
            <p>Total Items: {totalItems}</p>
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <Link to={"/Success"} onClick={clearCart}>
              <button className="checkout-btn">Checkout</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
