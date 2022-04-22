window.addEventListener('DOMContentLoaded', () => {
    const sectionHeader = document.querySelector('.section-header'),
        details = document.querySelector('details'),
        portfolio = document.querySelector('#portfolio'),
        interior = document.querySelector('.int'),
        wedding = document.querySelector('.wed'),
        portrait = document.querySelector('.port');
    
    details.addEventListener('click', () => {
        if (details.open == true) {            
            portrait.addEventListener('click', () => {
                sectionHeader.style.background = "url('./img/IMG_5733.JPG') 50% 0%"
                sectionHeader.style.backgroundSize = 'cover';
            })
            wedding.addEventListener('click', () => {
                sectionHeader.style.background = "url('./img/wedding/10wending.jpg') 45% 0%"
                sectionHeader.style.backgroundSize = 'cover';
            })
            interior.addEventListener('click', () => {
                sectionHeader.style.background = "url('./img/IMG7378.JPG') 50% 0%"
                sectionHeader.style.backgroundSize = 'cover';
            })            
            portfolio.addEventListener('click', () => {
                sectionHeader.style.background = "";
            })    
        } 
            })
    
});