function shrinkHeader() {
    if ($(window).scrollTop() > 0) {
        $('.top_nav').removeClass('home');
        $('.top_nav').addClass('little');
        $("li > a").addClass('small_link');
        $(".top_nav > nav > li > a").removeClass('blue');
        $(".top_nav > nav > li > a").addClass('black');
    } else {
        $('.top_nav').addClass('home');
        $('.top_nav').removeClass('little');
        $("li > a").removeClass('small_link');
        $(".top_nav > nav > li > a").removeClass('black');
        $(".top_nav > nav > li > a").addClass('blue');
    }
}


function verifyContactForm() {
    var test = true;
    $("input").each(function(){
        if ($(this)[0].value == ""){
            test = false;
        }
    });
    if ($("textarea")[0].value == "") {
            test = false;
    }
    return test;
}

function squish(that) {
    if (that.value != "" ) {
        that.nextSibling.nextSibling.style.width = "18%";
    } else {
        that.nextSibling.nextSibling.style.width = "";
    }
}

function handleContactForm() {
	var message = "";

	$("#sendMessage").on("click", function() {
        if (verifyContactForm()) {
            message = $("#contactform").serialize();
            $.ajax({
                url: "https://formspree.io/eric.i.margules@gmail.com", 
                method: "POST",
                data: {message: "hello!"},
                dataType: "json"
            });
            alert('Thanks for the email, I\'ll be in touch soon.');
            return false;
        } else{
            $("span")[0].innerHTML = "Please complete the entire form!";
            return false;
        }
	});

}

$(document).ready(function(){

    handleContactForm();

    $("input").on("blur", function() {
        squish(this);
    });

    $("textarea").on("blur", function() {
        squish(this);
    });

    $(window).scroll(function() {
        shrinkHeader();
    });

    if ($(window).scrollTop() == 0) {
        $(".top_nav > nav > li > a").addClass('black');
        $('.top_nav_link').removeClass('blue'); 
    } else {
        $('.top_nav_link').removeClass('blue'); 
        shrinkHeader();
    }

    $(window).scroll(function() {
        if($(window).scrollTop() > 0) {
            var top = Math.round(($(window).scrollTop() / 6));
            $('#hero')[0].style.opacity = (1 -(top * .01));
        }
    });
});