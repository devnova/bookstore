<?php
/**
 * User: Nikolay Teplyakov
 */

class CreateAdminController extends Controller
{
    function __construct()
    {
        $this->view = new View();
    }

    public function show()
    {
        $this->view->generate("CreateAdminView.php");
    }
}