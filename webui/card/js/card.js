$(document).ready(function () {

	var listLen = 10;
	var centerCard = (listLen / 2);
	var html = "";
	
	for (var i = 0; i < listLen; i++) {
		var count = i + 1;
		var zIndex = i * 5;
		var centerDeg = 0;
		var deg = i * 5;
		

		// html += "<li class='card" + count + "'>" + count + "</li>";

		if(i < centerCard) {
			html += "<li class='card" + count + "'";
			html +=  "style = 'z-index:" + zIndex + "; transform:rotate(" + (-deg) + "deg); '";
			html +=  ">" + count + "</li>";
		} else if(i === centerCard) {
			html += "<li class='card" + count + "'";
			html +=  "style = 'z-index:" + zIndex + "; transform:rotate(" + centerDeg + "deg); '";
			html +=  ">" + count + "</li>";
		} else if(i > centerCard) {
			html += "<li class='card" + count + "'";
			html +=  "style = 'z-index:" + zIndex + "; transform:rotate(" + deg + "deg); '";
			html +=  ">" + count + "</li>";
		};
	};

	$('.card-wrap').append(html);






	$('.card-wrap li').append('<button class="btn_x">X</button>');

	$('.card-wrap li').click(function(e) {
		var target = $(e.target);
		target.addClass('selected');
		target.siblings(target).removeClass('selected');
	});

	$('.btn_x').click(function(e) {
		var target = $(e.target).parent();
		target.removeClass('selected');
	})

});