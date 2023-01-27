"use strict";

const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");
const song3 = document.getElementById("song3");
let checkAnimation = false;

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
    song1.load
    song3.pause();
    song3.currentTime = 0;
});

song3.addEventListener('play', () => {
    song1.pause();
    song1.currentTime = 0;
    song2.pause();
    song2.currentTime = 0;
});

/**
 * Función que añade y elimina clases para que los elementos tengan animación.
 */
function revealMusic() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 130;
        if (checkAnimation) {                       // Si se ejecutaron las animaciones de los elementos, 
            reveals.forEach((element) => {          //elimina la clase reveal para que la animación solo se 
                element.classList.remove("reveal"); //ejecute una vez y de esta manera no aborrezca al usuario.
            })
        } else {
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
                if (i == reveals.length - 1) {
                    checkAnimation = true;
                }
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
}

// Se ejecuta la función revealMusic al hacer scroll.
window.addEventListener("scroll", revealMusic);