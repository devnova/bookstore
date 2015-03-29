<?php
/**
 * User: Nikolay Teplyakov
 */

class PageNotFoundController extends Controller
{
    function __construct()
    {
        $this->view = new View();
    }

    public function show()
    {
        $this->view->generate('PageNotFoundView.php');
    }
}