$(document).ready(function () {

    $('#addRow').on('click', function () {

        $('tbody').append(
            '<tr>' +
            '<td></td>' +
            '<td></td>' +
            '<td></td>' +
            '<td><button class="delete-btn delRow">Delete</button></td>' +
            '</tr>'
        );

    });

    $('#addColumn').on('click', function () {

        $('thead tr').append(
            '<th>Columna nueva <button class="delete-btn delColumn">Delete</button></th>'
        )

    });

    $('.delRow').on('click', function () {

        $(this).closest('tr').remove();

    });

    $('thead').on('click', '.delColumn', function () {

        $(this).closest('th').remove();

    });

    $('#delTable').on('click', function () {

        $('table').remove();

    })

})