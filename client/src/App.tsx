import React, { useState } from "react";
import { ProductList, Product } from "./components/ProductList";
import { Cart, CartItem } from "./components/Cart";

export default function App() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Custom Dress",
      description: "Handmade dress tailored to your size.",
      price: 120,
      image: null,
    },
    {
      id: 2,
      name: "Home-Made Suit",
      description: "Custom suit crafted at home.",
      price: 200,
      image: null,
    },
    {
      id: 3,
      name: "Summer Skirt",
      description: "Light and breezy, perfect for summer.",
      price: 60,
      image: null,
    },
  ]);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function handleAddToCart(product: Product) {
    setCartItems((items) => {
      const idx = items.findIndex((item) => item.product.id === product.id);
      if (idx !== -1) {
        // Already in cart, increase quantity
        return items.map((item, i) =>
          i === idx ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Not in cart, add new
      return [...items, { product, quantity: 1 }];
    });
  }

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "32px",
        background: "#fafafa",
        minHeight: "100vh",
        borderRadius: "20px",
      }}
    >
      <ProductList
        products={products}
        setProducts={setProducts}
        onAddToCart={handleAddToCart}
      />
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}