import React, { useEffect, useState } from "react";
import { getProducts, addProduct } from "./services/api";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const handleAddProduct = async (newProduct) => {
    await addProduct(newProduct);
    const updated = await getProducts();
    setProducts(updated);
  };

  return (
    <div className="App">
      <h1>HomeStock - Inventario del Hogar</h1>
      <ProductForm onAdd={handleAddProduct} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
