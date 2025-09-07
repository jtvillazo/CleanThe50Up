// script.js

// Elementos del modal
const overlay = document.getElementById("black-overlay");
const modal = document.getElementById("text-ctn");
const closeButton = document.getElementById("close-button");
const modalName = document.getElementById("modal-name");
const modalMessage = document.getElementById("modal-message");
let activeAvatar = null;

// Todos los avatares
const avatars = document.querySelectorAll(".avatars");

// --- Mensajes organizados por semana y avatar ---
const semanas = [
  // Semana 1: LIVING, KITCHEN, SHOWER, TOILET
  [
    `Your area: LIVING ROOM!
1. Vacuum carpet
2. Tidy blankets, shoes, and scattered items
3. Clean tables
4. Water plants
5. Clean windows (mold)`,

    `Your area: KITCHEN!
1. Clean up floor, table, top bench, fridge, microwave, toaster.
2. Clean up doors, walls and window.
3. Clean up oven and trays.
4. Empty and clean bins.
5. Clean up sink and dish drainer.`,

    `Your area: BATHROOM!
1. Clean shower floor and walls
2. Clean shower frame
3. Clean sink
4. Clean bathtub
5. Mop the floor
6. Dry the bath mat
7. Clean window
8. Clean mirror`,

    `Your area: TOILET!
1. Clean toilet inside and outside
2. Clean all bathroom fixtures
3. Mop the floor
4. Remove empty toilet paper roll
5. Replace with new toilet paper
6. Clean window
7. Notify if paper is missing`,
  ],

  // Semana 2: TOILET, LIVING, KITCHEN, SHOWER
  [
    `Your area: TOILET!
1. Clean toilet inside and outside
2. Clean all bathroom fixtures
3. Mop the floor
4. Remove empty toilet paper roll
5. Replace with new toilet paper
6. Clean window
7. Notify if paper is missing`,

    `Your area: LIVING ROOM!
1. Vacuum carpet
2. Tidy blankets, shoes, and scattered items
3. Clean tables
4. Water plants
5. Clean windows (mold)`,

    `Your area: KITCHEN!
1. Clean up floor, table, top bench, fridge, microwave, toaster.
2. Clean up doors, walls and window.
3. Clean up oven and trays.
4. Empty and clean bins.
5. Clean up sink and dish drainer.`,

    `Your area: BATHROOM!
1. Clean shower floor and walls
2. Clean shower frame
3. Clean sink
4. Clean bathtub
5. Mop the floor
6. Dry the bath mat
7. Clean window
8. Clean mirror`,
  ],

  // Semana 3: SHOWER, TOILET, LIVING, KITCHEN
  [
    `Your area: BATHROOM!
1. Clean shower floor and walls
2. Clean shower frame
3. Clean sink
4. Clean bathtub
5. Mop the floor
6. Dry the bath mat
7. Clean window
8. Clean mirror`,

    `Your area: TOILET!
1. Clean toilet inside and outside
2. Clean all bathroom fixtures
3. Mop the floor
4. Remove empty toilet paper roll
5. Replace with new toilet paper
6. Clean window
7. Notify if paper is missing`,

    `Your area: LIVING ROOM!
1. Vacuum carpet
2. Tidy blankets, shoes, and scattered items
3. Clean tables
4. Water plants
5. Clean windows (mold)`,

    `Your area: KITCHEN!
1. Clean up floor, table, top bench, fridge, microwave, toaster.
2. Clean up doors, walls and window.
3. Clean up oven and trays.
4. Empty and clean bins.
5. Clean up sink and dish drainer.`,
  ],

  // Semana 4: KITCHEN, SHOWER, TOILET, LIVING
  [
    `Your area: KITCHEN!
1. Clean up floor, table, top bench, fridge, microwave, toaster.
2. Clean up doors, walls and window.
3. Clean up oven and trays.
4. Empty and clean bins.
5. Clean up sink and dish drainer.`,

    `Your area: BATHROOM!
1. Clean shower floor and walls
2. Clean shower frame
3. Clean sink
4. Clean bathtub
5. Mop the floor
6. Dry the bath mat
7. Clean window
8. Clean mirror`,

    `Your area: TOILET!
1. Clean toilet inside and outside
2. Clean all bathroom fixtures
3. Mop the floor
4. Remove empty toilet paper roll
5. Replace with new toilet paper
6. Clean window
7. Notify if paper is missing`,

    `Your area: LIVING ROOM!
1. Vacuum carpet
2. Tidy blankets, shoes, and scattered items
3. Clean tables
4. Water plants
5. Clean windows (mold)`,
  ],
];

// --- Función para obtener índice de semana 0..3 ---
function getWeekIndex() {
  const start = new Date(new Date().getFullYear(), 0, 1);
  const now = new Date();
  const diff = now - start;
  const week = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
  return week % semanas.length; // 0..3
}

// --- Evento click en cada avatar ---
avatars.forEach((avatar, index) => {
  avatar.addEventListener("click", () => {
    const nombre = avatar.dataset.nombre;
    const weekIndex = getWeekIndex();

    if (activeAvatar) {
      activeAvatar.classList.remove("active-avatar");
    }

    // Cada avatar toma su mensaje de la semana según el índice y su posición
    modalName.textContent = nombre;
    modalMessage.textContent = semanas[weekIndex][index];

    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");
    closeButton.classList.remove("hidden");
    avatar.classList.add("active-avatar");
    document.body.appendChild(avatar);

    activeAvatar = avatar;
  });
});

// --- Botón cerrar ---
closeButton.addEventListener("click", () => {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
  closeButton.classList.add("hidden");
  if (activeAvatar) {
    activeAvatar.classList.remove("active-avatar");
    document.querySelector(".avatars-ctn").appendChild(activeAvatar); // lo devuelves
    activeAvatar.style.left = "";
    activeAvatar.style.top = "";
  }
});

overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
  closeButton.classList.add("hidden");
  if (activeAvatar) {
    activeAvatar.classList.remove("active-avatar");
    document.querySelector(".avatars-ctn").appendChild(activeAvatar); // lo devuelves
    activeAvatar.style.left = "";
    activeAvatar.style.top = "";
  }
});
