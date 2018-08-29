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
        url: '../Controller/CiaController.php',
        data: {
            acao: 'selecionartodos'
        },
        success: function(result) {
            if(result) {
                // result = JSON.parse(result);

                $("#cia").html(
                    ''
                );

                result.forEach(function(obj, key) {
                    $("#cia").append(
                        ''
                    );
                });

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
            acao: ''
        },
        success: function(result) {
            if(result) {
                // result = JSON.parse(result);

                $("#statusvoo").html(
                    ''
                );

                result.forEach(function(obj, key) {
                    $("#statusvoo").append(
                        ''
                    );
                });

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
            acao: ''
        },
        success: function(result) {
            if(result) {
                // result = JSON.parse(result);

                $("#estado").html(
                    '<option value="" selected>Selecione um estado...</option>'
                );

                result.forEach(function(obj, key) {
                    $("#estado").append(
                        ''
                    );
                });

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
            acao: ''
        },
        success: function(result) {
            if(result) {
                // result = JSON.parse(result);

                $("#cidade").html(
                    '<option value="" selected>Selecione uma cidade...</option>'
                );

                result.forEach(function(obj, key) {
                    $("#cidade").append(
                        ''
                    );
                });

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
    $.ajax({
        type: "POST",
        url: '',
        data: {
            acao: ''
        },
        success: function(result) {

            if(result > 0) {


            }
            else {
                swal(
                    'Ops!',
                    'Não foi possível cadastrar o Voo!',
                    'error'
                );
            }
        },
    });
}

function editar(codigo){
    // Editar voo
    $.ajax({
        type: "POST",
        url: '',
        data: {
            acao: ''
        },
        success: function(result) {

            if(result) {


            }
            else {
                swal(
                    'Ops!',
                    'Não foi possível editar o Voo!',
                    'error'
                );
            }
        },
    });
}

function selecionarvoo(codigo){
    // Selecionar voo
    $.ajax({
        type: "POST",
        url: '',
        data: {
            acao: '',
            codigo: codigo
        },
        success: function(result) {

            if(result) {




            }
            else {
                swal(
                    'Ops!',
                    'Não foi possível selecionar o Voo!',
                    'error'
                );
            }
        },
    });
}