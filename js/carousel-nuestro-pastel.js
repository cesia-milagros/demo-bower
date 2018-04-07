$.noConflict;
jQuery(document).ready(function(){
    jQuery("#slider-nuestro").owlCarousel({
       items:1,
			margin: 20,
			autoplay:true,
			dots: true,
			nav: false,
			loop:true,
			animateOut: 'slideOutDown',
            animateIn: 'flipInX',
    });
});
