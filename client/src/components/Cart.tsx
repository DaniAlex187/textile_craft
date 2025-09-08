import React from "react";
import { Product } from "./ProductList";

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CartProps = {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

export const Cart: React.FC<CartProps> = ({ cartItems, setCartItems }) => {
  function handleRemove(idx: number) {
    setCartItems((items) => items.filter((_, i) => i !== idx));
  }

  function handleQuantityChange(idx: number, value: number) {
    setCartItems((items) =>
      items.map((item, i) =>
        i === idx ? { ...item, quantity: Math.max(1, value) } : item
      )
    );
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "2rem", marginTop: "2rem" }}>
      <h1 style={{ fontWeight: "bold", marginBottom: "2rem" }}>Shopping Cart</h1>
      <table
        style={{
          width: "100%",
          marginBottom: "2rem",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th style={{ textAlign: "left", paddingBottom: "8px" }}>Item</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, idx) => (
            <tr key={item.product.id}>
              <td>{item.product.name}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(idx, Number(e.target.value))
                  }
                  className="cart-qty-input"
                  style={{
                    padding: "4px",
                    fontSize: "1rem",
                    width: "60px",
                  }}
                />
              </td>
              <td>${item.product.price}</td>
              <td>${item.product.price * item.quantity}</td>
              <td>
                <button
                  style={{
                    background: "#4CAF50",
                    color: "white",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleRemove(idx)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ fontWeight: "bold", marginBottom: "1rem" }}>
        Cart Total: ${total}
      </div>
      <button
        style={{
          background: "#4CAF50",
          color: "white",
          border: "none",
          padding: "0.5rem 1.5rem",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        disabled={cartItems.length === 0}
      >
        Checkout
      </button>
    </div>
  );
};