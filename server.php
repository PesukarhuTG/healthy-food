<?php
//php не понимает JSON, поэьлму данные нужно декодировать:
$_POST = json_decode( file_get_contents("php://input"), true );
echo var_dump($_POST);