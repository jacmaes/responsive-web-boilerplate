/* SVG Detection (by Todd Motto)
=========================================================
 * Detect SVG support with PNG fallback. jQuery and Modernizr independent.
 * By @toddmotto - MIT License
 * Source: http://toddmotto.com/mastering-svg-use-for-a-retina-web-fallbacks-with-png-script/
 */
function supportsSVG() {
    return !! document.createElementNS && !! document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;  }
if (supportsSVG()) { document.documentElement.className += ' svg'; } else {
    document.documentElement.className += ' no-svg';
    var imgs = document.getElementsByTagName('img');
    var dotSVG = /.*\.svg$/;
    for (var i = 0; i != imgs.length; ++i) {
        if(imgs[i].src.match(dotSVG)) {
            imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
        }
    }
}

/* Screen Size Detection (by Anders M Andersen)
=========================================================
 * Detect screen size on page load and resize, and stores result in cookie for one year.
 * By @andmag for .net magazine
 * Tutorial: http://www.netmagazine.com/tutorials/getting-started-ress
 * Source: https://github.com/4nd3rs/RESS/
 * Original demo: http://andmag.se/ress/
 * My adaptation (with PHP UA sniffing for fallback on first page load): http://arqyestudio.com/dev/ress-size/
 */
RESS={};RESS.readCookie=function(b){var e=b+"=";var a=document.cookie.split(";");for(var d=0;d<a.length;d++){var f=a[d];while(f.charAt(0)==" "){f=f.substring(1,f.length)}if(f.indexOf(e)==0){return f.substring(e.length,f.length)}}return null};RESS.writeCookie=function(b,c){var a=new Date();a.setFullYear(a.getFullYear()+1);document.cookie=b+"="+c+"; expires="+a.toUTCString()+"; path=/;"};RESS.storeSizes=function(){var b=window.innerWidth;RESS.writeCookie("RESS","width."+b);var a=document.getElementById("width");if(a){a.innerHTML=window.innerWidth}};RESS.storeSizes();RESS.isResizeActive=false;window.onresize=function(a){if(!RESS.isResizeActive){RESS.isResizeActive=true;window.setTimeout(function(){RESS.storeSizes();RESS.isResizeActive=false},1000)}};

/* Hide Address Bar on iOS + Android (by Scott Jehl)
=========================================================
 * A normalized approach to hiding the address bar on iOS and Android.
 * By @scottjehl - MIT License
 * Source: https://github.com/scottjehl/Hide-Address-Bar
 */
(function(e){var d=e.document;if(!location.hash&&e.addEventListener){e.scrollTo(0,1);var c=1,b=function(){return e.pageYOffset||d.compatMode==="CSS1Compat"&&d.documentElement.scrollTop||d.body.scrollTop||0},a=setInterval(function(){if(d.body){clearInterval(a);c=b();e.scrollTo(0,c===1?0:1)}},15);e.addEventListener("load",function(){setTimeout(function(){if(b()<20){e.scrollTo(0,c===1?0:1)}},0)},false)}})(this);


/* HTML5 Placeholder jQuery Plugin (by Mathias Bynens)
=========================================================
 * A jQuery plugin which enables HTML5 placeholder behavior for browsers that aren't trying hard enough. 
 * By @mathias -  MIT and GPL licenses
 * Demo: http://mathiasbynens.be/demo/placeholder
 * Source: https://github.com/mathiasbynens/jquery-placeholder
 * Version: 2.0.7
 */
;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));


/* Tooltips (by Osvaldas Valutis)
=========================================================
 * Responsive, mobile-friendly tooltips
 * By @osvaldas
 * Demo: http://osvaldas.info/examples/elegant-css-and-jquery-tooltip-responsive-mobile-friendly/
 * Source: http://osvaldas.info/elegant-css-and-jquery-tooltip-responsive-mobile-friendly
 * Usage: <a title="Learn more about this product" rel="tooltip">More info</a>. View source page for required CSS.
 */
