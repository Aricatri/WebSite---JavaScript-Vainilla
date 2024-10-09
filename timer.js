// Función que configura un temporizador para cada producto
export function startTimer(timerElement, buttonElement, availableTime) {
  const timerInterval = setInterval(() => {
    const minutes = Math.floor((availableTime % 3600000) / 60000);
    const seconds = Math.floor((availableTime % 60000) / 1000);

    // Mostrar el tiempo restante en formato MM:SS
    timerElement.textContent = `00:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    availableTime -= 1000; // Reducir el tiempo restante

    if (availableTime <= 0) {
      clearInterval(timerInterval); // Detener el temporizador
      timerElement.textContent = "00:00:00";
      buttonElement.disabled = true; // Deshabilitar el botón
      buttonElement.textContent = "Unavailable"; // Cambiar el texto del botón
    }
  }, 1000); // Actualizar cada segundo
}
