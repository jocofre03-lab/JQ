
$("#miBoton").click(function() {
    $(this).css({
        "background-color": "#2fd5b9",
        "border-color": "#19ce98",
        "color": "green"
    });
});


/* ESTA ES LA ACCION DE MI REGRESO A MENU*/
$(document).ready(function(){

    $("#btnVolvermenu").click(function(){
        window.location.href = "Menu.html";
    });

});
/*ESTE ES MI BOTON PARA IR ULTIMOS MOVIMIENTOS DESDE MENU*/

$(document).ready(function(){

    $("#btnMovimientos").click(function(){
        window.location.href = "Ultimastransaciones.html";
    });

});


/*ESTE ES MI BOTON PARA IR A TRASFERIR DESDE MENU*/
$(document).ready(function(){

    $("#btnTransferir").click(function(){
        window.location.href = "Transferir.html";
    });

});
/*ESTA ES MI ALERTA DONDE DICE QUE YA HA SIDO AGREGADO CORRECTAMENTE*/

$(document).ready(function(){

    $("#btnAgregarContacto").click(function(){

        alert("✅ El contacto ya ha sido agregado correctamente.");

    });

});

/*ESTE ES MI CSS PARA EN AGREGAR CONTACTOS NUEVOS*/
$(document).ready(function(){

    $("#tituloContacto").css({
        "text-align": "center",
        "background": "#a2b3cd",
        "color": "white",
        "padding": "15px",
        "border-radius": "15px",
        "font-family": "'Poppins', sans-serif",
        "box-shadow": "0 4px 8px rgba(14, 190, 175, 0.2)"
    });

});
/*ESTE ES MI BOTON VOLVER DE PAGINA DE AGREGAR CONTACTOS*/

$(document).ready(function(){

    $("#contenedorVolver").html(`
        <button id="btnVolver">
            <i class="bi bi-arrow-left-circle-fill"></i> Volver
        </button>
    `);

    $("#btnVolver").css({
        "background-color": "#7294c7bb",
        "color": "white",
        "border": "none",
        "border-radius": "25px",
        "padding": "10px 20px",
        "font-size": "18px",
        "font-weight": "bold",
        "cursor": "pointer",
        "margin": "15px"
    });

    $("#contenedorVolver").css({
        "text-align": "center"
    });

    $("#btnVolver").click(function(){
        window.location.href = "sendmoney.html"; // Cambia por tu página
    });

});*/
/*ESTE ES MI FIN CSS PARA TRANSFERIR BOTON AGREGAR CONTACTO NUEVO*/


/*ESTE ES MI BOTON*/

$(document).ready(function(){

    // Contenedor
    $("#contenedorGuardarContacto").css({
        "text-align": "center",
        "margin-top": "25px"
    });

    // Botón
    $("#btnGuardarContacto").css({
        "background": "linear-gradient(135deg, #0b6c8f, #17a2b8)",
        "color": "white",
        "border": "none",
        "border-radius": "30px",
        "padding": "14px 30px",
        "font-size": "18px",
        "font-weight": "bold",
        "cursor": "pointer",
        "box-shadow": "0 4px 12px rgba(0,0,0,0.25)",
        "transition": "all 0.3s ease"
    });

    // Efecto hover
    $("#btnGuardarContacto").hover(
        function(){
            $(this).css({
                "transform": "translateY(-3px)",
                "box-shadow": "0 8px 18px rgba(0,0,0,0.35)"
            });
        },
        function(){
            $(this).css({
                "transform": "translateY(0)",
                "box-shadow": "0 4px 12px rgba(0,0,0,0.25)"
            });
        }
    );

    // Acción al hacer clic
    $("#btnGuardarContacto").click(function(){
        alert("Contacto guardado correctamente");
    });

});


