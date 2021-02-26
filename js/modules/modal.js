function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden'; //запрет прокрутки

    if (modalTimerId) {
        clearInterval(modalTimerId); //если пользователь сам открыл модальное, то больше тоб не высплывало
    }
    
}

function modal(triggerSelector, modalSelector, modalTimerId) {

    //GENERATE MODAL WINDOW

    const modalTrigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);

    //открываем модальное, когда кликнули на кнопку
    modalTrigger.forEach(item => {
        item.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });


    //закрываем модальное, когда кликнули на поле
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal(modalSelector);
        }
    });

    //закрываем модальное, когда нажали esc
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    /*если пользователь опустился вниз страницы, то показать модальное
    но сделать это один раз*/
    function showModalByScroll() {
        if (window.pageYOffset + 
            document.documentElement.clientHeight >= 
            document.documentElement.scrollHeight) {
                openModal(modalSelector, modalTimerId);
                window/removeEventListener('scroll', showModalByScroll);
            }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {closeModal};
export {openModal};