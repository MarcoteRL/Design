"use strict";

$("#cambiarLetra,#cambiarFuente, #cambiarColor, img").css("cursor", "pointer")

// ---------------------------------------------Ejercicio 1-------------------------------------

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

//Ej 2

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

//Ej 3

/**
 *Crea un selector de fotos. La página debe tener una imagen de gran tamaño seguida
 *de una serie de imágenes en miniatura.
 */

$("#img1").click(() => {
    $("#img1").css("width", "600px");
    $("#img2").css("width", "150px");
    $("#img3").css("width", "150px");
    $("#img4").css("width", "150px");
})

$("#img2").click(() => {
    $("#img1").css("width", "150px");
    $("#img2").css("width", "600px");
    $("#img3").css("width", "150px");
    $("#img4").css("width", "150px");
})

$("#img3").click(() => {
    $("#img1").css("width", "150px");
    $("#img2").css("width", "150px");
    $("#img3").css("width", "600px");
    $("#img4").css("width", "150px");
})

$("#img4").click(() => {
    $("#img1").css("width", "150px");
    $("#img2").css("width", "150px");
    $("#img3").css("width", "150px");
    $("#img4").css("width", "600px");
})


// ------------------------------EJERCICIO 2------------------------------------------------


$("#cambiarLetra2").click(() => {
    $("#p1").slideUp(1000, () => {
        $("#p1").css("font-size", "small");
        $("#p1").slideDown();
    })
})

$("#cambiarFuente2").click(() => {
    $("#p1").slideUp(1000, () => {
        $("#p1").css("font-family", "arial");
        $("#p1").slideDown();
    })
})

$("#cambiarColor2").click(() => {
    $("#ej1").slideUp(1000, () => {
        $("#ej1").css("color", "blue");
        $("#ej1").slideDown();
    })
})


$("#france2").click(() => {
    $("#ej2, #p2").fadeOut(1000, () => {
        $("#ej2").text("Exercer 2");
        $("#p2").text(`Créez une page avec un sélecteur de langue pour une actualité. 
        En fonction de la langue que vous sélectionnez, 
        faites-lui changer la langue du titre et du corps de lactualité. `);
        $("#ej2, #p2").fadeIn();
    })
})


$("#spain2").click(() => {
    $("#ej2, #p2").fadeOut(1000, () => {
        $("#ej2").text("Ejercicio 2");
        $("#p2").text(`Crea una página con un selector de idioma para una noticia.
        Dependiendo del idioma que selecciones, haz que cambie el idioma tanto del titular
        como del cuerpo de la noticia.`);
        $("#ej2, #p2").fadeIn();
    })
})

$("#uk2").click(() => {
    $("#ej2, #p2").fadeOut(1000, () => {
        $("#ej2").text("Exercise 2");
        $("#p2").text(`Create a page with a language selector for a news item. 
        Depending on the language you select, make it change the language of both
        the headline and the body of the news.`);
        $("#ej2, #p2").fadeIn();
    })
})

// --------------------------------------------EJERCICIO 3----------------------------------------

let red = true;
$("#box1").dblclick(() => {
    if (red) {
        $("#box1").css("background-color", "green");
        red = false;
    } else {
        $("#box1").css("background-color", "red");
        red = true;
    }
})

let black = true;
$("#box2").dblclick(() => {
    if (black) {
        $("#box2").css("background-color", "white");
        black = false;
    } else {
        $("#box2").css("background-color", "black");
        black = true;
    }
})

let purple = true;
$("#box3").dblclick(() => {
    if (purple) {
        $("#box3").css("background-color", "yellow");
        purple = false;
    } else {
        $("#box3").css("background-color", "purple");
        purple = true;
    }
})


$(window).scroll(() => {
    if ($(window).scrollTop() > 0) {
        $("#scrollToTop").css("display", "inline");
    } else {
        $("#scrollToTop").css("display", "none");
    }
})

$("#scrollToTop").click(() => {
    $("body, html").animate({ scrollTop: 0 }, 300);
})

$("#formulario").submit((e) => {
    e.preventDefault();
    let inputs = $("#formulario :input");
    let values = {};
    inputs.each(function () {
        values[this.name] = $(this).val();
    });
    $(".item-nombre").append(values["nombre"]);
    $(".item-apellido").append(values["apellido"]);
    $(".item-edad").append(values["edad"]);
    $(".item-ciudad").append(values["ciudad"]);
})


// --------------------------------------------EJERCICIO 4----------------------------------------
$("#formulario2").keypress((e) => {
    console.log(e.key);
    switch (e.key) {
        case "a":
            $('.cuadrado').css({ marginLeft: '-=15px' });
            break;
        case "w":
            $('.cuadrado').css({ marginTop: '-=15px' });
            break;
        case "s":
            $('.cuadrado').css({ marginTop: '+=15px' });
            break;
        case "d":
            $('.cuadrado').css({ marginLeft: '+=15px' });
            break;
        case "+":
            $('.cuadrado').css({ width: '+=15px' });
            $('.cuadrado').css({ height: '+=15px' });
            break;
        case "-":
            $('.cuadrado').css({ width: '-=15px' });
            $('.cuadrado').css({ height: '-=15px' });
            break;
        default:
            break;
    }
})
