<?php

// 1. basic browser and os detection generated through .htaccess file, used mainly to target our good old friend IE in CSS and avoid those ugly conditional comments as used on HTML5 boilerplate

$browser = strtolower(getenv('browser'));
$fullbrowser = $browser . getenv('version');
$os = strtolower(getenv('os'));

// 2. initiate mobile device detection

$detect = new Mobile_Detect();
$deviceType = ($detect->isMobile() ? ($detect->isTablet() ? 'tablet' : 'phone') : 'computer');

// 3. set up default width according to device type since we don't know the device size before the cookie is set on first page load

if ($detect->isMobile() && !$detect->isTablet()) {
// this is a mobile device but not a tablet, so we can assume a default small screen size, let's say of 400px.
$defaultWidth = "400";
} else {
// if this is not a mobile device, then this must be a large screen, let's say of 1200px.
$defaultWidth = "1200"; 
}

// 4. Retrieve cookie storing the device size 
$RESSCookie = $_COOKIE['RESS'];
if ($RESSCookie) {
  $RESSValues = explode('|', $RESSCookie);
   $featureCapabilities;
   foreach ($RESSValues as $RESSValue) {
       $capability = explode('.', $RESSValue);
       $featureCapabilities[$capability[0]] = $capability[1];
  }
};
$width = ($featureCapabilities["width"] ? $featureCapabilities["width"] : $defaultWidth);


?>