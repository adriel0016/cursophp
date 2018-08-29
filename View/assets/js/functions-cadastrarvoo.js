$(document).ready(function() {

    $('#loading').fadeIn(0);

    $(function () {
        $("#datavoo").datetimepicker({
            language: 'pt-BR',
            format: "dd/mm/yyyy - hh:ii",
            todayBtn: 0,
            autoclose: 1,
            showMeridian: 0,
            pickerPosition: "bottom-right",
            startDate: new Date(),
            minuteStep: 10,
            daysOfWeekDisabled: []
        });
    });

    // Carregar CIA
    $.ajax({
        type: "POST",
        url: '',
        data: {
            acao: 'selecionartodos'
        },
        success: function(result) {
            if(result) {
                // result = JSON.parse(result);

                $("#cia").html(
                    '<option value="" selected>Selecione uma cia...</option>'
                );

                // result.forEach(function(obj, key) {
                //     $("#cia").append(
                //         '<option value="'+obj.codigo+'" class="text-center">'+ obj.nome +'</option>'
                //     );
                // });

            }
            else {
                swal(
                    'Ops!',
                    'Ocorreu um erro ao carregar CIA!',
                    'error'
                );
            }
        },
    });

    // Carregar Status do Voo
    $.ajax({
        type: "POST",
        url: '',
        data: {
            acao: 'selecionartodos'
        },
        success: function(result) {
            if(result) {
                // result = JSON.parse(result);

                $("#statusvoo").html(
                    '<option value="" selected>Selecione um status...</option>'
                );

                // result.forEach(function(obj, key) {
                //     $("#statusvoo").append(
                //         '<option value="'+obj.codigo+'" class="text-center">'+ obj.nome +'</option>'
                //     );
                // });

            }
            else {
                swal(
                    'Ops!',
                    'Ocorreu um erro ao carregar Status Voo!',
                    'error'
                );
            }
        },
    });

    // Carregar Estados
    $.ajax({
        type: "POST",
        url: '',
        data: {
            acao: 'selecionartodos'
        },
        success: function(result) {
            if(result) {
                // result = JSON.parse(result);

                $("#estados").html(
                    '<option value="" selected>Selecione um estado...</option>'
                );

                // result.forEach(function(obj, key) {
                //     $("#estados").append(
                //         '<option value="'+obj.codigo+'" class="text-center">'+ obj.nome +'</option>'
                //     );
                // });

            }
            else {
                swal(
                    'Ops!',
                    'Ocorreu um erro ao carregar Estados!',
                    'error'
                );
            }
        },
    });

    $('#loading').delay("2000").fadeOut();

});

function selecionacidades(){
    $.ajax({
        type: "POST",
        url: '',
        data: {
            acao: 'selecionarporestado',
            codigoestado: $("#estados").val()
        },
        success: function(result) {
            if(result) {
                // result = JSON.parse(result);

                $("#cidades").html(
                    '<option value="" selected>Selecione uma cidade...</option>'
                );

                // result.forEach(function(obj, key) {
                //     $("#cidades").append(
                //         '<option value="'+obj.codigo+'" class="text-center">'+ obj.nome +'</option>'
                //     );
                // });

            }
            else {
                swal(
                    'Ops!',
                    'Ocorreu um erro ao carregar Cidades!',
                    'error'
                );
            }
        },
    });
}

function cadastrar(){
    // Cadastrar voo

}

function editar(codigo){
    // Editar voo

}