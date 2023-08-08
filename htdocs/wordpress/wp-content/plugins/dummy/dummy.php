<?php
/*
Plugin Name: Dummy
Plugin URI: http://example.com
Author: MD Farmaan
Description: This is my first plugin
Version: 0.1
*/

function wpb_demo_shortcode() { 
    $message = 'Hello friend Chai pee lo'; 
    return $message;
    }
    add_shortcode('demo_shortcode', 'wpb_demo_shortcode');
    /**
 * Register a custom menu page.
 */
function wpdocs_register_my_custom_menu_page() {
	add_menu_page( 'testing', 'test', 'manage_options', 'tsting', 'dummy_tsting', 'dashicons-admin-site', 10 );
}
function dummy_tsting(){
    echo "Register form";
}
add_action( 'admin_menu', 'wpdocs_register_my_custom_menu_page' );

?>