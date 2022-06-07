// TODO: Functions //

function appendClass(element, classElement) {
    element.classList.toggle(classElement);
}

function removeClass(element, classElement) {
    element.classList.remove(classElement);
}

// TODO: Header //

const closeHeaderNavBar = document.querySelector(".header .fa-times");
const headerNavBar = document.querySelector(".header__nav__bar__container");
const headerBars = document.querySelector(".header .fa-bars");

headerBars.addEventListener("click", e => {
    appendClass(headerNavBar, "active");
})

closeHeaderNavBar.addEventListener("click", e => {
    removeClass(headerNavBar, "active");
});