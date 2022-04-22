const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');


hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.classList.add('active');
})

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
})

const counters = document.querySelectorAll('.skills__block-counters'),
    lines = document.querySelectorAll('.skills__block-scale span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

$(function () {
    $("a[href^='#']").click(function () {
        let _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
})