$(document).ready(function() {

  //Pour afficher le bouton
    var offset = 120;
    var duration = 500;
    $(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });

  //Pour le smoth scroll
  $(function() {
     $('a[href*=#]:not([href=#])').click(function() {
     	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      	var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
       		$('html,body').animate({
          scrollTop: target.offset().top
          }, 500);
          return false;
          }
        }
    });
	});
});
