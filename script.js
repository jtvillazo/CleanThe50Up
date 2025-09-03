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
