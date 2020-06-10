<?php
require __DIR__ . '/../vendor/bloatless/php-websocket/src/Connection.php';
require __DIR__ . '/../vendor/bloatless/php-websocket/src/Socket.php';
require __DIR__ . '/../vendor/bloatless/php-websocket/src/Server.php';

require __DIR__ . '/../vendor/bloatless/php-websocket/src/Application/ApplicationInterface.php';
require __DIR__ . '/../vendor/bloatless/php-websocket/src/Application/Application.php';

require __DIR__ . '/../vendor/bloatless/php-websocket/src/Application/DemoApplication.php';
require __DIR__ . '/../vendor/bloatless/php-websocket/src/Application/StatusApplication.php';

$server = new \Bloatless\WebSocket\Server('127.0.0.1', 1234);

// server settings:
$server->setMaxClients(100);
$server->setCheckOrigin(false);
$server->setAllowedOrigin('foo.lh');
$server->setMaxConnectionsPerIp(100);
$server->setMaxRequestsPerMinute(2000);

// Hint: Status application should not be removed as it displays usefull server informations:
$server->registerApplication('status', \Bloatless\WebSocket\Application\StatusApplication::getInstance());
$server->registerApplication('demo', \Bloatless\WebSocket\Application\DemoApplication::getInstance());

$server->run();
