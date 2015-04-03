<?php
/**
 * User: Nova
 * Date: 01.02.2015
 */
class DatabaseHelper
{
    static function connect()
    {
        $host = 'localhost';
        $database = 'bookstore';
        $user = 'root';
        $password = '';
        $mysqli = new mysqli($host, $user, $password, $database);
        if ($mysqli->connect_errno) {
            echo "Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
            exit();
        }
        return $mysqli;
    }
}