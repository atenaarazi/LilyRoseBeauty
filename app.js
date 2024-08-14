"use strict";

const menu = document.querySelector("menu-bar");
const navbar = document .querySelector(".navbar");
const darkThemeBtnv = document.getElementById("dark");

darkThemeBtnv.onclick = function (){
    document.body.classList.toggle("dark-theme");
};

menu.addEventListener("click", function () {
    menu.classList.toggle("fa-times");
    navbar.classListList.toggle("active");
});

window. scroll = () =>{
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
};
let slides = document.querySelectorAll(".slides-container");
let index = 0;

function next() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides [index].classList.add("active");
}

function prev(){
    slides[index].classList.remove("active");
    index = (index -1 + slides.length) % slides.length;
    slides[index].classList.add("active");
}

document.querySelectorAll(".featured-image-1").forEach((image_1) => {
    image_1.addEventListener("click",() =>{
        const src = image_1.getAttribute("src");
        document.querySelector(".big-image-1").src =src ;
    });
});

