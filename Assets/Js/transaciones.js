/*FUNCION ESTA EN CONTACTO.HTML PARA AGREGAR LOS CONTACTOS INGRESADOS POR EL USUARIO Y GURDARLOS EN SENDMONEY.HTML*/ 

$(document).ready(function () {

    $("#btnAgregar-Contacto").click(function () {

        let nombre = $("#nombreContacto").val();
        let banco = $("#bancoContacto").val();
        let cuenta = $("#cuentaContacto").val();

        if (nombre === "" || banco === "" || cuenta === "") {
            alert("⚠️ Completa todos los campos");
            return;
        }

        // 📦 Obtener contactos existentes
        let contactos = JSON.parse(localStorage.getItem("contactos")) || [];

        // ➕ nuevo contacto
        let nuevoContacto = {
            nombre: nombre,
            banco: banco,
            cuenta: cuenta
        };

        contactos.push(nuevoContacto);

        // 💾 guardar en memoria del navegador
        localStorage.setItem("contactos", JSON.stringify(contactos));

        alert("✅ Contacto guardado correctamente");

        // limpiar campos
        $("#nombreContacto").val("");
        $("#bancoContacto").val("");
        $("#cuentaContacto").val("");
    });

});

/*ACTULIZAR LOS MOVIMIENTOS EN ULTIMASTRANSACIONES.HTML AL TRANSFERIR DESDE SENDMONEY.HTML*/

$(document).ready(function () {

    let movimientos =
        JSON.parse(localStorage.getItem("movimientos")) || [];

    movimientos.reverse();

    movimientos.forEach(function (mov) {

        $("#listaMovimientos").append(`

            <div class="movimiento">

                <div>
                    <strong>${mov.tipo}</strong><br>
                    <small>${mov.fecha}</small>
                </div>

                <span class="monto negativo">
                    -$${mov.monto.toLocaleString("es-CL")}
                </span>

            </div>

        `);

    });

});
/* ACTUALIZA EN ULTIMASTRANSACIONES.HTML*/
$(document).ready(function () {

    let movimientos =
        JSON.parse(localStorage.getItem("movimientos")) || [];

    movimientos.reverse();

    movimientos.forEach(function (mov) {

        let signo =
            mov.tipo === "Depósito" ? "+" : "-";

        let clase =
            mov.tipo === "Depósito"
                ? "positivo"
                : "negativo";

        $("#listaMovimientos").append(`

            <div class="movimiento">

                <div>
                    <strong>${mov.tipo}</strong><br>
                    <small>${mov.fecha}</small>
                </div>

                <span class="${clase}">
                    ${signo}$${mov.monto.toLocaleString("es-CL")}
                </span>

            </div>

        `);

    });

});








