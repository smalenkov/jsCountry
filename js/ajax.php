<?php
$jokk = $_GET["jokk"];
$arg_1 = "Гриша";
    function foo($arg_1, $arg_2)
    {
       $puk = "<h2>Hello world!</h2>".$arg_1.$arg_2;
        return $puk;
    }
echo foo($arg_1, $jokk);
?>