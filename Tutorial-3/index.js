const open = document.getElementById("menu-btn");
const exit = document.getElementById("exit-btn");
const nav = document.getElementById("nav");

open.addEventListener("click", () => {
  nav.classList.add("open-nav");
});
exit.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});
