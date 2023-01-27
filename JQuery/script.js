"use strict";

$("#cambiarLetra,#cambiarFuente, #cambiarColor, img").css("cursor", "pointer")

// Ejercicio 1

/**
 * Crea una página con una serie de botones, que, dependiendo de cual se pulse,
 *cambie el color del título, la fuente del párrafo o el tamaño de la letra.
 */

$("#cambiarLetra").click(() => {
    $("#p1").css("font-size", "small");
})

$("#cambiarFuente").click(() => {
    $("#p1").css("font-family", "arial");
})

$("#cambiarColor").click(() => {
    $("#ej1").css("color", "blue");
})

/**------------------------------------------ */

//Ejercicio 2

/**
 * Crea una página con un selector de idioma para una noticia. Dependiendo del
 *idioma que selecciones, haz que cambie el idioma tanto del titular como del cuerpo
 * de la noticia.
 */

$("#france").click(() => {
    $("#ej2").text("Exercer 2");
    $("#p2").text(`Créez une page avec un sélecteur de langue pour une actualité. 
        En fonction de la langue que vous sélectionnez, 
        faites-lui changer la langue du titre et du corps de lactualité.`)
})


$("#spain").click(() => {
    $("#ej2").text("Ejercicio 2");
    $("#p2").text(`Crea una página con un selector de idioma para una noticia.
    Dependiendo del idioma que selecciones, haz que cambie el idioma tanto del titular
    como del cuerpo de la noticia.`)
})

$("#uk").click(() => {
    $("#ej2").text("Exercise 2");
    $("#p2").text(`Create a page with a language selector for a news item. 
    Depending on the language you select, make it change the language of both
    the headline and the body of the news.`)
})

/**------------------------------------------ */

//Ejercicio 3

/**
 *Crea un selector de fotos. La página debe tener una imagen de gran tamaño seguida
 *de una serie de imágenes en miniatura.
 */

$("#img1").click(()=>{
    $("#img1").css("width", "600px");
    $("#img2").css("width", "150px");
    $("#img3").css("width", "150px");
    $("#img4").css("width", "150px");
})

$("#img2").click(()=>{
    $("#img1").css("width", "150px");
    $("#img2").css("width", "600px");
    $("#img3").css("width", "150px");
    $("#img4").css("width", "150px");
})

$("#img3").click(()=>{
    $("#img1").css("width", "150px");
    $("#img2").css("width", "150px");
    $("#img3").css("width", "600px");
    $("#img4").css("width", "150px");
})

$("#img4").click(()=>{
    $("#img1").css("width", "150px");
    $("#img2").css("width", "150px");
    $("#img3").css("width", "150px");
    $("#img4").css("width", "600px");
})



