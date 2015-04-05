<?php
/**
 * User: Nikolay Teplyakov
 */

class Route
{
    static function Start()
    {
        $uri = explode('/', $_SERVER['REQUEST_URI']);

        if(count($uri) <= 2) {
            $controller_name = 'Main';

            if(!empty($uri[1])) {
                $controller_name = $uri[1];
                if($controller_name == '404') {
                    $controller_name = 'PageNotFound';
                }
            }

            $controller_name .= 'Controller';
            $controller_path = 'application/controllers/' .$controller_name .'.php';

            if(file_exists($controller_path)) {
                include_once $controller_path;
            } else {
                Route::page404();
            }

            $controller = new $controller_name;
            $controller->show();
        } else {
            Route::page404();
        }
    }

    static function page404()
    {
        $host = 'http://'.$_SERVER['HTTP_HOST'].'/';
        header('HTTP/1.1 404 Not Found');
        header('Status: 404 Not Found');
        header('Location:'.$host.'404');
    }
}