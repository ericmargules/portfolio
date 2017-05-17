function handleContactForm() {

	var message = "";

	$("#sendMessage").on("click", function() {
    message = $("#contactform").serialize();
    $.ajax({
        url: "https://formspree.io/eric.i.margules@gmail.com", 
        method: "POST",
        data: {message: "hello!"},
        dataType: "json"
    });
    alert('Thanks for the email, I\'ll be in touch soon.');
    return false;
	});

}

$(document).ready(function(){

	handleContactForm();

});