function slide () {

	var slideCount = $('.slider ul li').length;
	var slideWidth = $('.slider ul li').width();
	var slideHeight = $('.slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	var str;
    var autoPlay = null;
	
	$('.slider').css({ width: slideWidth, height: slideHeight });			
	$('.slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	$('.slider ul li:last-child').prependTo('.slider ul');
	
    var moveLeft = function () {
        $('.slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('.slider ul li:last-child').prependTo('.slider ul');
            $('.slider ul').css('left', '');
        });
    };

    var moveRight = function () {
        $('.slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('.slider ul li:first-child').appendTo('.slider ul');
            $('.slider ul').css('left', '');
        });
    };

    $('span.control_prev').click(function () {
        moveLeft();
    });

    $('span.control_next').click(function () {
        moveRight();
    });

    // autoplay 실행
    $('#checkbox').change(function () {
        if($('#checkbox').is(':checked') == true) {
            autoPlay = setInterval(moveRight, 1000); // auto play 초 조절
            $('.btn_checkbox').html('&#x275A &#x275A');
            $('.txt').html('stop');
        } else {
            clearInterval(autoPlay);
            $('.btn_checkbox').html('&#x25B6');
            $('.txt').html('autoPlay');
        };
    });

};

$(document).ready(function (){
    slide();
});