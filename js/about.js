$(function () {
    var type = new Typed('.typejs', {
        strings: ["web designer.", " web developer.", "youTuber."],
        typeSpeed: 300,
        backSpeed: 300,
        smartBackspace: true,
        loop: true,

    });
    // About js
    $('.counter').counterUp({
        time: 2000,
    });
    //CounterUp js
    $('.circlechart').circlechart();
    // My skill js
    new WOW().init();
    // Animation js
});