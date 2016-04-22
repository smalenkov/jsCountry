<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Конвертер MySql -> Xml</title>
</head>
<body>

<?php

include "config.php";
include "connect.php";

$query = "SELECT * FROM areals";
$result = mysql_query($query);

for ($i=0; $i<mysql_num_rows($result); $i++)	{

    $data = mysql_fetch_array($result);

        echo "$data[areal_name] <br/>";
}

mysql_close($dbconnect);

?>

</body>


