(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
})(jQuery);

// Book now popup

    const bkTrigger = document.getElementById("bk-popup-trigger");
    const bkOverlay = document.getElementById("bk-popup-overlay");
    const bkClose = document.getElementById("bk-popup-close");

    bkTrigger.addEventListener("click", function (e) {
        e.preventDefault();
        bkOverlay.classList.add("bk-popup-active");
    });

    bkClose.addEventListener("click", function () {
        bkOverlay.classList.remove("bk-popup-active");
    });

    bkOverlay.addEventListener("click", function (e) {
        if (e.target === bkOverlay) {
            bkOverlay.classList.remove("bk-popup-active");
        }
    });

