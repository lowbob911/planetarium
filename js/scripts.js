$(function() {
	$('.js-smooth-scroll').on('click.smoothscroll', function(e) {
		e.preventDefault();
		var $scrollTo = $($.attr(this, 'href'));
		if ($scrollTo.length) {
			$('html, body').animate({
				scrollTop: $scrollTo.offset().top
			}, 600);
		}
	});

	('.reg-btn.collapsed').click(function() {
		gtag('event', 'Registration Button Click');
	});
});