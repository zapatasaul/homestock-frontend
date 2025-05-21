import React, { useState } from "react";

const ProductForm = ({ onAdd }) => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    quantity: 0,
    unit: "",
    expiration_date: "",
    location: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(product);
    setProduct({
      name: "",
      category: "",
      quantity: 0,
      unit: "",
      expiration_date: "",
      location: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Producto</h2>
      <input
        name="name"
        placeholder="Nombre"
        value={product.name}
        onChange={handleChange}
        required
      />
      <input
        name="category"
        placeholder="Categoría"
        value={product.category}
        onChange={handleChange}
      />
      <input
        name="quantity"
        type="number"
        placeholder="Cantidad"
        value={product.quantity}
        onChange={handleChange}
      />
      <input
        name="unit"
        placeholder="Unidad"
        value={product.unit}
        onChange={handleChange}
      />
      <input
        name="expiration_date"
        type="date"
        value={product.expiration_date}
        onChange={handleChange}
      />
      <input
        name="location"
        placeholder="Ubicación"
        value={product.location}
        onChange={handleChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default ProductForm;
