import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/Shop";
import { Button, TextField } from "@mui/material";

export default function CartComponent() {
  const {
    cart,
    removeFromCart,
    clearCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  const handleIncrement = (itemId) => {
    incrementQuantity(itemId);
  };

  const handleDecrement = (itemId) => {
    decrementQuantity(itemId);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.discountedPrice * item.quantity,
    0
  );
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      {cart.length === 0 ? (
        <>
          <p>It looks like you haven't added anything to your cart yet.</p>
          <Link to={"/"}>
            <button className="checkout-btn">Continue Shopping</button>
          </Link>
        </>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="img-wrapper">
                  <img
                    src={item.image.url}
                    alt={item.image.alt || item.title}
                    className="cart-image"
                  />
                </div>
                <p>
                  {item.title} -{" "}
                  <strong>${item.discountedPrice.toFixed(2)}</strong>
                </p>
                <div className="cart-details">
                  <div className="counter">
                    <Button onClick={() => handleDecrement(item.id)}>-</Button>
                    <TextField value={item.quantity} />
                    <Button onClick={() => handleIncrement(item.id)}>+</Button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </ul>

          <h3>
            Total ({totalItems} items) : ${totalPrice.toFixed(2)}
          </h3>
          <Link to={"/Success"} onClick={clearCart}>
            <button className="checkout-btn">Checkout</button>
          </Link>
        </>
      )}
    </>
  );
}
