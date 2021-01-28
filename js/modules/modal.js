function modal() {

    //GENERATE MODAL WINDOW

    const modalTrigger = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector('.modal');

    //открываем модальное, когда кликнули на кнопку
    modalTrigger.forEach(item => {
        item.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden'; //запрет прокрутки
        clearInterval(modalTimerId); //если пользователь сам открыл модальное, то больше тоб не высплывало
    }

    //закрываем модальное, когда кликнули на поле
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
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
    const modalTimerId = setTimeout(openModal, 30000);

    /*если пользователь опустился вниз страницы, то показать модальное
    но сделать это один раз*/
    function showModalByScroll() {
        if (window.pageYOffset + 
            document.documentElement.clientHeight >= 
            document.documentElement.scrollHeight) {
                openModal();
                window/removeEventListener('scroll', showModalByScroll);
            }
    }

    window.addEventListener('scroll', showModalByScroll);
}

module.exports = modal;