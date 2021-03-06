<?php
/**
 * Created by PhpStorm.
 * User: ADRIE
 * Date: 26/08/2018
 * Time: 20:39
 */

?>

    <!doctype html>
    <html lang="pt-br">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" href="assets/css/custom.css">

        <link rel="stylesheet" href="assets/css/bootstrap-datetimepicker.min.css" />

        <link rel="stylesheet" href="assets/css/sweetalert.css">

        <title>Cadastrar Voos</title>
    </head>
    <body>

        <?php
            // header
        ?>

        <div class="site">
            <div class="container">
                <form>
                    <div class="card">
                        <div class="card-body">
                            <div class="form-row">
                                <div class="form-group col-4">

                                </div>
                            </div>
                        </div>
                        <div class="card-footer">

                        </div>
                    </div>
                </form>

                <div id="loading" style="display: none;">
                    <img src="assets/img/loading.gif" alt="">
                </div>
            </div>
        </div>

        <?php
            // footer
        ?>

        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

        <script type="text/javascript" src="assets/js/bootstrap-datetimepicker.min.js"></script>
        <script type="text/javascript" src="assets/js/locales/bootstrap-datetimepicker.pt-BR.js" charset="UTF-8"></script>

        <script src="assets/js/sweetalert.min.js"></script>

        <!-- FUNÇÕES JS REFERENTES AO CADASTRO -->
        <script src="assets/js/functions-cadastrarvoo.js"></script>

        <?php if(isset($_GET['codigo'])){ ?>
            <script>
                // selecionarvoo
            </script>
        <?php } ?>

    </body>
</html>
