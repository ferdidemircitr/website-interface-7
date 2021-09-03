const menuClick = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const inputs = document.querySelectorAll(".input");
const logo = document.querySelector(".logo-container");

menuClick.addEventListener("click", () => {
    navbar.classList.toggle("change");
});

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}
function blurFunc() {
    if (this.value == "") {
        let parent = this.parentNode;
        parent.classList.remove("focus");
    }

}
inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

function noFixed(){
    if(pageYOffset > 10){
        logo.classList.add("noLogo");
    }else{
        logo.classList.remove("noLogo");
    }
}
window.addEventListener("scroll", noFixed);