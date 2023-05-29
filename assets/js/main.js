// TOOLTIPS
$(document).ready(function(){
$('#Enviar').tooltip();    
});

// EVENTO
$(document).ready(function() {
    $('#Enviar').click(function() {
alert('El correo fue enviado correctamente ...');
});   
});

// SELECTOR POR  ETIQUETA
$(document).ready(function() {
    $("i").click(function(){
        $(this).css({
        "color": "black",
        "font-size": "2em"
        });
        });
    });


    // SELECTOR POR CLASE
    $(document).ready(function() {
        $('.favicon').click(function() {
        $(this).siblings('.text').toggle();
        });
    });

