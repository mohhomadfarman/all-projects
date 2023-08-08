<?php
function wpdocs_theme_name_scripts() {
	// wp_enqueue_style( 'style-name', get_stylesheet_uri() );
	wp_enqueue_style( 'style-name', get_template_directory_uri() . '/css/style.css');
	wp_enqueue_style( 'style', get_template_directory_uri() . '/style.css');
}
add_action( 'wp_enqueue_scripts', 'wpdocs_theme_name_scripts' );

function enqueue_admin_script() {
	wp_enqueue_style( 'style', get_template_directory_uri() . '/style.css');
}
add_action( 'admin_enqueue_scripts', 'enqueue_admin_script' );

add_theme_support( 'custom-logo' );

function add_additional_class_on_a($classes, $item, $args)
{
    if (isset($args->add_a_class)) {
        $classes['class'] = $args->add_a_class;
    }
    return $classes;
}

add_filter('nav_menu_link_attributes', 'add_additional_class_on_a', 1, 3);

function add_additional_class_on_li($classes, $item, $args) {
    if(isset($args->add_li_class)) {
        $classes[] = $args->add_li_class;
    }
    return $classes;
}
add_filter('nav_menu_css_class', 'add_additional_class_on_li', 1, 3);

function resume_register_nav_menu(){
	register_nav_menus( array(
		'header_menu' => __( 'Header Menu', 'resume' ),
		'footer_menu'  => __( 'Footer Menu', 'resume' ),
	) );
}
add_action( 'after_setup_theme', 'resume_register_nav_menu', 0 );

function register_hero_component_block()
{
    if (function_exists('acf_register_block_type')) {

        // Register Hero Component block
        acf_register_block_type(array(
            'name'                     => 'component-hero',
            'title'                 => __('Hero Component1'),
            'description'             => __('A custom hero Component block.'),
            'category'                 => 'formatting',
            'icon'                    => 'layout',
            'keywords'                => array('hero', 'component'),
            'post_types'            => array('post', 'page'),
            'mode'                    => 'auto',
            'align'                    => 'full',
            'render_template'        => 'acf-blocks/HeroBlock.php',
            'supports'                 => array(
                'align'                => ['full'],
                'default'            => 'full'
            )
        ));
    }
}
add_action('acf/init', 'register_hero_component_block');


function resume_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Footer One', 'theme_name' ),
		'id'            => 'footer-1',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );
	register_sidebar( array(
		'name'          => __( 'Footer Two', 'theme_name' ),
		'id'            => 'footer-2',
		'before_widget' => '<ul><li id="%1$s" class="widget %2$s">',
		'after_widget'  => '</li></ul>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );
}
add_action('widgets_init', 'resume_widgets_init');
?>