<?php
/**
 * User: Nikolay Teplyakov
 */

class NotificationController extends Controller
{
    function __construct()
    {
        $this->view = new View();
    }

    public function show()
    {
        $data = $this->init_models();
        $this->view->generate("NotificationView.php", $data);
    }

    private function init_models()
    {
        return [
            'no' => 123,
        ];
    }
}
