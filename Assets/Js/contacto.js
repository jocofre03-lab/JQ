/*AGREGAR lista de contacto agregados en mi otra pagina contacto.html hacia SENDMONEY*/

$(document).ready(function () {

    $("#btnAgregar-Contacto").click(function () {

        let nombre = $("#nombreContacto").val().trim();
        let banco = $("#bancoContacto").val().trim();
        let cuenta = $("#cuentaContacto").val().trim();

        if (nombre === "" || banco === "" || cuenta === "") {
            alert("Completa todos los campos");
            return;
        }

        let contactos =
            JSON.parse(localStorage.getItem("contactos")) || [];

        contactos.push({
            nombre: nombre,
            banco: banco,
            cuenta: cuenta
        });

        localStorage.setItem(
            "contactos",
            JSON.stringify(contactos)
        );

        alert("✅ Contacto guardado correctamente");

        $("#nombreContacto").val("");
        $("#bancoContacto").val("");
        $("#cuentaContacto").val("");



        // Redirigir a la página de transferencias
        window.location.href = "sendmoney.html";

    });

});

