function slider01() {

    const slides = document.querySelectorAll('.offer__slide');
    const prev = document.querySelector('.offer__slider-prev');
    const next = document.querySelector('.offer__slider-next');
    const current = document.querySelector('#current');
    const total = document.querySelector('#total');

    //счетчик слайдов
    let slideIndex = 1;

    showSlides(slideIndex);

     //подставление нуля
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    total.innerHTML = getZero(slides.length);

    //ф-ция по показу и скрытию наших файлов
    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => item.style.display = 'none');
        slides[slideIndex-1].style.display = 'block';

        current.innerHTML = getZero(slideIndex);
    }
    
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    //нахначаем обработчики
    prev.addEventListener('click', () => {
        plusSlides(-1);

    });

    next.addEventListener('click', () => {
        plusSlides(1)
    });


}

module.exports = slider01;