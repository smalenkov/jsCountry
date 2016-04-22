<?php
$dbconnect = mysql_connect($dbHost, $dbUser, $dbPass) or die("MySQL сервер недоступен!".mysql_error());
mysql_select_db($dbName, $dbconnect) or die("Нет соединения с БД".mysql_error());

mysql_set_charset('utf8');