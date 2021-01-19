const createSlider02 = () => {
    const slides02 = document.querySelectorAll('.offer__slide_second');
    const prev02 = document.querySelector('.offer__slider-prev_second');
    const next02 = document.querySelector('.offer__slider-next_second');
    const current02 = document.querySelector('#current_second');
    const total02 = document.querySelector('#total_second');
    const slidesWrapper = document.querySelector('.offer__slider-wrapper_second');
    const slidesField = document.querySelector('.offer__slider-inner');
    const width = window.getComputedStyle(slidesWrapper).width;

    const slider = document.querySelector('.offer__slider_second');

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

    //dots
    slider.style.position = 'relative';
    
    const indicators = document.createElement('ol');
    const dots = [];

    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < slides02.length; i++) {
        let dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');

        if (i == 0) {
            dot.style.opacity = '1';
        }

        indicators.append(dot);
        dots.push(dot); //create dots and push them to the array
    }

    function changeActiveStatusOfDots() {
        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[slideIndex - 1].style.opacity = '1';
    }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '') //чтобы 500рх превратить в 500
    }



    next02.addEventListener('click', () => {
        if (offset == (deleteNotDigits(width) * (slides02.length - 1))) { //чтобы 500рх превратить в 500
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides02.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        current02.innerHTML = getZero(slideIndex);

        //change active status for dots
        changeActiveStatusOfDots();
    });

    prev02.addEventListener('click', () => {

        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides02.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides02.length;
        } else {
            slideIndex--;
        }

        current02.innerHTML = getZero(slideIndex);

        //change active status for dots
        changeActiveStatusOfDots();

    });

    dots.forEach(dot => {
        dot.addEventListener('click', e => { 
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;

            //change img
            offset = deleteNotDigits(width) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;

            //change current number of slide
            current02.innerHTML = getZero(slideIndex);

            //change active status of dots
            changeActiveStatusOfDots();

        })
    })

}

export default createSlider02;