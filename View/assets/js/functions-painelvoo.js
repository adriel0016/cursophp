$(document).ready(function() {

    $('#loading').fadeIn(0);

    $.ajax({
        type: "POST",
        url: '',
        data: {
            acao: ''
        },
        success: function(result) {
            if(result) {
                // result = JSON.parse(result);

                $("table tbody").html("");

                // result.forEach(function(obj, key) {
                //     $("table tbody").append('');
                // });

                if(result.length === 0){
                    $("table tbody").append('');
                }

                $('#loading').delay("2000").fadeOut();
            }
            else {
                swal(
                    'Ops!',
                    'Ocorreu um erro ao carregar os Voos!',
                    'error'
                );
            }
        },
    });

    $('#loading').delay("2000").fadeOut();

});

function excluir(codigo){
    $.ajax({
        type: "POST",
        url: '',
        data: {
            acao: '',
            codigo: codigo
        },
        success: function(result) {

            if(result) {

            } else {
                swal(
                    'Ops!',
                    'Não foi possível excluir um Voo!',
                    'error'
                );
            }
        },
    });
}