const swiper = new Swiper('.sample-slider', {
    loop: true,
    direction: 'horizontal',
    slidesPerView: 4,
    centeredSlides: true,
    effect: "coverflow",
    autoplay:{
        delay:3000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
        dynamicBullets:true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
       700: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    
        380:{
          slidesPerView: 3,
          spaceBetween: 5,
        },
        0:{
            slidesPerView: 3,
            spaceBetween: 5,
          },
    },
})