import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cambia esta URL por la URL real de tu API en Azure
  const API_URL = "https://homestock-api-app.azurewebsites.net/api/products";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Error al obtener productos');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1>Inventario del Hogar</h1>
      {loading ? (
        <p>Cargando productos...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <strong>{product.name}</strong> - {product.quantity} {product.unit} en {product.location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
