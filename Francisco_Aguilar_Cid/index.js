$(document).ready(function () {

    let numNota = 1

    $(document).on('click', '#addNota', function () {

        let text = $('#text').val()

        $('#contenedor div.row').append('<div class="nota ' + selectAncho() + '"><div class="card text-white mb-3" style="max-width: 18rem;">' +
            '<div class="card-header ' + selectColor() + '">Nota ' + numNota + ': ' + text + '</div>' +
            '<div class="card-body"> <button type="button" class="btn btn-danger m-4 mt-2" id="delNota">Eliminar nota</button>' +
            '</div></div>')

        numNota = numNota + 1

    })

    $(document).on('click', '#delNota', function () {

        $(this).closest('div.nota').remove()

    })

    function selectAncho() {

        let ancho

        if ($('#ancho').val() == 'Small') {

            ancho = 'col-2'

        } else if ($('#ancho').val() == 'Medium') {

            ancho = 'col-4'

        } else if ($('#ancho').val() == 'High') {

            ancho = 'col-6'

        }

        return ancho

    }

    function selectColor() {

        let color

        if ($('#color').val() == 'Rojo') {

            color = 'bg-danger'

        } else if ($('#color').val() == 'Verde') {

            color = 'bg-success'

        } else if ($('#color').val() == 'Azul') {

            color = 'bg-primary'

        } else if ($('#color').val() == 'Amarillo') {

            color = 'bg-warning'

        }

        return color

    }

});