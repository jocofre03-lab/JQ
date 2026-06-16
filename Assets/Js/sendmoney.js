
/*TRANSFIERE DINERO Y GUARDA MOVIMIENTO*/
$("#nombre").change(function () {

    let contactos = JSON.parse(localStorage.getItem("contactos")) || [];

    let indice = $(this).val();

    if (indice !== "") {

        $("#cuenta").val(contactos[indice].cuenta);

    }

});


/*AGREGAR lista de contacto agregados en mi otra pagina contacto.html hacia SENDMONEY*/

$(document).ready(function () {

    let contactos =
        JSON.parse(localStorage.getItem("contactos")) || [];

    contactos.forEach(function (contacto, index) {

        $("#nombre").append(
            `<option value="${index}">
                ${contacto.nombre} - ${contacto.banco}
            </option>`
        );

    });

});

$("#nombre").change(function () {

    let contactos =
        JSON.parse(localStorage.getItem("contactos")) || [];

    let indice = $(this).val();

    if (indice !== "") {

        $("#cuenta").val(
            contactos[indice].cuenta
        );

    }

});
/*AQUI VA LA ACCION DE ACTULIZAR MI SALDO AL TRANSFERIR EN SENDMONEY Y EN ULTIMASTRANSACIONES*/
$(document).ready(function () {

    // Saldo inicial
    let saldo = localStorage.getItem("saldo");

    if (saldo === null) {
        saldo = 1250000;
        localStorage.setItem("saldo", saldo);
    }

    $("#mymoney").text("$" + Number(saldo).toLocaleString("es-CL"));

    $("#btnIngresar").click(function (e) {

        e.preventDefault();

        let monto = parseInt($("#monto").val());

        if (isNaN(monto) || monto <= 0) {
            alert("Ingrese un monto válido");
            return;
        }

        saldo = parseInt(localStorage.getItem("saldo"));

        if (monto > saldo) {
            alert("❌ Saldo insuficiente");
            return;
        }

        saldo -= monto;

        localStorage.setItem("saldo", saldo);

        $("#mymoney").text(
            "$" + saldo.toLocaleString("es-CL")
        );

        let movimientos =
            JSON.parse(localStorage.getItem("movimientos")) || [];

        movimientos.push({
            tipo: "Transferencia",
            contacto: $("#nombre option:selected").text(),
            monto: monto,
            fecha: new Date().toLocaleDateString("es-CL")
        });

        localStorage.setItem(
            "movimientos",
            JSON.stringify(movimientos)
        );

        alert("✅ Transferencia realizada correctamente");

        $("#monto").val("");
        $("#descripcion").val("");

    });

});
