
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);


if (isChrome) {
	//$('.banner').addClass('animate')
}

$('.slides').on('init', function (slick) {
	showSlide(slick,0)
});

$('.slides').slick({
	centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3,
	infinite: false,
	speed: 100,
	autoplay: true,
    responsive: [
    	{
    		breakpoint: 768,
    		settings: {
    			slidesToShow: 1
    		}
    	}
    ]
    
});

$('.slides').on('beforeChange', function(){
	hideSlides();
});

$('.slides').on('afterChange', function(event,slick,slideNo){
	var slide = slick.$slides[slideNo];
	showSlide(slide, slideNo);
});

$('.slide-shortcut').click(function(){
	var shortcut = $(this);
	var link = shortcut.data('link-to');
	$('.slides').slick('slickGoTo',link);
});


function hideSlides(){
	$('.content').removeClass('active');
}

function showSlide(slide, slideNo){

	// deactive shortcuts
	$('.projects-shortcuts, .slide-shortcut').removeClass('active');

	if($(slide).hasClass('project-slide')){
		// show project shortcuts
		$('.projects-shortcuts').addClass('active');
		// highlight projects shortcut
		$('.slide-shortcut.projects-shortcut').addClass('active');
		// highlight category
		$('.slide-shortcut.project-'+$(slide).data('category')).addClass('active');
	}else{
		// highlight page shortcut
		$('.slide-shortcut[data-link-to="'+slideNo+'"]').addClass('active');
	}

	// show page content
	setTimeout(function(){
		$('#content-' + slideNo).addClass('active');
	}, 0);
}

$(document).ready(function() {
	$('.gallery').each(function(){

		$(this).find('.image').each(function(){
			
		});

		$(this).magnificPopup({
			delegate: '.image',
			type:'image',
			mainClass: 'mfp-with-zoom',
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true,
			}
		});
	});


	$('.down-arrow, .scroll-shortcut').click(function() {
		$('html, body').animate({
			scrollTop: $(".down-arrow").offset().top
		}, 500);
	});

	$(window).scroll(function(){
		//console.log($(document).scrollTop());
		if ($(document).scrollTop() > 10 ){
			//$('header').addClass('scrolled');
			//$('.slides').slick('slickPause');
		}else{
			//$('header').removeClass('scrolled');
		}


		if ($(document).scrollTop() > $(window).height() ){
			$('.slides').slick('slickPause');
		}
	});

});



// TODO


// mobile
// about page
// contact page
// templates

// contact form
// background slope
// animations
// gallery grouping
