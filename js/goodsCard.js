//generate cards via Class (ES6)

window.addEventListener('DOMContentLoaded', () => {

    const divCards = document.querySelector('.menu-container');

    class MenuCard {
        constructor ( title, description, price, img) {
            this.img = img;
            this.title = title;
            this.description = description;
            this.price = price;
            this.transfer = 77; // exchange course $ to Rub
            this.cnahgeToRub();
            this.createCard();
        }

        cnahgeToRub() {
            this.price = +this.price * this.transfer;
        }

    
        createCard() {

            const card = document.createElement('div');
            card.className = 'menu__item';

            card.insertAdjacentHTML ('afterbegin', `
                
                    <img src=img/tabs/${this.img} alt="${this.img}">
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.description}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> руб./день</div>
                    </div>
                
            `);

            divCards.insertAdjacentElement('beforeend', card);
        };
            

        }

    new MenuCard (
        'Меню "Фитнес"', 
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 
        10, 
        'vegy.jpg');

    new MenuCard (
        'Меню "Премиум"', 
        'В меню "Премиум" мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 
        20, 
        'elite.jpg');

    new MenuCard (
        'Меню "Постное"', 
        'Меню "Постное" - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 
        15, 
        'post.jpg');

});