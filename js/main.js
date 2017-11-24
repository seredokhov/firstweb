

/* Маска */
jQuery(function($){
	$("[name = phone]").mask("+9(999) 999-9999");
});

/* Валидация формы*/

$(function(){
	var orderBtn = $('.order_btn');
	var form = orderBtn.parent();
	var name = $(".form_block [name = name]");
	var phone = $(".form_block [name = phone]");
	var message = $('.message');
	var re = /\+\d\(\d\d\d\) \d\d\d-\d\d\d\d/;
	var boll = true;




	orderBtn.click(function(){

		if (name.val().length >= 3 && re.test(phone.val()) ) {
			form.submit();
			name.removeClass('error');
			phone.removeClass('error');
		} else {
			if (name.val().length < 3) {
				name.addClass('error');
			} else {
				name.removeClass('error');
			}
			if ( !re.test(phone.val()) ) {
				phone.addClass('error');
			} else {
				phone.removeClass('error');
			}
			message.text('Не корректные данные');
			return false;
		}
	})
});

/* Модальная форма*/

$(function(){
	var send = $('.btn_send');
	var form = send.parent();
	var name = $(".modal [name = name]");
	var phone = $(".modal [name = phone]");
	var re = /\+\d\(\d\d\d\) \d\d\d-\d\d\d\d/;
	var boll = true;

	send.click(function(){
		if (name.val().length >= 3 && re.test(phone.val()) ) {
			form.submit();
			name.removeClass('error');
			phone.removeClass('error');
		} else {
			if (name.val().length < 3) {
				name.addClass('error');
			} else {
				name.removeClass('error');
			}
			if ( !re.test(phone.val()) ) {
				phone.addClass('error');
			} else {
				phone.removeClass('error');
			}
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

/* Модалки */
$(function(){
	var linkCall = $("a.order_btn").add('a.callback');
	var linkPolit = $('a.politics');
	var overlay = $('.overlay');
	var modalCall = $('.modal.callback');
	var modalPolitics = $('.modal.politics');
	var closeModal = $('.modal .close');

	closeModal.click(function(){
		overlay.fadeOut();
		modalCall.fadeOut();
		modalPolitics.fadeOut();
	})
	overlay.click(function(){
		$(this).fadeOut();
		modalCall.fadeOut();
		modalPolitics.fadeOut();
	})

	linkCall.click(function(){
		overlay.fadeIn();
		modalCall.fadeIn();
		return false;
	})
	linkPolit.click(function(){
		overlay.fadeIn();
		modalPolitics.fadeIn();
		return false;
	})
});


//Аякс отправка форм

$(function(){
	var message = $('.message');
	var modal = $('.modal');
	var overlay = $('.overlay');
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		message.text('');
		overlay.fadeOut();
		modal.fadeOut();
		return false;
	});
});






// json объект

var dataObj = {
	"0" : {
		"type" : "Интернет магазин",
		"name" : "EYEBAY",
		"description" : "Яркая защита от солнца",
		"cost" : "15 000 руб",
		"time" : "12 дней",
		"engine" : "Битрикс",
		"designe" : "Эксклюзив"
	},
	"1" : {
		"type" : "Тип 2",
		"name" : "Имя2",
		"description" : "Описание2...",
		"cost" : "Стоимость2",
		"time" : "Сроки разработки2",
		"engine" : "Движок2",
		"designe" : "Дизайн2"
	},
	"2" : {
		"type" : "Тип 3",
		"name" : "Имя3",
		"description" : "Описание3...",
		"cost" : "Стоимость3",
		"time" : "Сроки разработки3",
		"engine" : "Движок3",
		"designe" : "Дизайн3"
	},
	"3" : {
		"type" : "Тип 4",
		"name" : "Имя4",
		"description" : "Описание4...",
		"cost" : "Стоимость4",
		"time" : "Сроки разработки4",
		"engine" : "Движок4",
		"designe" : "Дизайн4"
	}
};



// Слайдер 

$(document).ready(function() {
	var testJson;
	$.getJSON('https://github.com/seredokhov/firstweb/blob/master/data.json').success(function(json){
		testJson = json;
		console.log(testJson);
	});
	//var kk = $.getJSON('https://randomuser.me/api/?results=1');
	//console.log(kk);


	var owl = $("#owl-demo");
	var name = $("[data-str = name]");
	var cost = $("[data-str = cost]");
	var time = $("[data-str = time]");
	var engine = $("[data-str = engine]");
	var designe = $("[data-str = designe]");
	var description = $("[data-str = description]");
	var type = $("[data-str = type]");
	var ItemObj;

	// Функция заполнения полей
	function filling() {
		name.text(dataObj[ItemObj.currentItem].name);
		cost.text(dataObj[ItemObj.currentItem].cost);
		time.text(dataObj[ItemObj.currentItem].time);
		engine.text(dataObj[ItemObj.currentItem].engine);
		designe.text(dataObj[ItemObj.currentItem].designe);
		description.text(dataObj[ItemObj.currentItem].description);
		type.text(dataObj[ItemObj.currentItem].type);
	};

	owl.owlCarousel({
		items : 1,
		itemsDesktop : [1000,1], 
		itemsDesktopSmall : [900,1], 
		itemsTablet: [600,1], 
		itemsMobile : false,
		mouseDrag : false,
		touchDrag : false
	});
	ItemObj = $(".owl-carousel").data('owlCarousel');
	

	filling(); // Заполнение при загрузке

 	owl.bind('owl.next owl.prev owl.goTo owl.jumpTo', function(){
 		filling(); // Заполнение при срабатывании события
 	})

	// Обработчики событий
	$(".next").click(function(){
		owl.trigger('owl.next');
	})
	$(".prev").click(function(){
		owl.trigger('owl.prev');
	})

 
});
