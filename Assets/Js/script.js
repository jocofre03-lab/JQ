$('a').click(function (e) {
    $('html, body').animate({
        scrollTop: $("#seccionContacto").offset().top
    }, 2000);
});
