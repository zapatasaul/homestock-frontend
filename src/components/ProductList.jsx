import React from "react";

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Inventario</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <strong>{p.name}</strong> - {p.quantity} {p.unit} ({p.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
