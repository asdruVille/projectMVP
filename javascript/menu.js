$(window).scroll(function(){
    var pixel = $(window).scrollTop();

    if(pixel > 100){
      $('.navbar').addClass('menu-fixed');
    } else {
      $('.navbar').removeClass('menu-fixed');
    }
  });
if ('ontouchstart' in window) {
    var click = 'touchstart';
    
} else {
    var click = 'click';
}
$('.menu ul li a').on(click,function(){
    window.location.href = $(this).attr('href');
});
$('.burger').on(click, function () {

    if ($(window).width() <= 700) {
        if (!$(this).hasClass('open')) {
            openMenu();
            $(this).html('&times;');
        } else {
            closeMenu();
            $(this).html('&#9776;'); 
        }
    }
});
$('.menu ul li a').on(click, function (e) {
    e.preventDefault();
    if ($(window).width() <= 700) {
        window.location.href = $(this).attr('href');
        closeMenu();
        $('.burger').html('&#9776;'); 
    }
});
function openMenu() {
	$('.menu').css('display','block');
    $('.circle').addClass('expand');
    $('.burger').addClass('open');
	$('.burger').css('color', '#eee');
    $('.menu li').addClass('animate');
}
function closeMenu() {
	$('.menu').css('display','none');
    $('.burger').removeClass('open');
	$('.burger').css('color', '#333');
    $('.circle').removeClass('expand');
    $('.menu li').removeClass('animate');
}
$(window).resize(function () {
    if ($(window).width() <= 700) {
    } else {
        closeMenu();
        $('.burger').html('&#9776;'); 
        $('.menu').css('display','flex');
        
    }
});
