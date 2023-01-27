"use strict";

const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");
const song3 = document.getElementById("song3");

let checkAnimation = false; //Variable para controlar si la ani

song1.addEventListener('play', () => {
    song2.pause();
    song2.currentTime = 0;
    song2.
        song3.pause();
    song3.currentTime = 0;
});

song2.addEventListener('play', () => {
    song1.pause();
    song1.currentTime = 0;
    song3.pause();
    song3.currentTime = 0;
});

song3.addEventListener('play', () => {
    song1.pause();
    song1.currentTime = 0;
    song2.pause();
    song2.currentTime = 0;
});

function revealMusic() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 130;
        if (checkAnimation) {
            console.log("entro check");
            reveals.forEach((element) => {
                element.classList.remove("reveal");
            })
        } else {
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
                if (i == reveals.length - 1) {
                    console.log("Entro en length");
                    checkAnimation = true;
                }
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
}

window.addEventListener("scroll", revealMusic);