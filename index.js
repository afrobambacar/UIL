$(document).ready(function () {
	$('.btn_menu').click(function(e) {
	    var target = $(e.target);
	    var url = target.attr('url');

	    $('.iframe_wrap').attr('src', url);
	});

	$('.btn_menu').click(function(e) {
		var target = $(e.target);
		target.addClass("on");
		target.siblings(target).removeClass("on");
	});
});