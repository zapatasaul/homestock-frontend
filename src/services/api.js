// src/services/api.js
const BASE_URL = "https://homestock-api-app.scm.azurewebsites.net/api";

export const getProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
};

export const addProduct = async (product) => {
  const res = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return res.json();
};
