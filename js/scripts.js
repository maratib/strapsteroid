$(document).ready(function () {
	$(".navbar-toggler").click(function () {
		$(".navbar-toggler").toggleClass(" change ");
	});

});


$(window).scroll(function () {
	let position = $(this).scrollTop();
	if (position >= 150) {
		$("nav")
			.addClass("custom-menu")
			.removeClass("nav-menu");
	} else {
		$("nav")
			.addClass("nav-menu")
			.removeClass("custom-menu");
	}
});
