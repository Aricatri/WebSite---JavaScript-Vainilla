import { productsData } from './data.js';
import { startTimer } from './timer.js';

// Función para mostrar los productos en la página
export function renderProducts() {
  const productsContainer = document.querySelector(".product-list");

  productsData.forEach((product) => {
    const productCard = document.createElement("article");
    productCard.classList.add("productcard");

    // Crear y configurar la imagen del producto
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;
    img.classList.add("card__image");

    // Crear y configurar el título
    const title = document.createElement("h2");
    title.textContent = product.title;

    // Crear el contenedor de precio
    const price = document.createElement("span");
    price.textContent = `$${product.price}`;

    // Crear el contenedor para el temporizador y el botón
    const timerButtonContainer = document.createElement("div");
    timerButtonContainer.classList.add("timer-button-container"); // Clase específica

    // Crear los elementos del temporizador y el botón
    const timer = document.createElement("p");
    timer.textContent = "Temporizador";
    timer.classList.add("timer");

    const button = document.createElement("button");
    button.textContent = "Add to bag";
    button.classList.add("add-to-bag-button");

    // Añadir el temporizador y el botón al contenedor
    timerButtonContainer.appendChild(timer);
    timerButtonContainer.appendChild(button);

    // Construir la tarjeta del producto
    productCard.appendChild(img);
    productCard.appendChild(title);
    productCard.appendChild(price);
    productCard.appendChild(timerButtonContainer); // Agregar el contenedor

    productsContainer.appendChild(productCard);

    // Inicializar el temporizador con tiempo aleatorio
    const randomTime = Math.floor(Math.random() * 120000) + 60000;
    startTimer(timer, button, randomTime);
  });
}
