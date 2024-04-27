// -------   Mail Send ajax


$(function() {


    // Get the form.
    var form = $('#myForm');
    var loader = $('#loader');

    // Get the messages div.
    var formMessages = $('.alert-msg');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        $(formMessages).text("Your message is being sent...");
        loader.css({'display': 'block'});

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
            // dataType: "json",
            // processData: false,
            // contentType: false,
            // headers: {
            //     "Accept": "application/json"
            // }
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');
            loader.css({'display': 'none'});

            // Set the message text.
            $(formMessages).text("Message sent successfully! We'll get back to you soon.");

            // Clear the form.
            $('#contact-form input,#contact-form textarea').val('');
        })
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');
            loader.css({'display': 'none'});

            // Set the message text.
            $(formMessages).text('Oops! An error occured and your message could not be sent.');
        });
    });

});				

