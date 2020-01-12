$(document).ready(function() {

// setTimeout(function(){ $('body').addClass('loaded'); }, 300);


/***************** Nav Transformicon ******************/
$('.header-nav').click(function(){
	$(this).toggleClass('open');
});
var $icon = $('.btn-nav-menu');
  $icon.on('click',function(e){
    $(this).find('span').toggleClass('close');
    $('.header-nav').toggleClass('open');
    $('body').toggleClass('nav-active');
  });
$(".header-nav ul li a").click(function() {
   $icon.find('span').toggleClass('close');
   $('.header-nav').toggleClass('open');
   $('body').toggleClass('nav-active');
});

/***************** Smooth Scrolling ******************/

$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 2000);
      return false;
    }
  }
});













});

