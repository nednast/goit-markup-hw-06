let backdrop = document.querySelector(".backdrop");
let backdropOpen = document.querySelector(".button-order");
let backdropClose = document.querySelector(".modal-close");
let modalMenu = document.querySelector(".modal-menu");
let menuOpen = document.querySelector(".menu-icon");
let menuClose = document.querySelector(".menu-close");
let Studio = document.querySelector("#Studio");
let Portfolio = document.querySelector("#Portfolio");
let Contacts = document.querySelector("#Contacts");

backdropOpen.addEventListener("click", () => {
  backdrop.classList.add("is-open");
});

backdropClose.addEventListener("click", () => {
  backdrop.classList.remove("is-open");
});

menuOpen.addEventListener("click", () => {
  modalMenu.classList.add("is-open");
});

menuClose.addEventListener("click", () => {
  modalMenu.classList.remove("is-open");
});

Studio.addEventListener("click", () => {
  Studio.classList.add("current");
  Portfolio.classList.remove("current");
  Contacts.classList.remove("current");
});

Portfolio.addEventListener("click", () => {
  Portfolio.classList.add("current");
  Studio.classList.remove("current");
  Contacts.classList.remove("current");
});

Contacts.addEventListener("click", () => {
  Contacts.classList.add("current");
  Studio.classList.remove("current");
  Portfolio.classList.remove("current");
});
