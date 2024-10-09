// data.js

export let productsData = [];

// Función para obtener los productos desde la API
export async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Error al obtener los datos de la API");
    }

    const data = await response.json();
    productsData = data; // Guarda los productos obtenidos en la variable productsData
    return productsData;
  } catch (error) {
    console.error("Hubo un problema al obtener los productos:", error);
    return [];
  }
}
