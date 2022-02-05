<?php declare(strict_types=1);

$config = array (
    'dbname' => 'gabyzuela',
    'user' => 'root',
    'password' => '',
    'host' => 'localhost',
    'driver' => 'pdo_mysql',
    'type' => 'mysql'
); 

return new PDO("{$config['type']}:host={$config['host']};dbname={$config['dbname']};charset=UTF8", 
                  $config['user'], $config['password']);
