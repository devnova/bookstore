<?php
/**
 * User: Nikolay Teplyakov
 */

class MainController extends Controller
{
    function __construct()
    {
        $this->view = new View();
    }

    public function show()
    {
        $this->view->generate('MainView.php');
    }
}