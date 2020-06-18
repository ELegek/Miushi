$(function () {

    // ================ MENU BURGER ===================
    document.querySelector('.menu__burger').onclick = function () {
        this.classList.toggle('active');
    };


    $('.intro__slider').slick({
        arrows: true,
        dots: true,
    });

    $('.gallery__slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: true,
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                infinite: true,
                dots: true,
                arrows: true,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});