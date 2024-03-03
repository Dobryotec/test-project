const openMenuBtn = document.querySelector("#data-menu-open");
const closeMenuBtn = document.querySelector("#data-menu-close");
const menu = document.querySelector("#data-menu");
const mobMenuList = document.querySelector(".mob-menu__list");

const toggleMenu = () => {
  menu.classList.toggle("is-hidden");

  if (menu.classList.contains("is-hidden")) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }
};

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
mobMenuList.addEventListener("click", toggleMenu);
