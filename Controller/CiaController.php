<?php
/**
 * Created by PhpStorm.
 * User: Adriel
 * Date: 23/08/2018
 * Time: 10:23
 */

namespace Controller\CiaController;



class CiaController
{

}

/**
 * Parte responsável pelo controle de requisições
 */

$acao = isset($_POST['acao']) ? $_POST['acao'] : '';

$acao = htmlspecialchars($acao, ENT_QUOTES);

switch ($acao){
    case '':


        break;
    default:
        echo "Função não encontrada";
        break;
}