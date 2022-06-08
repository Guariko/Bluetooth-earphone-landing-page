// TODO: Functions //

function appendClass(element, classElement) {
    element.classList.toggle(classElement);
}

function removeClass(element, classElement) {
    element.classList.remove(classElement);
}

function changeTitle (element, widthSize, IfValue, ElseValue) {
    if (window.innerWidth >= widthSize) {
        element.innerHTML = IfValue;
    }

    else {
        element.innerHTML = ElseValue;
    }
}

// FIXME: Function ends //

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

// FIXME: Header ends //

// TODO: Discount section //

const discountTitle = document.querySelector(".discount__content h2");
const discountTitleIfValue = "Immerse yourself in <br/>your music";
const discountTitleElseValue = "Immerse yourself in your music";


changeTitle(discountTitle, 650, discountTitleIfValue, discountTitleElseValue);

window.addEventListener("resize", e => {
    changeTitle(discountTitle, 650, discountTitleIfValue, discountTitleElseValue);
});

// FIXME: Discount section ends //