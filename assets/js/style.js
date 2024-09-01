$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false

                }
            }
        ]
    });

    $('.slider-no-dots').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,  // Dots disabled
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });
    $('.slider-no-dots-no-arrow').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,  // Dots disabled
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });

    $('.slider-no-dots').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.item').removeClass('active-slide'); // Remove class from all slides
        $(slick.$slides[nextSlide]).find('.item').addClass('active-slide'); // Add class to the next active slide
    });

    // Initialize with the first slide as active
    $('.slider-no-dots .slick-active .item').addClass('active-slide');

});


$(document).ready(function () {
    // On scroll, add/remove sticky class
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('sticky-header');
        } else {
            $('.navbar').removeClass('sticky-header');
        }
    });
});




