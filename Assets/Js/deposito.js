
/* ESTE ES MI ACTULIZACION DE SALDO AL DEPOSITAR*/

$(document).ready(function () {

    let saldo = parseInt(localStorage.getItem("saldo")) || 1250000;

    $("#btnDepositar").click(function (e) {

        e.preventDefault();

        let monto = parseInt($("#monto").val());

        if (isNaN(monto) || monto <= 0) {
            alert("Ingrese un monto válido");
            return;
        }

        // Sumar al saldo
        saldo += monto;

        localStorage.setItem("saldo", saldo);

        // Guardar movimiento
        let movimientos =
            JSON.parse(localStorage.getItem("movimientos")) || [];

        movimientos.push({
            tipo: "Depósito",
            monto: monto,
            fecha: new Date().toLocaleDateString("es-CL")
        });

        localStorage.setItem(
            "movimientos",
            JSON.stringify(movimientos)
        );

        alert("✅ Depósito realizado correctamente");

    });

});
/* ACTUALIZAR MI SALDO */
  $(document).ready(function () {

    let saldo =
        parseInt(localStorage.getItem("saldo")) || 1250000;

    $("#saldoDisponible").text(
        "$" + saldo.toLocaleString("es-CL")
    );

});