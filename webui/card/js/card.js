function pickCard () {

	var listLen = 10; // 총 카드 수 
	var centerCard = (listLen / 2) - 1; // 가운데 카드
	var html = "";
	
	// 카드 리스트 뿌리기
	for (var i = 0; i < listLen; i++) {
		var count = i + 1;
		var zIndex = i * 5;
		var centerDeg = 0;
		var deg = -(centerCard - i) * 5;

		if(i < centerCard) {
			html += "<li class='card" + count + "'";
			html +=  "style = 'z-index:" + zIndex + "; transform:rotate(" + deg + "deg); '";
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

	$('.card_wrap').append(html);


	// 카드 닫힘 버튼 넣기
	$('.card_wrap li').append('<button class="btn_x">X</button>');

	// 선택한 카드 나오기
	$('.card_wrap li').click(function (e) {
		var target = $(e.target);
		var targetBtn = target.children();
		target.addClass('selected');
		target.siblings(target).removeClass('selected');
		targetBtn.css('display', 'block');
	});

	// 선택한 카드 닫기
	$('.btn_x').click(function (e) {
		var target = $(e.target).parent();
		target.removeClass('selected');
		$('.btn_x').css('display', 'none');
	})

};

$(document).ready(function () {
	pickCard();
})