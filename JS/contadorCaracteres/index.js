$(document).ready(function () {

    $('#texto').on('input', function () {

        const texto = $(this).val();
        const palabras = texto.trim().split(/\s+/).length; // separa donde hay espacio
        const sinEspacios = texto.split(/\s+/).join('').length; // separa donde hay espacio y luego une todo
        const parrafos = texto.trim().split(/\n+/).length; //separa donde hay saltos de linea

        $('#caracteres').text(texto.length);
        $('#palabras').text(palabras);
        $('#sinEspacios').text(sinEspacios);
        $('#parrafos').text(parrafos);

    });


});