<?php

include "config.php";
include "connect.php";

$query = "SELECT * FROM areals";
$result = mysql_query($query);

for ($i=0; $i<mysql_num_rows($result); $i++)	{

    $data = mysql_fetch_array($result);

    echo "$data[areal_name]";
}

mysql_close($dbconnect);

$jokk = $_GET["jokk"];
$arg_1 = "Гриша";
    function foo($arg_1, $arg_2)
    {
       $puk = "<h2>Hello world!</h2>".$arg_1.$arg_2;
        return $puk;
    }
echo foo($arg_1, $jokk);
?>