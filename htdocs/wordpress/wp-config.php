<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'CLh<U7QPl&?zPykU9t-cb$)$AD1CvRfUyCW<E|?8<c@3Q/of)oV*Uu$5yGhHf(3A' );
define( 'SECURE_AUTH_KEY',  '?QyuknNvt?MmcG!c0BvZP.P79]aws{]rR=Fp{52w;*O?Y9kq/izaObFs[I`bFV1y' );
define( 'LOGGED_IN_KEY',    'J7&@*{de%y dRLP~l<X(fp97|8+APNIqc{*oMe(8C3)<zUy](4*):kRGd@#KpLg}' );
define( 'NONCE_KEY',        'dfS`Tp/2#h<t>8Eisi~gJm])k5@epC.QR_:$p9<ECL`#/ah5C+G DO(Zx.C~vfb&' );
define( 'AUTH_SALT',        'o5Vr:5tRtXj)5^Rr5:Z*q3x+J0K 5T]5S5*i~!07JEL*$t7fh_k qFC#k78LCo?D' );
define( 'SECURE_AUTH_SALT', 'BvQC9Ff <nRD]8JX/)Z449K8odO`ZHv)RE==ZoDj}!$uwl>`D$cz1k4ub :.4rVO' );
define( 'LOGGED_IN_SALT',   '.m?l?i)isMX0R#+,k&Brpx|!E2K<={E]I<!!gt@rxr.oJl~(98pe x;~ClZ-0.wp' );
define( 'NONCE_SALT',       'pO7~<<TTk~|[wLIq^u2KV60(iryvc*G _F@&.c$)|I>5>PG?(pV*[zH/|PbH^,MH' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
