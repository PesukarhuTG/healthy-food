const createSlider02 = () => {
    const slides02 = document.querySelectorAll('.offer__slide_second');
    const prev02 = document.querySelector('.offer__slider-prev_second');
    const next02 = document.querySelector('.offer__slider-next_second');
    const current02 = document.querySelector('#current_second');
    const total02 = document.querySelector('#total_second');
    const slidesWrapper = document.querySelector('.offer__slider-wrapper_second');
    const slidesField = document.querySelector('.offer__slider-inner');
    const width = window.getComputedStyle(slidesWrapper).width;

    //счетчик слайдов
    let slideIndex = 1;

    let offset = 0;

     //подставление нуля
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    total02.innerHTML = getZero(slides02.length);
    current02.innerHTML = getZero(slideIndex);

    //помещаем все слайды на странице в slidesField
    slidesField.style.width = 100 * slides02.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    //ограничиваем wrapper
    slidesWrapper.style.overflow = 'hidden';
    
    //всем слайдам одинаковая ширина
    slides02.forEach(item => {
        item.style.width = width;
    })

    next02.addEventListener('click', () => {
        if (offset == (+width.slice(0, width.length - 2) * (slides02.length - 1))) { //чтобы 500рх превратить в 500
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides02.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        current02.innerHTML = getZero(slideIndex);
    });

    prev02.addEventListener('click', () => {

        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides02.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides02.length;
        } else {
            slideIndex--;
        }

        current02.innerHTML = getZero(slideIndex);

    });

}

export default createSlider02;