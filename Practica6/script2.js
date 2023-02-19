async function addCita() {
    hora = $("#hora option:selected").text();
    fecha = $("input[name=fecha]").val();
    nombre = $("input[name=nombre]").val();
    let splitted = fecha.split("-");
    if (splitted[0] < fechaHoy.year || splitted[1] < fechaHoy.month || splitted[2] < fechaHoy.day) {
        return;
    }
    if (citas.length == 0 || citas[fecha] == undefined) {
        citas[fecha] = [hora];
        return;
    } else if (!citas[fecha].includes(hora)) {
        citas[fecha].push(hora)
    }
    // if (citas.some((element) => {
    //     let splitted = $("input[name=fecha]").val().split("-");
    //     console.log(element.fecha == $("input[name=fecha]").val() && element.hora == $("#hora option:selected").text() || splitted[0] < fechaHoy.year ||
    //         splitted[1] < fechaHoy.month || splitted[2] < fechaHoy.day);
    //     return element.fecha == $("input[name=fecha]").val() &&
    //         element.hora == $("#hora option:selected").text() || splitted[0] < fechaHoy.year ||
    //         splitted[1] < fechaHoy.month || splitted[2] < fechaHoy.day

    // })) {
    //     return;
    // } else {
    //     citas.push({
    //         nombre: $("input[name=nombre]").val(),
    //         fecha: $("input[name=fecha]").val(),
    //         hora: $("#hora option:selected").text()
    //     }
    //     );
    // }
}


async function setTimeAppointment() {
    $("#hora option").remove();
    console.log(citas);
    let pushed = [];
    for (let i = 9; i <= 21; i++) {
        if (citas.length > 0) {
            citas.forEach((element) => {
                if (i < 10 && !pushed.includes(`${i}:00`)) {
                    i = `0${i}`;
                }
                if (element.hora != `${i}:00` && !pushed.includes(`${i}:00`)) {
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


async function showTable() {
    console.log("showTable");
    $("table").remove();
    let table = `<table class="table table-responsive">`;
    table += `<tr>
    <th scope="col">Nombre</th>
    <th scope="col">Fecha</th>
    <th colspan=2 scope="col">Hora</th>
    </tr>`;

    for (let i = 0; i < citas.length; i++) {
        table += '<tr><td>' + nombre +
            '</td><td>' + fecha + '</td><td>' + hora + '</td>';
        if (login) {
            console.log("Entro");
            table += `<td class="trash"><i class="fa-solid fa-trash" id="${i}"></i></td>` +
                '</tr>';
        } else {
            console.log("NOO");
            table += '</tr>'
        }
    }
    table += "</table>";
    $('#table-responsive').append(table);
    $('#table-responsive').removeClass("d-none")
    $(".trash").click(function (e) {
        e.preventDefault();
    })
}