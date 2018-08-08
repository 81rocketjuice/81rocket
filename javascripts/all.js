$(function(){

	var $doc, $win, breakpoint, winH, winW;
	$doc = $(document);
	$win = $(window);
	$headerY = $('header.global').height();

	//fade in
	$('.fade, figure img').css('opacity', 0);
	$('.fade, figure img').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			// $(this).fadeIn();
			$(this).animate({opacity: 1}, 500);
		}
		else{
			// $(this).stop().removeClass('mv02');
		}
	});

	//header
	$('.gnav a.gbtn').click(function() {
		$(this).toggleClass('active');
		$('#dnav').toggleClass('active');
	});

	//main size
	$win.on('resize', function() {
		return imgFull();
	});
	imgFull = function() {
		winW = $win.width();
		winH = $win.height();
		winH -= $headerY;
		$('ul.bxslider li').css({
			width: winW + 'px',
			height: winH + 'px'
		});
	};
	imgFull();

	//bxslider
	$('#bxslider01').bxSlider({
		auto: true,
		speed: 1000,
		mode: 'fade',
		pause: 7000
	});
	$('#bxslider02 .main').bxSlider({
		auto: true,
		speed: 800,
		mode: 'fade',
		pause: 8000,
		pagerCustom: '#bxthumb'
	});

	//smooth scroll
	$('a[href*=\\#]').not('.noscr').click(function () {
		var speed = 800;
		var href = $(this).attr('href');
		var target = $(href == '#' || href == '' ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop: position}, speed, 'swing');
		return false;
	});


});
