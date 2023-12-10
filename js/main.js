$(function(){
  $('.top-slider').slick({
    dots: true,
    /* speed: 300, */
    slidesToShow: 1,
    slidesToScroll: 1,


/* Стрелки вперед-назад */
    nextArrow: '<type="button" class="slick-arrow slick-next"><img src="images/next-arrow.svg" alt="Кнопка стрелки вперед"></button>',
    prevArrow: '<type="button" class="slick-arrow slick-prev"><img src="images/prev-arrow.svg" alt="Кнопка стрелки назад"></button>',
/*----------------------*/   


    responsive: [
      {
        breakpoint: 1024,
        settings: {
          
        }
      },
      
      {
        breakpoint: 640,
        settings: {
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});