const menu = document.querySelector(".hidden-menu");
const menuIcon = document.querySelector(".hamburguer");
// const headeMobile = document.querySelector("header");

//menu mobile
menu.addEventListener("click", function (e) {
    menu.classList.remove("display-menu");
});

menuIcon.addEventListener("click", function () {
    menu.classList.toggle("display-menu");
    // headeMobile.classList.toggle("mobile");
});