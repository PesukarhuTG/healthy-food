window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabcontainer');

    // ф-ция скрытия ненужных табов
    const hideTabContent = () => {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
 
        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });
    };

    // ф-ция показа табов. По умолчанию в ES6 можно указать 0 сразу
    const showTabContent = (i = 0) => {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    };

    hideTabContent();
    showTabContent();

    //через делегирование реализуем событие клика
    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => { //определяем номер таба, по ктр-му кликнули и по его номеру отображаем контент
                if (target === item) { //если элемент псевдомасива tabs совпадает с эл-том, куда кликнул пользователь
                    hideTabContent();
                    showTabContent(i);
                }

            });
        }

    });


});

