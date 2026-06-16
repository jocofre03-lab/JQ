$(document).ready(function () {

    $("#btnIngresar1").click(function () {

        let usuario = $("#usuario").val();
        let contraseña = $("#contraseña").val();

        // 🔐 USUARIO Y CONTRASEÑA VÁLIDOS (puedes cambiarlos)
        let usuarioValido = "fernanda";
        let passValida = "1234";

        if (usuario === "" || contraseña === "") {
            alert("⚠️ Debes completar todos los campos");
            return;
        }

        if (usuario === usuarioValido && contraseña === passValida) {

            alert("✅ Bienvenido " + usuario);

            // 🔁 redirección al menú
            window.location.href = "Menu.html";

        } else {
            alert("❌ Usuario o contraseña incorrectos");
        }

    });

});



