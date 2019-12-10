$('.header_nav__lang_select').click(function() {
	$(this).toggleClass('header_nav__lang_select_active');
	$(this).siblings('.header_nav__dropdown').toggleClass('header_nav__dropdown_active');
});



$(window).on("load resize",function(e){
	if($(window).width() <= 992) {
		$(".crypto__wrap").slick({
			autoplay: false,
			dots: true,
			arrows: false,
			slidesToScroll: 1,
			customPaging : function(slider, i) {
				var thumb = $(slider.$slides[i]).data();
				i++;
				return '<a class="dot">'+i+'</a>';
			}
		});
	};
	if($(window).width() <= 768) {
		$('.section__title_dropdown').click(function() {
			$(this).find('.section__dropdown').toggleClass('section__dropdown_active');
			$(this).siblings('.section__content').slideToggle();
		});
	}
});



$('.exchange__paying_select').on('change', function() {
	var cur_paying = $(this).val();
	$('.exchange__purchasing_select option').removeAttr("disabled");
	$('.exchange__purchasing_select option[value='+cur_paying+']').attr('disabled','disabled');
});
$('.exchange__purchasing_select').on('change', function() {
	var cur_paying = $(this).val();
	$('.exchange__paying_select option').removeAttr("disabled");
	$('.exchange__paying_select option[value='+cur_paying+']').attr('disabled','disabled');
});


$('.header-hamburger').click(function() {
	$(this).toggleClass('header-hamburger__active');
	$('.header_nav__menu_mob').toggleClass('header_nav__menu_mob_active');
});


// $('.crypto__chart').click(function() {
// 	$('.modal').show();
// });
// $('.modal__close').click(function() {
// 	$('.modal').hide();
// });
$('.crypto__chart').on('click', function(e) {
  e.preventDefault();
  $('.modal').css({"display":"flex"});
});
$(".modal__close, .modal__overlay").click(function(){
  $(".modal").css({"display":"none"});
});