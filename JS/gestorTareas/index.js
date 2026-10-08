$(document).ready(function () {

    $('#addTarea').on('click', function () {

        let text = $('#text').val()

        if ($('#text').val() != '') {

            $('ul').append('<li class="mt-3">' + text + '<input class="ms-5 check false" type="checkbox">' +
                '<button class="btn btn-danger ms-5 delTarea">Eliminar tarea</button></li>')

            $('#text').val('')

        }

        $('#totalTareas').text(totalTareas())
        $('#totalCompletas').text(totalCompletas())

    })

    $('ul').on('click', '.delTarea', function () {

        $(this).closest('li').remove();

        $('#totalTareas').text(totalTareas())
        $('#totalCompletas').text(totalCompletas())

    });

    $('ul').on('click', '.check', function () {

        if ($(this).hasClass('false')) {

            $(this).closest('li').addClass('text-decoration-line-through')
            $(this).removeClass('false').addClass('true')

        } else {

            $(this).closest('li').removeClass('text-decoration-line-through')
            $(this).removeClass('true').addClass('false')

        }

        $('#totalCompletas').text(totalCompletas())

    });

    $('#delLista').on('click', function () {

        $('li').remove()

        $('#totalTareas').text(totalTareas())
        $('#totalCompletas').text(totalCompletas())

    })

    $('#delCompletas').on('click', function () {

        var trArray = $('ul li input')

        trArray.each(function (index) {

            if ($(this).hasClass(true)) {

                $(this).closest('li').remove()

            }

        })

        $('#totalTareas').text(totalTareas())
        $('#totalCompletas').text(totalCompletas())

    })

    function totalTareas() {

        let total = $('ul li').length

        return total

    }

    function totalCompletas() {

        let total = $('ul li input.true').length

        return total

    }

});