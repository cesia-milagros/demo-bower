$.noConflict;
jQuery(document).ready(function(){
    jQuery("#slider-delivery").owlCarousel({
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

jQuery(document).ready(function(){
    jQuery("#slider-eventos").owlCarousel({
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