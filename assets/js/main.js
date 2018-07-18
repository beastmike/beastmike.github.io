(function () {

    /**
         * Particles.js
         * Website: https://vincentgarreau.com/particles.js/
         */
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles', '../assets/particles.json');

    $(document).ready(function () {
        var innerHeight = window.innerHeight;
        var centerScreen = innerHeight / 2;
        var skillSectionTop = $('.skills h3').offset().top;
        const $languages = $('.languages');
        const $skillSection = $('.skills');
        const $box = $('.box');
        const $coverTitle = $('.cover-title');
        const $arrow = $('.navigate-down a');
        $(window).scroll(function () {
            if ($(this).scrollTop() > $coverTitle.offset().top) {
                $arrow.fadeOut();
            } else {
                $arrow.fadeIn();
            }
            if ($(this).scrollTop() > skillSectionTop - centerScreen) {
                $languages.addClass("languages-fade");
                $box.addClass("box-rotate");
            } else {
                $languages.removeClass("languages-fade");
                $box.removeClass("box-rotate");
            }
        });
    });

    // Smooth scroll 
    $(document).ready(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

})();