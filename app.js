// ===== SELECCIÓN DE ELEMENTOS =====
const cards = document.querySelectorAll(".card");
const botones = document.querySelectorAll(".botones button");
const contador = document.querySelector("#contador");

// ===== ESTADO =====
let letrasVistas = 0;

// ===== VOLTEAR =====
function voltear(card) {
  // Pone la clase "volteada" si no está, y la quita si está
  card.classList.toggle("volteada");

  // Solo cuenta la primera vez que se descubre la letra
  if (!card.classList.contains("vista")) {
    card.classList.add("vista"); // marca permanente, nunca se quita
    letrasVistas++;
    contador.textContent = letrasVistas;
  }
}

// ===== FILTRAR =====
function filtrar(tipo) {
  for (const card of cards) {
    if (tipo === "todas" || card.dataset.tipo === tipo) {
      card.classList.remove("oculta");
    } else {
      card.classList.add("oculta");
    }
  }
}

// ===== EVENTOS =====
for (const card of cards) {
  card.addEventListener("click", () => voltear(card));
}

for (const boton of botones) {
  boton.addEventListener("click", () => filtrar(boton.dataset.filtro));
}