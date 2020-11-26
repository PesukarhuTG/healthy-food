const openModalWindow = () => {

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


//SEND TO SERVER

const forms = document.querySelectorAll('form');

const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
};

    forms.forEach(item => {
        bindPostData(item);
    });

    //постинг данных - настраивает запрос, посылает на сервер, получает ответ, трансформирует в json
    const postData = async (url, data) => {
        const result = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await result.json();
    };



    //привязка постинга
    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
                `;
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            const object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            });

            postData('http://localhost:3000/requests', JSON.stringify(object))
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });

        });
    }

    function showThanksModal(message) {

        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        openModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);

        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }
    
    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(result => console.log(result));
}

export default openModalWindow;

