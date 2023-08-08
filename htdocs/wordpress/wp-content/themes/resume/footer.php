<footer class="bg-white py-4 mt-auto">
            <div class="container px-5">
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto"><div class="small m-0"><?php dynamic_sidebar('footer-1'); ?></div></div>
                    <div class="col-auto">
                        <!-- <a class="small" href="#!">Privacy</a>
                        <span class="mx-1">&middot;</span>
                        <a class="small" href="#!">Terms</a>
                        <span class="mx-1">&middot;</span>
                        <a class="small" href="#!">Contact</a> -->
                        <?php wp_nav_menu('footer_menu'); ?>
                    </div>
                </div>
            </div>
        </footer>
<?php wp_footer(); ?>
</body>
</html>