const avatars = document.querySelectorAll(".avatars");

let activeAvatar = null;
const blackOverlay = document.getElementById("black-overlay");
const note = document.getElementById("text-ctn");
const button = document.getElementById("close-button");

avatars.forEach((avatar) => {
  avatar.addEventListener("click", () => {
    if (activeAvatar) {
      activeAvatar.classList.remove("active-avatar");
    }
    avatar.classList.add("active-avatar");
    activeAvatar = avatar;
    blackOverlay.classList.remove("hidden");
    note.classList.remove("hidden");
  });
});

button.addEventListener("click", () => {
  if (activeAvatar) {
    activeAvatar.classList.remove("active-avatar");
  }
  blackOverlay.classList.add("hidden");
  note.classList.add("hidden");
});

const mensajes = [
  `This week you are assigned to the KITCHEN!
    1. Clean up floor, table, top bench ,fridge, microwave, toster.
    2. Clean up doors, walls and window.
    3. Clean up oven and trays.
    4. Empty and clean bins.
    5. Clean up sink and dish drainer.`,

  `This week you are assigned to the LIVING ROOM.
1. Vacuum carpet
2. Tidy blankets, shoes, and scattered items
3. Clean tables
4. Water plants
5. Clean windows (mold)`,

  `This week you are assigned to TOILET.
1. Clean toilet inside and outside
2. Clean all bathroom fixtures
3. Mop the floor
4. Remove empty toilet paper roll
5. Replace with new toilet paper
6. Clean window
7. Notify if paper is missing for purchase`,

  `This week you are assigned to BATHROOM.
1. Clean shower floor and walls
2. Clean shower frame
3. Clean sink
4. Clean bathtub
5. Mop the floor
6. Dry the bath mat
7. Clean window
8. Clean mirror`,
];
