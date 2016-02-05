var canvas;
var ctx;
var flag = false;
var mobileInfo = new Array('iPhone', 'Android', 'iPad');

$(document).ready(function() {

	canvas = document.getElementById('canvas');
	ctx = canvas.getContext("2d");

	//로드 이미지 캔버스에 보이기
	document.getElementById("loadImg").addEventListener("change", loadImg, false);

	for (var info in mobileInfo) {
		if (navigator.userAgent.match(mobileInfo[info]) != null || document.body.clientWidth < 600) {
			var topH = parseInt($(".top").css("height"));
			canvas.width = window.innerWidth - 10;
			canvas.height = window.innerHeight - (topH + 10);
			canvas.addEventListener("touchstart", touchStart, false);
			canvas.addEventListener("touchmove", touchMove, false);
			canvas.addEventListener("touchend", touchEnd, false);
			btns();
		} else {
			webReady();
			btns();
		}
	}

	//캔버스 화면 흰바탕 깔기
	ctx.beginPath();
	ctx.rect (0,0, canvas.width, canvas.height);
	ctx.fillStyle = '#ffffff';
	ctx.fill();
});

//모바일일때
function touchStart(event) {
	var touch = event.targetTouches[0];

	ctx.beginPath();
	ctx.moveTo(touch.pageX, touch.pageY);

	flag = true;
	
}
function touchMove(event) {
	event.preventDefault();

	if (flag) {
		ctx.lineTo(event.targetTouches[0].pageX, event.targetTouches[0].pageY);
		ctx.stroke();
	}
	
}
function touchEnd(event) {

	ctx.closePath();
	flag = false;
	
}

//웹일때
function webReady() {

	canvas.onmousedown = drawStart;
	canvas.onmousemove = drawing;
	window.onmouseup = drawEnd;
}

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


function drawStart(event) {
	var xpos = event.target.offsetLeft;
	var ypos = event.target.offsetTop;
	ctx.moveTo(event.clientX-xpos, event.clientY-ypos);
	flag = true;
}
function drawing(event) {
	if (flag) {
		var xpos = event.target.offsetLeft;
		var ypos = event.target.offsetTop;
		ctx.lineCap = "round";
		ctx.lineTo(event.clientX-xpos, event.clientY-ypos);
		ctx.stroke();
	}
}
function drawEnd(event) {
	flag = false;
}


//버튼들
function btns(e) {
	$(".btn-save").click(function() {
		window.open(canvas.toDataURL());
	});
	$(".btn-new").click(function(e) {
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
	$(".btn-eraser").click(function() {
		ctx.strokeStyle = "#ffffff";
	});
}


