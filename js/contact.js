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


});