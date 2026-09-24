/* ACTUALIZA EN ULTIMASTRANSACIONES.HTML*/
$(document).ready(function () {

    let movimientos =
        JSON.parse(localStorage.getItem("movimientos")) || [];

    movimientos.reverse();   // muestra el más reciente primero

    movimientos.forEach(function (mov) {

        // signo: + si es depósito, - si no
        let signo =
            mov.tipo === "Depósito" ? "+" : "-";

        // clase de color: positivo o negativo según el tipo
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