const nav = document.querySelector("nav");
const mobileNav = document.querySelector("nav.mobile-nav");

const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 60) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
  if (window.pageYOffset > 5) {
    mobileNav.classList.add("scrolled");
  } else {
    mobileNav.classList.remove("scrolled");
  }
});

menuIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.remove("active");
});
