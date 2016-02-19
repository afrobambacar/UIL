var canvas;
var ctx;
var flag = false;

// web
function webReady () {

	canvas.onmousedown = drawStart;
	canvas.onmousemove = drawing;
	window.onmouseup = drawEnd;

	var drawStart = function (event) {
		ctx.beginPath();
		var xpos = event.target.offsetLeft;
		var ypos = event.target.offsetTop;
		ctx.moveTo(event.clientX-xpos, event.clientY-ypos);
		flag = true;
	}

	var drawing = function (event) {
		if (flag) {
			var xpos = event.target.offsetLeft;
			var ypos = event.target.offsetTop;
			ctx.lineCap = "round";
			ctx.lineTo(event.clientX-xpos, event.clientY-ypos);
			ctx.stroke();
		}
	}

	var drawEnd = function (event) {
		flag = false;
	}

}

// 내 컴 이미지 불러오기
function loadImg (event) {

	var img = new Image();
	var f = document.getElementById("loadImg").files[0];
	var url = window.URL || window.webkitURL;
	var src = url.createObjectURL(f);

	img.src = src;
	img.onload = function() {
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		url.revokeObjectURL(src);
	}

}

// 버튼들
function btns () {

	$(".btn-save").click(function() {
		window.open(canvas.toDataURL());
	});
	$(".btn-new").click(function() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	});
	$(".btn-bold").click(function() {
		ctx.lineWidth = 10;
	});
	$(".btn-normal").click(function() {
		ctx.lineWidth = 5;
	});
	$(".btn-light").click(function() {
		ctx.lineWidth = 1;
	});
	$(".btn-black").click(function() {
		ctx.strokeStyle = "#000000";
	});
	$(".btn-glay").click(function() {
		ctx.strokeStyle = "#cccccc";
	});
	$(".btn-red").click(function() {
		ctx.strokeStyle = "#FF00C8";
	});
	$(".btn-blue").click(function() {
		ctx.strokeStyle = "#00ADFF";
	});
	$(".btn-green").click(function() {
		ctx.strokeStyle = "#B4FF00";
	});
	$(".btn-yellow").click(function() {
		ctx.strokeStyle = "#EFFF00";
	});

}

$(document).ready(function () {

	canvas = document.getElementById('canvas');
	ctx = canvas.getContext("2d");

	document.getElementById("loadImg").addEventListener("change", loadImg, false);

	webReady();
	btns();

});

