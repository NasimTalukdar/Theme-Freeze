$(function () {
    var typed = new Typed('#type', {
        strings: ["web design.", " psd to html.", "theme customization", "html5 and css3.", "jquery and bootstarp."],
        typeSpeed: 300,
        backSpeed: 300,
        smartBackspace: true,
        loop: true,
    });
    // // Home js
    // Preloader js
    $(window).on('load', function () {
        $('.preloader').delay(3000).fadeOut();
    });

});