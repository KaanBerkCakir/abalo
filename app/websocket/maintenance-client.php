<?php

require __DIR__ . '/../../vendor/bloatless/php-websocket/src/Client.php';

$client = new \Bloatless\WebSocket\Client;
$client->connect('127.0.0.1', 1234, '/maintenance');
$client->sendData(
    json_encode([
        'action' => 'echo',
        'data' => 'In Kürze warten wir Abalo für Sie. Nach einer kurzen Pause sind wir wieder für Sie da! Versprochen.']
    )
);
