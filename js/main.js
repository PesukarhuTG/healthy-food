window.addEventListener('DOMContentLoaded', () => {

//Modal window

const modalTrigger = document.querySelectorAll('[data-modal]'); //все кнопки
const modal = document.querySelector('.modal'); //div.modal
const modalCloseBtn = document.querySelector('[data-close]'); //крестик-закрытие

function openModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = 'hidden'; //запрет прокрутки
    clearInterval(modalTimerId); //если пользователь сам открыл модальное, то больше тоб не высплывало
}

function closeModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = '';
}

//открываем модальное, когда кликнули на кнопку
modalTrigger.forEach(item => {
    item.addEventListener('click', openModal);
});

//закрываем модальное, когда кликнули на крестик
modalCloseBtn.addEventListener('click', closeModal);

//закрываем модальное, когда кликнули на поле
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

//закрываем модальное, когда нажали esc
document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

//открываем модальное по истечении времени
const modalTimerId = setTimeout(openModal, 2000);

//если пользователь опустился вниз страницы, то показать модальное
//но сделать это один раз
function showModalByScroll() {
    if (window.pageYOffset + 
        document.documentElement.clientHeight >= 
        document.documentElement.scrollHeight) {
            openModal();
            window/removeEventListener('scroll', showModalByScroll);
        }
}

window.addEventListener('scroll', showModalByScroll);

});
