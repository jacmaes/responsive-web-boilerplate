/*
 * jQuery Responsive menu plugin by Matt Kersley
 * Converts menus into a select elements for mobile devices and low browser widths
 * github.com/mattkersley/Responsive-Menu
 */
(function(b){var c=0;b.fn.mobileMenu=function(g){function f(a){return a.attr("id")?b("#mobileMenu_"+a.attr("id")).length>0:(c++,a.attr("id","mm"+c),b("#mobileMenu_mm"+c).length>0)}function h(a){a.hide();b("#mobileMenu_"+a.attr("id")).show()}function k(a){if(a.is("ul, ol")){var e='<select id="mobileMenu_'+a.attr("id")+'" class="mobileMenu">';e+='<option value="">'+d.topOptionText+"</option>";a.find("li").each(function(){var a="",c=b(this).parents("ul, ol").length;for(i=1;i<c;i++)a+=d.indentString;
c=b(this).find("a:first-child").attr("href");a+=b(this).clone().children("ul, ol").remove().end().text();e+='<option value="'+c+'">'+a+"</option>"});e+="</select>";a.parent().append(e);b("#mobileMenu_"+a.attr("id")).change(function(){var a=b(this);if(a.val()!==null)document.location.href=a.val()});h(a)}else alert("mobileMenu will only work with UL or OL elements!")}function j(a){b(window).width()<d.switchWidth&&!f(a)?k(a):b(window).width()<d.switchWidth&&f(a)?h(a):!(b(window).width()<d.switchWidth)&&
f(a)&&(a.show(),b("#mobileMenu_"+a.attr("id")).hide())}var d={switchWidth:768,topOptionText:"Select a page",indentString:"&nbsp;&nbsp;&nbsp;"};return this.each(function(){g&&b.extend(d,g);var a=b(this);b(window).resize(function(){j(a)});j(a)})}})(jQuery);

/* 
 * HTML5 Placeholder jQuery Plugin by Mathias Bynens
 * A jQuery plugin which enables HTML5 placeholder behavior for browsers that aren't trying hard enough
 * Demo: http://mathiasbynens.be/demo/placeholder
 * Source: https://github.com/mathiasbynens/Placeholder-jQuery-Plugin
*/
(function(g,a,$){var f='placeholder' in a.createElement('input'),b='placeholder' in a.createElement('textarea');if(f&&b){$.fn.placeholder=function(){return this};$.fn.placeholder.input=$.fn.placeholder.textarea=true}else{$.fn.placeholder=function(){return this.filter((f?'textarea':':input')+'[placeholder]').bind('focus.placeholder',c).bind('blur.placeholder',e).trigger('blur.placeholder').end()};$.fn.placeholder.input=f;$.fn.placeholder.textarea=b;$(function(){$('form').bind('submit.placeholder',function(){var h=$('.placeholder',this).each(c);setTimeout(function(){h.each(e)},10)})});$(g).bind('unload.placeholder',function(){$('.placeholder').val('')})}function d(i){var h={},j=/^jQuery\d+$/;$.each(i.attributes,function(l,k){if(k.specified&&!j.test(k.name)){h[k.name]=k.value}});return h}function c(){var h=$(this);if(h.val()===h.attr('placeholder')&&h.hasClass('placeholder')){if(h.data('placeholder-password')){h.hide().next().show().focus().attr('id',h.removeAttr('id').data('placeholder-id'))}else{h.val('').removeClass('placeholder')}}}function e(){var l,k=$(this),h=k,j=this.id;if(k.val()===''){if(k.is(':password')){if(!k.data('placeholder-textinput')){try{l=k.clone().attr({type:'text'})}catch(i){l=$('<input>').attr($.extend(d(this),{type:'text'}))}l.removeAttr('name').data('placeholder-password',true).data('placeholder-id',j).bind('focus.placeholder',c);k.data('placeholder-textinput',l).data('placeholder-id',j).before(l)}k=k.removeAttr('id').hide().prev().attr('id',j).show()}k.addClass('placeholder').val(k.attr('placeholder'))}else{k.removeClass('placeholder')}}}(this,document,jQuery));

$(document).ready(function(){
/* Responsive menu plugin 
	  $('nav').mobileMenu({
	  switchWidth: 768,                   //width (in px to switch at)
	  topOptionText: 'Select a page',     //first option text
	  indentString: '&nbsp;&nbsp;&nbsp;'  //string for indenting nested items
	});
*/

$('input, textarea').placeholder();

});

