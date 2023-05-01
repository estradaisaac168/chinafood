// Obtiene la fecha actual
const yearSpan = document.getElementById("year");

// Crear una nueva instancia de Date
const currentDate = new Date();

// Obtener el año actual
const currentYear = currentDate.getFullYear();

// Mostrar el año en el elemento HTML
yearSpan.textContent = currentYear;