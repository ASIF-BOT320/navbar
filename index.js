// const navbar = document.querySelector(".nav")
// window.addEventListener("scroll", navFix)

// function navFix() {
//     if (window.scrollY, navbar.offsetHeight > 150) {
//         navbar.classList.add(".active")
//     } else {
//         navbar.classList.remove(".active")
//     }
// }


let navbar = document.querySelector(".nav");
let button = document.querySelector(".BTN");

button.addEventListener("click", () => {
    navbar.classList.remove("active");
    button.addEventListener("onmouseout", () => {
        console.log("hellow world");
        navbar.classList.add("active");
    })
})