var contactForm = $("#contact-form");

$(function() {
    // what we do titles center
    $('.w-title').addClass("text-center");

    contactForm.on("submit", function(e) {
        e.preventDefault();
        let formValid = validateContactForm();
        if (formValid) {
            let name = $("input.name").val();

            alert(`Thank you ${name}, your message has been received`);
            clearForm();
        }
    });

    toggleWhatWeDo();
});

// function

//  function to toggle what we do
function toggleWhatWeDo() {
    $(".service").on("click", function() {
        if ($(".service-details", this).is(":visible")) {
            $(".service-details", this).hide();
            $(".service-card", this).fadeIn("slow");
        } else {
            $(".service-details", this).fadeIn("slow");
            $(".service-card", this).hide();
        }
    });
}

// validate contact form

function validateContactForm() {
    let isFormValid = true;
    const formInputs = contactForm.find("input,textarea");

    formInputs.each(function() {
        if (!$(this).val()) {
            $(this).addClass("is-invalid");
            isFormValid = false;
        }
    });
    return isFormValid;
}

function removeFormErrors() {
    contactForm.find("input,textarea").on("keydown", function() {
        if ($(this).hasClass("is-invalid")) {
            $(this).removeClass("is-invalid");
        }
    });
}

function clearForm() {
    contactForm.find("input,textarea").each(function() {
        $(this).val("");
    });
}

removeFormErrors();
//portfolio overlay


  $("p,#imgWrap").hover(function(){
    $(this).css("border: white solid 4px", "white");
    }, function(){
    $("#imgWrap").css("color", "black");
    
});

$("p,#imgWrap2").hover(function(){
  $(this).css("border: white solid 4px", "white");
  }, function(){
  $("#imgWrap").css("color", "black");
  
});
