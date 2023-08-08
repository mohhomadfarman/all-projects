<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php wp_head(); ?>
</head>
<body class="d-flex flex-column h-100">
        <main class="flex-shrink-0">
            <!-- Navigation-->
            <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
                <div class="container px-5">
                    <a class="navbar-brand" href="index.html"><span class="fw-bolder text-primary">
                        <?php $logo = get_custom_logo();
                         $title = bloginfo( 'title' );
                         echo $title;
                        if($logo)
                        {
                            echo $logo;
                        } 
                        else if($title){
                            echo $title;
                        }
                        else{
                            echo "your title here...";
                        }
                        ?>
                    </span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent"> -->
                        <!-- <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="resume.html">Resume</a></li>
                            <li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>
                            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                        </ul> -->
                        <?php
                        $args = array(
                            'theme_location' => 'header_menu',
                            'container' => 'div',
                            'container_class' => 'collapse navbar-collapse',
                            'container_id' => 'navbarSupportedContent',
                            'menu_class' => 'navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder',
                            'add_a_class' => 'nav-link',
                            'add_li_class' => 'nav-item'
                            
                            
                        );
                        wp_nav_menu($args); 
                        ?>
                    <!-- </div> -->
                </div>
            </nav>
    </main>
    
