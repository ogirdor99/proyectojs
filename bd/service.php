<?php declare(strict_types=1);

const SQL_productos = "SELECT * FROM productos";

const SQL_idProductos = "SELECT * FROM productos WHERE id=:id";
$conn = require "database.php";

if (key_exists('id', $_GET)) {
    $sql = SQL_idProductos;
    $param = [":id" => $_GET['id']];
}else {
    $sql = SQL_productos;
    $param = [];
}

$stm = $conn->prepare($sql);
$stm->execute($param);
$result = $stm->fetchAll();

echo json_encode($result);

// $stm = null;
// $conn = null;