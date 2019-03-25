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

/* FadeIn Scroll */
$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.fade').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},800);

            }

        });

    });

});
