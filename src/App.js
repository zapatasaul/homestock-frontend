import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cambia esta URL si usas una URL diferente en producción
  const API_URL = 'https://homestock-api-app.azurewebsites.net/api/products';

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inventario del Hogar</h1>
      </header>
      <main>
        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product.product_id}>
                <strong>{product.name}</strong> – {product.quantity} unidad(es)
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default App;
