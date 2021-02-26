function slider01(slide, nextArrow, prevArrow, currentCounter, totalCounter) {

    const slides = document.querySelectorAll(slide);
    const prev = document.querySelector(prevArrow);
    const next = document.querySelector(nextArrow);
    const current = document.querySelector(currentCounter);
    const total = document.querySelector(totalCounter);

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

export default slider01;