<?php

include "config.php";
include "connect.php";

$query = "SELECT * FROM areals";
$result = mysql_query($query);

$nameen = $_GET["nameen"];

for ($i=0; $i<mysql_num_rows($result); $i++)	{

    $data = mysql_fetch_array($result);

//    echo "<a href='#/$data[areal_nameen]'>$data[areal_name]</a><br/>";
    $arrstr[$i] = array($data[areal_nameen], $data[areal_name], $data[areal_text]);
}

echo json_encode($arrstr, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);

mysql_close($dbconnect);

?>