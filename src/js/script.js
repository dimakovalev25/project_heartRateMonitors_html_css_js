var slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controls: false,
	nav: false

});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});


$(document).ready(function(){
	function toggleSlide(item) {
			$(item).each(function(i) {
					$(this).on('click', function(e) {
							e.preventDefault();
							$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
							$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
					})
			});
	};

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');
});


document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
	

	
	
});




