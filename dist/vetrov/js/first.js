window.addEventListener('DOMContentLoaded', () => {

    const sectionHeader = document.querySelector('.section-header'),
        inetriorImg = document.querySelector('.interiors'),
        weddingImg = document.querySelector('.wedding'),
        portraitImg = document.querySelector('.portrait'),
        headerText = document.querySelector('.header');
    
     
    const printText = function (text, elem) {
            if (text.length > 0) {
                elem.innerHTML += text[0];
                setTimeout(
                    function () {
                        printText(text.slice(1), elem, 300);
                    }, 100
                )
            }
        }
    
    
    function newBackground(section, newImg) {
        section.addEventListener('mouseenter', () => {
            section.style.backgroundImage = newImg;
        });
        
        section.addEventListener('mouseover', () => {
            setTimeout(() => {
                section.style.backgroundImage = '';
            }, 5000)
        });
    }
    
    // headerText.style.opacity = '0%';
    sectionHeader.addEventListener('touchstart', () => {

        headerText.style.filter = 'opacity(1)';
        printText('Info', document.getElementById("info"));
        printText('Portfolio', document.getElementById("portfolio"));
        
    }, { once: true });


    function newBackgroundTouch(section, newImg, oldImg) {
        section.addEventListener('touchmove', () => {
            section.style.backgroundImage = newImg;
        });
        
        section.addEventListener('touchend', () => {            
            section.style.backgroundImage = '';            
        });
    }
    
    
    if (window.innerWidth >= 768) {
        printText('Info', document.getElementById("info"), { once: true });        
        printText('Portfolio', document.getElementById("portfolio"), { once: true });
        // newBackground(inetriorImg, "url('./img/interiors.JPG')", "url('./img/interiors1.JPG')");
        newBackground(weddingImg, "url('./img/1wending.jpg')", "url('./img/IMG_5870.JPG')");
        newBackground(portraitImg, "url('./img/IMG_5967.JPG')", "url('./img/IMG_7302.JPG')");
    }
    newBackgroundTouch(inetriorImg, "url('./img/interiors.JPG')", "url('./img/interiors1.jpg')");
    newBackgroundTouch(weddingImg, "url('./img/1wending.jpg')", "url('./img/IMG_5870.JPG')");
    newBackgroundTouch(portraitImg, "url('./img/IMG_5967.JPG')", "url('./img/IMG_7302.JPG')");
});