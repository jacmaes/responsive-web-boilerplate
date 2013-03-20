<?php 

/*=============================================
     =       CSS preprocessor        =

include CSS Crush, the wonderful PHP-based CSS
preprocessor available here: 
http://the-echoplex.net/csscrush/
=============================================*/
require_once 'assets/crush/CssCrush.php'; 
$options = array(
  'versioning' => true,
  'boilerplate' => true,
	'debug' => false, // set it to true to view unminified css and debug in Web Inspector
);
$compiled_file = CssCrush::file( 'assets/css/main.css', $options );

/*=============================================
        =            RESS            =

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
<title></title>
<meta http-equiv="cleartype" content="on">
<meta name="HandheldFriendly" content="True">
<meta name="MobileOptimized" content="320">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php if ($fullbrowser != 'ie6') { // serve main css file compiled and minified by CSS Crush to all but IE6. Extra CSS files are imported automatically in main CSS file with @import ?>
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
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
  </article>
</section>

<aside role="complementary">
  <h2>Sidebar</h2>
</aside>

<footer role="contentinfo">
  <p>&copy; <?php echo date("Y"); ?></p>
</footer>

<?php include "includes/ie6warning.php"; // warn ie6 users that they must upgrade or face nuclear war ?>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<!-- Google-hosted jQuery fallback to CloudFlare -->
<script>window.jQuery || document.write('<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"><\/script>');</script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<?php if ($fullbrowser != 'ie6') { // serve main javascript with cache-busting timestamp to all but error-prone IE6 ?>
<script type="text/javascript" src="/assets/js/site.<?php echo filemtime('/path/to/assets/js/site.js') ?>.js"></script>
<?php } ?>

<!--
 ===================================================================================
 HTML5 + Media Queries polyfills for IE7 and IE8, excluding IE on mobile devices
 ===================================================================================
 --> 

<!--[if (lt IE 9) & (!IEMobile)]>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<script type="text/javascript" src="/assets/js/respond.js"></script>
<![endif]--> 

<!--   
 ===================================================================================
 Google Analytics code. Remove comments when ready for production
 ===================================================================================
 --> 

<!--   
<script>
var _gaq = _gaq || [];_gaq.push(['_setAccount', 'UA-XXXXXX']);_gaq.push(['_trackPageview']);_gaq.push(['_trackPageLoadTime']);
(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
})();
</script>
-->
</body>
</html>