<?php

include "config.php";
include "connect.php";

$query = "SELECT * FROM areals";
$result = mysql_query($query);

$nameen = $_GET["nameen"];

for ($i=0; $i<mysql_num_rows($result); $i++)	{

    $data = mysql_fetch_array($result);

    echo "<a href='#/$data[areal_nameen]'>$data[areal_name]</a><br/>";
}

mysql_close($dbconnect);

?>