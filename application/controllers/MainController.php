<?php
/**
 * User: Nikolay Teplyakov
 */

class MainController extends Controller
{
    function __construct()
    {
        include_once 'application/Models/MainModel.php';
        $this->view = new View();
    }

    public function show()
    {
        $model = new MainModel();
        $data = $model->get_data();
        $this->view->generate('MainView.php', $data);
    }
}