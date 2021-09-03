const menuClick = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const down = document.getElementById("down");
const up = document.getElementById("up");
const upload = document.querySelector(".upload");
const footer = document.querySelector("footer");

menuClick.addEventListener("click", () => {
    navbar.classList.toggle("change");
});

window.addEventListener("scroll", () => {
    if (scrollY > 180) {
        down.classList.add("hide");
    } else {
        down.classList.remove("hide");
    }
});

window.addEventListener("scroll", () => {
    if (pageYOffset > 600) {
        up.style.opacity = 1;
    } else {
        up.style.opacity = 0;
    }
});

function upClick() {
    window.scrollTo(0, 0);
}