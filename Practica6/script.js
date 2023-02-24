"use strict";

let citas = [];
let citasProg = {};
let admin = { user: "admin", pass: "admin" };
let login = false;

let dt = new Date();
let year = dt.getFullYear();
let month = "";
let day = "";
let mes = dt.getMonth() + 1;

if (dt.getMonth() < 10) {
    month = "0" + mes;
} else {
    month = mes;
}

if (dt.getDate() < 10) {
    day = "0" + dt.getDate();
} else {
    day = dt.getDate();
}

let fechaHoy = {
    year: year,
    month: month,
    day: day
}

let hoy = year + "-" + month + "-" + day;

/**
 * Función que muestra las horas para poder concertar las citas.
 */
async function setTimeAppointment() {
    let fecha = $("input[name=fecha]").val();
    $("#hora option").remove();
    let pushed = [];
    for (let i = 9; i <= 21; i++) {
        if (citas.length > 0 && citasProg[fecha] != undefined) {
            if (!citasProg[fecha].includes(`${i}:00`) && !pushed.includes(`${i}:00`)) {
                $('#hora').append(`<option value="${i}:00">${i}:00</option>`);
                pushed.push(`${i}:00`)
            }else{
                $('#hora').append(`<option value="${i}:00" disabled>${i}:00</option>`);
            }
        } else {
            if (!pushed.includes(`${i}:00`)) {
                $('#hora').append(`<option value="${i}:00">${i}:00</option>`);
                pushed.push(`${i}:00`)
            }else{
                $('#hora').append(`<option value="${i}:00" disabled>${i}:00</option>`);
            }
        }
    }
}

/**
 * Función que verifica si la cita está disponible y la añade al array de citas.
 * @returns 
 */
async function addCita() {
    $(".alert").removeClass("alert-danger");
    $(".alert").text("");
    if (citas.length == 0) {
        citas.push({
            nombre: $("input[name=nombre]").val(),
            fecha: $("input[name=fecha]").val(),
            hora: $("#hora option:selected").text()
        });
        citasProg[$("input[name=fecha]").val()] = [$("#hora option:selected").text()];
        return;
    }
    if (citas.some((element) => {
        let splitted = $("input[name=fecha]").val().split("-");
        return element.fecha == $("input[name=fecha]").val() &&
            element.hora == $("#hora option:selected").text() || splitted[0] < fechaHoy.year ||
            splitted[1] < fechaHoy.month || splitted[2] < fechaHoy.day
    })
    ) {
        $(".alert").addClass("alert-danger");
        $(".alert").fadeIn(200).delay(600).fadeOut(400);
        $(".alert").text("No disponible");
        return;
    } else {
        citas.push({
            nombre: $("input[name=nombre]").val(),
            fecha: $("input[name=fecha]").val(),
            hora: $("#hora option:selected").text()
        });
        if (citasProg[$("input[name=fecha]").val()] == undefined) {
            citasProg[$("input[name=fecha]").val()] = [$("#hora option:selected").text()];
        } else {
            citasProg[$("input[name=fecha]").val()].push($("#hora option:selected").text())
        }
    }
}


/**
 * Función que recorre el array de citas y va creando la tabla.
 */
async function showTable() {
    let fecha = $("input[name=fecha]").val();
    $("table").remove();
    let table = `<table class="table table-responsive">`;
    table += `<tr>
    <th scope="col">Nombre</th>
    <th scope="col">Fecha</th>
    <th colspan=2 scope="col">Hora</th>
    </tr>`;

    for (let i = 0; i < citas.length; i++) {
        table += '<tr><td>' + citas[i].nombre +
            '</td><td>' + citas[i].fecha + '</td><td>' + citas[i].hora + '</td>';
        if (login) {
            table += `<td class="trash"><i class="fa-solid fa-trash" id="${i}"></i></td>` +
                '</tr>';
        } else {
            table += '</tr>'
        }
    }
    table += "</table>";
    $('#table-responsive').append(table);
    $('.container-tabla').removeClass("d-none")
    $(".trash").click(async function (e) {
        e.preventDefault();
        citasProg[fecha].splice(citasProg[fecha].indexOf(citas[e.target.id].hora), 1)
        citas.splice(e.target.id, 1);
        await setTimeAppointment();
        await showTable();
    })
}

/**
 * Recoge el submit de inicio de sesión y comprueba si el usuario y contraseña son correctos.
 * Si son correctos muestra la tabla y cambia la variable login a true.
 */
$(".login").submit(function (e) {
    e.preventDefault();
    let usuario = $("input[name=user]").val();
    let password = $("input[name=pass]").val();
    if (usuario == admin.user && password == admin.pass) {
        login = true;
        $(".login").replaceWith($("<h4 class='d-flex ms-auto mr-3'>" + "Panel de Administrador" + "</h4>"));
        if (citas.length > 0) {
            showTable();
        }
    } else {
        login = false;
    }
});


/**
 * Recoge el submit del formulario y llama a las siguientes funciones.
 */
$("#formulario").submit(async (e) => {
    e.preventDefault();
    await addCita();
    await setTimeAppointment();
    await showTable();
})

setTimeAppointment();