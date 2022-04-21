const sliderMain = new Swiper('.slider_main' , {
    freeMode: true,  // можно свободно крутить, где остановишь там и остановится
    centeredSlides: true, // Где слайдер начинается, не в начале, а в центре.
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: { // количество слайдеров отображается на малых экрана.
            slidesPerView: 1.5, // количество слайдеров
            spaceBetween: 5 // расстояние
        },
        680: {
            slidesPerView: 3.5, // количество слайдеров
            spaceBetween: 60 // расстояние
        }
    }
});

document.querySelectorAll('.slider__item').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('opened')           
    });
});


let desc = document.querySelector('.discription')
sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden');
});
