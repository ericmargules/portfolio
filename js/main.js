$(document).ready(function(){

    $('.top_nav_link').removeClass('black'); 
    $('.top_nav_link').addClass('white');

    $('a').on("click", function() {
        $('#hero')[0].style.opacity = 1;
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() == 0) {
            $(".top_nav > nav > li > a").addClass('white');
        	$('.top_nav_link').removeClass('black'); 
        }
    });
});