import React, { useState } from "react";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string | null;
};

type ProductListProps = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  onAddToCart: (product: Product) => void;
};

export const ProductList: React.FC<ProductListProps> = ({
  products,
  setProducts,
  onAddToCart,
}) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: null as string | null,
  });

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>, idx: number) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setProducts((prev) =>
        prev.map((p, i) =>
          i === idx ? { ...p, image: reader.result as string } : p
        )
      );
    };
    reader.readAsDataURL(file);
  }

  function handleNewImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewProduct((prev) => ({ ...prev, image: reader.result as string }));
    };
    reader.readAsDataURL(file);
  }

  function handleAddProduct() {
    if (
      !newProduct.name ||
      !newProduct.description ||
      !newProduct.price ||
      isNaN(Number(newProduct.price))
    )
      return;
    setProducts((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: newProduct.name,
        description: newProduct.description,
        price: Number(newProduct.price),
        image: newProduct.image,
      },
    ]);
    setNewProduct({ name: "", description: "", price: "", image: null });
  }

  return (
    <div>
      <h2 style={{ fontWeight: "bold" }}>Products</h2>
      <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
        {products.map((product, idx) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #eee",
              borderRadius: "8px",
              padding: "1rem",
              width: "220px",
              background: "white",
              boxSizing: "border-box",
            }}
          >
            <div style={{ height: "120px", marginBottom: "1rem", textAlign: "center" }}>
              <img
                src={
                  product.image ||
                  "https://via.placeholder.com/120x120?text=No+Image"
                }
                alt={product.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
            <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
              {product.name}
            </div>
            <div style={{ marginBottom: "0.5rem" }}>{product.description}</div>
            <div style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
              ${product.price}
            </div>
            <button
              style={{
                background: "#4CAF50",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
        {/* Add new product card */}
      </div>
    </div>
  );
};