var targets=$("[class~=bubble]"),target=false,tooltip=false,title=false;targets.bind("mouseenter",function(){target=$(this);tip=target.attr("title");tooltip=$('<div id="tooltip"></div>');if(!tip||tip==""){return false}target.removeAttr("title");tooltip.css("opacity",0).html(tip).appendTo("body");var b=function(){if($(window).width()<tooltip.outerWidth()*1.5){tooltip.css("max-width",$(window).width()/2)}else{tooltip.css("max-width",340)}var c=target.offset().left+(target.outerWidth()/2)-(tooltip.outerWidth()/2),d=target.offset().top-tooltip.outerHeight()-20;if(c<0){c=target.offset().left+target.outerWidth()/2-20;tooltip.addClass("left")}else{tooltip.removeClass("left")}if(c+tooltip.outerWidth()>$(window).width()){c=target.offset().left-tooltip.outerWidth()+target.outerWidth()/2+20;tooltip.addClass("right")}else{tooltip.removeClass("right")}if(d<0){var d=target.offset().top+target.outerHeight();tooltip.addClass("top")}else{tooltip.removeClass("top")}tooltip.css({left:c,top:d}).animate({top:"+=10",opacity:1},50)};b();$(window).resize(b);var a=function(){tooltip.animate({top:"-=10",opacity:0},50,function(){$(this).remove()});target.attr("title",tip)};target.bind("mouseleave",a);tooltip.bind("click",a)});


/* Simple tabs (by Jack Moore)
=========================================================
 * By @jacklmoore
 * Source: http://www.jacklmoore.com/notes/jquery-tabs/
 */
$('.tabs').each(function () {
	var $active, $content, $links = $(this).find('a');
	$active = $links.first().addClass('active');
	$content = $($active.attr('href'));
	$links.not(':first').each(function () { 
		$($(this).attr('href')).hide();	
	});
	$(this).on('click', 'a', function(e){
		$active.removeClass('active');
		$content.hide();
		$active = $(this);
		$content = $($(this).attr('href'));
		$active.addClass('active');
		$content.show();
		e.preventDefault();
	});
});

/*=============================================
	=            Let's do this            =
=============================================*/

$(document).ready(function(){

/* Simple toggle / Accordion (by me)
=========================================================
 * 1/ Hide all but first block on page load. In this example, we're using a definition list with a class of .accordion.
 * 2/ Add class of .current to first block, which appends a "-", indicating the block is open. CSS is as follows:
 		.accordion dt:before {content:"+";margin-right:.25em;min-width:.5em;display:inline-block}
		.accordion dt.current:before {content:"-";}
 * 3/ Make title clickable and toggle class of .active to switch between + and -
 * Demo: http://www.quorumevaluacion.com/que-evaluamos/
 */
$(".accordion dd").not(":first").hide();
$(".accordion dd:first").addClass("current");
$("dt").css("cursor","pointer").attr("title","More info").on("click", function(){
	$(this).toggleClass('current').next().slideToggle();
});


/* Click to read more (by me)
=========================================================
 * 1/ Hide an element with a class of ".expand" on page load
 * 2/ Append "[+]" on the preceding element so that users can click on it to reveal the hidden block
 * 3/ When clicked, reveal hidden block by sliding it down and hide the "[+]" button
 * Note: this following code --css('width', $('.expand').width() + 'px')--  calculates dynamically the width of the expanding block to avoid the animation jump on slideDown()
 * Demo: http://aixyogacenter.com/en/yoga-teachers/
 */
$('.expand').css('width', $('.expand').width() + 'px').hide().prev().append('<a class="read-more" href="#"> [+]</a>').click(function() {
$(this).next(':hidden').slideDown().prev().find('.read-more').hide();
	e.preventDefault();
  });
  
/* Detect retina screens and add "retina" class to html element  */
if (window.devicePixelRatio > 1) { $('html').addClass('retina');} 

/* Instantiate placeholder polyfill  */
$('input, textarea').placeholder();

/* Open some links in new window if necessary  */
$('a[rel="external"]').on("click", function(){
	window.open( $(this).attr('href') );
	e.preventDefault();
	});

/* Scroll back to top  */
$(window).scroll(function() { 
	if($(this).scrollTop() != 0) { $('.backtotop').fadeIn(); } else { $('.backtotop').fadeOut(); }
	});
$('.backtotop').on("click", function(){
	$('body,html').animate({scrollTop:0}, 800);
	e.preventDefault();
	});

/* jQuery ends  */
});

