const openNavButton = document.querySelector("#open-nav-button");
const closeNavButton = document.querySelector("#close-nav-button");
const nav = document.querySelector('.nav');

openNavButton.addEventListener("click", () => {
  nav.classList.add("nav-open");
});

closeNavButton.addEventListener("click", () => {
  nav.classList.remove("nav-open");
});