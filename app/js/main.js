$(function(){


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
});
  
});