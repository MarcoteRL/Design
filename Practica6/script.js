"use strict";

let citas = [
]

async function setTimeAppointments() {
    let pushed = [];
    for (let i = 0; i <= 23; i++) {
        if (citas.length > 0) {
            citas.forEach((element) => {
                if (i < 10 && !pushed.includes(`${i}:00`)) {
                    i = `0${i}`;
                }
                if (element.fecha != `${i}:00` && !pushed.includes(`${i}:00`)) {
                    $('#hora').append(`<option value="${i}:00">${i}:00</option>`);
                    pushed.push(`${i}:00`)
                }
            })
        } else {
            if (i < 10 && !pushed.includes(`${i}:00`)) {
                i = `0${i}`;
            }
            if (!pushed.includes(`${i}:00`)) {
                $('#hora').append(`<option value="${i}:00">${i}:00</option>`);
                pushed.push(`${i}:00`)
            }
        }
    }
}

async function addCita() {
    citas.push({
        nombre: $("input[name=nombre]").val(),
        fecha: $("input[name=fecha]").val(),
        hora: $("#hora option:selected").text()
    }
    );
    $("#hora option").delete()
    await setTimeAppointments();
    await showTable();
}

$("#formulario").submit((e) => {
    e.preventDefault();
    addCita();
})

async function showTable() {
    $("table").remove();
    let table = `<table class="table table-responsive">`;
    table += `<tr>
    <th scope="col">Nombre</th>
    <th scope="col">Fecha</th>
    <th scope="col">Hora</th>
    </tr>`;

    for (let i = 0; i < citas.length; i++) {
        console.log(citas[i].nombre);
        table += '<tr><td>' + citas[i].nombre + '</td><td>' + citas[i].fecha + '</td><td>' + citas[i].hora + '</td></tr>';
    }
    table += "</table>";
    $('#table-responsive').append(table);
}

setTimeAppointments();
showTable();