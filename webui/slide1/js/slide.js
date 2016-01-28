function setView() {
	var width = 300;
	var height = width;
	var isMove = false;
	var positionArray = [];
	var recommend = [
		"111",
		"222",
		"333",
		"444",
		"555",
		"666",
		"777",
		"888",
		"999",
		"000"
	];
	var renderList = function () {
		var html = "";
		var list = $('.list-slide');
		var marginTop;
		var marginLeft;
		var zIndex;
		
		for (var i = 0; i < recommend.length; i++) {
			// 크기 계산
			width = width - 10;
			height = height - 10;
			
			// 위치 계산
			marginTop = ( (i * -25) + (i * i) ) - (height / 2);
			marginLeft = (width / 2) * -1;
			zIndex = 1000-i;

			// dom 작성
			html += "<li class='item-mainplaylist index"+i+"'";
			html += "style='width:"+width+"px;height:"+height+"px;margin-top:"+marginTop+"px;margin-left:"+marginLeft+"px;z-index:"+zIndex+";'>";
			html += "<div class='txt'>";
			html += "<p><strong>"+recommend[i]+"</strong></p>";
			html += "</div>";
			html += "</li>";
			
			// 각 돔 위치 배열
			positionArray.push({
				"width" : width,
				"height" : height,
				"marginTop" : marginTop,
				"marginLeft" : marginLeft,
				"zIndex" : zIndex
			});
		}
		
		list.append(html);

		$(".btn-up").on("click", function () {
			dragMoveHandler("up");
		});

		$(".btn-down").on("click", function () {
			dragMoveHandler("down");
		});
		
	};

	var dragMoveHandler = function (type) {
		var listItem = $('.list-slide li');
		var fadeOutEl;
		
		// 이동 중이면
		if (!!isMove) {
			return false;
		}

		isMove = true;

		if (type === "down") {
			positionArray.unshift(positionArray[positionArray.length - 1]);
			positionArray.splice(positionArray.length - 1, 1);
		
			for (var i = 0; i < listItem.length; i++) {
				if (positionArray[i].zIndex === (1000 - (listItem.length - 1)) ) {
					fadeOutEl = $(listItem[i]);
					fadeOutEl.hide();
				}

				animateList(i, fadeOutEl);

			}
		} else if (type === "up") {
			positionArray.push(positionArray[0]);
			positionArray.splice(0, 1);
			
			for (var j = 0; j < listItem.length; j++) {
				animateList(j);
			}
		}
	};
	var animateList = function (i, fadeOutEl) {
		var listItem = $('.list-slide li');
		var time;

		$(listItem[i]).animate({
			"width" : positionArray[i].width,
			"height" : positionArray[i].height,
			"margin-top" : positionArray[i].marginTop,
			"margin-left" : positionArray[i].marginLeft,
			"z-index" : positionArray[i].zIndex
		}, 300, function () {
			time = setTimeout(function () {
				if (!!fadeOutEl) {
					fadeOutEl.show();
				}
				
				isMove = false;
				
				clearTimeout(time);
			}, 100);
		});
	};

	renderList();
}

$(document).ready(function () {
	setView();
});