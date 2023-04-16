const navList = document.getElementById("nav--list");
const navListItems = document.querySelectorAll(".nav--item");
const navMenu = document.querySelector(".nav--mobile-btn");

const button = document.querySelector(".btnup");
const threshold = 200;

const toggleNavMenu = function () {
  navMenu.classList.toggle("is-open");
  navList.classList.toggle("is-open");
};

navMenu.addEventListener("click", (event) => {
  toggleNavMenu();
});

navListItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (
      navMenu.classList.contains("is-open") ||
      navList.classList.contains("is-open")
    ) {
      toggleNavMenu();
    }
  });
});

document.addEventListener("scroll", function () {
  if (window.scrollY > threshold) {
    button.classList.add("is-active");
  } else {
    button.classList.remove("is-active");
  }
});
