"use strict";

const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2");
const song3 = document.getElementById("song3");

song1.addEventListener('play', () => {
    song2.pause();
    song2.currentTime = 0;
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

