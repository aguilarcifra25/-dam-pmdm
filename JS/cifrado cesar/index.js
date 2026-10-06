$(document).ready(function () {

    const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    $('#texto').keyup(function () {

        let texto = $(this).val().toLowerCase();

        let textoCifrado = '';

        for (let letra of texto) {

            let posicion = alfabeto.indexOf(letra);

            let nuevaPosicion = posicion + 3;

            if (nuevaPosicion >= 27) {

                nuevaPosicion = nuevaPosicion - 27;

            }

            textoCifrado += alfabeto[nuevaPosicion];

        }

        $('#resultado').text(textoCifrado);

    });
});