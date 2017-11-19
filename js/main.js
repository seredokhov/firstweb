$(document).ready(function() {
 
	var owl = $("#owl-demo");
 
	owl.owlCarousel({
		items : 1,
		itemsDesktop : [1000,1], 
		itemsDesktopSmall : [900,1], 
		itemsTablet: [600,1], 
		itemsMobile : false 
	});
 
	// Custom Navigation Events
	$(".next").click(function(){
		owl.trigger('owl.next');
	})
	$(".prev").click(function(){
		owl.trigger('owl.prev');
	})
	$(".play").click(function(){
		owl.trigger('owl.play',1000);
	})
	$(".stop").click(function(){
		owl.trigger('owl.stop');
	})
 
});


/* Маска */
jQuery(function($){
	$("#phone").mask("+9(999) 999-9999");
});

/* Валидация формы*/

$(function(){
	var orderBtn = $('.order_btn');
	var form = orderBtn.parent();
	var name = $('#name');
	var phone = $('#phone');
	var message = $('.message');
	var re = /\+\d\(\d\d\d\) \d\d\d-\d\d\d\d/;
	var boll = true;

	orderBtn.click(function(){

		if (name.val().length < 3) {
			boll = false;
			name.addClass('error');
		}
		else {
			name.removeClass('error');
			boll = true;
		}
		
		if ( !re.test(phone.val()) ) {
			boll = false;
			phone.addClass('error');
		}
		else {
			phone.removeClass('error');
			boll = true;
		}
		if (boll == true) {
			form.submit();
		}
		else {
			message.text('Не корректные данные');
			return false;
		}
	})


});

/* Анимации */
(function($) {
	$.fn.animated = function(inEffect) {
		$(this).each(function() {
			var ths = $(this);
			ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
				if (dir === "down") {
					ths.addClass(inEffect).css("opacity", "1");
				};
			}, {
				offset: "90%"
			});

		});
	};
})(jQuery);

$(function(){
	$(".who").animated("zoomIn");
	$(".designer").animated("bounceInDown");
	$(".programmer").animated("bounceInRight");
	$(".account_manager").animated("bounceInUp");
	$(".header_end p").animated("slideInLeft");
	$(".ul_container").animated("fadeInRight");
	$(".portfolio_descr > div").animated("fadeInLeft");
	$(".gallery_block").animated("fadeInRight");

});


