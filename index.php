<?php 

/*======  CSS PREPROCESSOR
include CSS Crush, the wonderful PHP-based CSS
preprocessor: http://the-echoplex.net/csscrush/
=============================================*/
require_once 'assets/crush/CssCrush.php'; 
$options = array(
  'versioning' => true,
  'boilerplate' => true, // include a boilerplate automatically ("CssCrush.boilerplate" in the "crush" folder) 
	'debug' => false, // set it to true to view unminified css and debug in Web Inspector
  );
$compiled_file = csscrush_file( '/assets/css/main.css', $options ); // make sure the "css" directory is writable

/*======= RESS
include RESS components to optionally serve
different code depending on device width and type
=============================================*/
include './includes/mobile_detect.php';
include './includes/ress.php';

?>
<!doctype html>
<html lang="es" class="<?= $deviceType . " res-" . $width . " " . $browser . " " . $fullbrowser . " " . $os; ?>">
<head>
<meta charset="utf-8">
<meta name="description" content="">
<meta name="keywords" content="">
<title>Page title | Firm name</title>
<meta http-equiv="cleartype" content="on">
<meta name="HandheldFriendly" content="True">
<meta name="MobileOptimized" content="320">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php // === serve main css file compiled and minified by CSS Crush to all but IE6. Extra CSS files are imported automatically in main CSS file with @import === 
if ($fullbrowser != 'ie6') { ?>
<link rel="stylesheet" href="<?php echo $compiled_file; ?>" media="screen, projection">
<?php } else { // serve universal stylesheet for IE6 ?>
<link rel="stylesheet" href="http://universal-ie6-css.googlecode.com/files/ie6.1.1.css" media="screen, projection">
<?php } ?>
</head>
<body>

<header role="banner">
  <nav role="navigation">
    <ul>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
      <li><a href="#">Page 4</a></li>
    </ul>
  </nav>
</header>

<section id="content" role="main">
  <h1>Main title</h1>
  <article role="article">
    <h2>Subtitle</h2>
      <p>Browser width: <?= $width; ?>px.</p>
      <p>
        <?php if ($width < 500) { ?>
        This is the small version.
        <?php } else if ($width < 800) { ?>
        This is the medium version.
        <?php } else if ($width < 1024) { ?>
        This is the large version.
        <?php } else { ?>
        This is the extra large version.
        <?php } ?>
      </p>
  </article>
</section>

<aside role="complementary">
  <h2>Sidebar</h2>
  <p>This is sidebar text.</p>
</aside>

<footer role="contentinfo">
  <p>&copy; <?php echo date("Y"); ?> &ndash; Footer</p>
</footer>

<?php // === Warn ie6 + ie7 users that they must upgrade or face nuclear war ===
include "includes/ie_warning.php"; ?>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"><\/script>');</script>
<?php if ($fullbrowser != 'ie6') { // serve main javascript with cache-busting timestamp to all but error-prone IE6 ?>
<script src="/assets/js/site.<?php echo filemtime('/path/to/assets/js/site.js') ?>.js"></script>
<?php } ?>


<?php // === HTML5 + Media Queries polyfills for old IE ===
if (($fullbrowser == 'ie6') OR ($fullbrowser == 'ie7') OR ($fullbrowser == 'ie8')) {  ?>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<script type="text/javascript" src="/assets/js/respond.js"></script>
<?php } ?>

<?php // === Google Analytics ===
      // include "includes/google_analytics.php"; ?>
</body>
</html>