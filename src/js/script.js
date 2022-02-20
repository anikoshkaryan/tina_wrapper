//*hamburger-menu part



$(document).on("click", ".hamburger-menu", function(){
    
    $('.mobile_version').fadeToggle();


  
});

$(document).on("click", ".mobile-close", function(){
  
    $('.mobile_version').fadeToggle();

  
});


const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 3,
    direction: 'horizontal',
    loop: true,
    spaceBetween: 15,
       // Navigation arrows
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      324: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      330: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      340: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      350: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      360: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      370: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      371: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      372: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      373: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      374: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      375: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      376: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      378: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      379: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      380: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      400: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      420: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      426: {
        slidesPerView: 2,
        spaceBetween: 10
      },
  
      430: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      440: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      460: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      470: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      500: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      801: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      
      800: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      802: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      
      805: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      
      810: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      
      820: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      
      840: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      
      860: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      
      880: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      
      900: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1120: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1130: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1140: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1150: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1152: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1155: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1157: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1158: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1160: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1170: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1180: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1170: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1180: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1190: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1216: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1218: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1220: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1230: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1240: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1250: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1260: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1270: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1299: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1500: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1600: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1700: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1800: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
 
  });