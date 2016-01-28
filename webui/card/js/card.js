$(document).ready(function () {
	$('.card-wrap01 li').click(e) {
		var target = $('e.target');
		target.addClass('selected');
		target.siblings(target).removeClass('selected');
	};
});