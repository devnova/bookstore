<?php
/**
 * User: Nikolay Teplyakov
 */

class MainModel extends Model
{
    public function get_data()
    {
        include_once 'application/utilities/CommonConstants.php';
        $day_message = CommonConstants::$_DEFAULT_DAY_MESSAGE;
        return array(
            'day_message' => $day_message,
        );
    }
}