$(function () {



    $('.menu__burger').click(function(event) {
      $('.menu__burger,.menu__desc-mobile').toggleClass('active');
    });


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



// ============ Accordeon ============
    $(function(){
      // hide all content
      $('.accordeon_content').hide();
      
      $('.accordeon_title').click(function(){
        $(this).parent().toggleClass('active').siblings().removeClass('active');
        $('.accordeon_content').slideUp();
        
        if(!$(this).next().is(":visible")) {
          $(this).next().slideDown();
        }
      });
    });



    


});