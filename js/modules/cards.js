function cards() {

    const divCards = document.querySelector('.menu-container');

    class MenuCard {
        constructor ( img, altimg, title, descr, price) {
            this.img = img;
            this.altimg = altimg;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.transfer = 77; // exchange course $ to Rub
            this.cnahgeToRub();
        }

        cnahgeToRub() {
            this.price = +this.price * this.transfer;
        }

    
        render() {

            const card = document.createElement('div');
            card.className = 'menu__item';

            card.insertAdjacentHTML ('afterbegin', `
                
                    <img src=img/tabs/${this.img} alt="${this.altimg}">
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> руб./день</div>
                    </div>
                
            `);

            divCards.insertAdjacentElement('beforeend', card);
        };
    }

    //получение данных с сервера
    const getResource = async (url) => {
        let result = await fetch(url);

        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, status ${result.status}`);
        }
        return await result.json();
    };

    // getResource('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({ img, altimg, title, descr, price }) => {
    //             new MenuCard(img, altimg, title, descr, price).render();
    //         });
    //     });

    axios.get('http://localhost:3000/menu')
            .then(data => {
                data.data.forEach(({ img, altimg, title, descr, price }) => {
                    new MenuCard(img, altimg, title, descr, price).render();
                });
                
            });

}

module.exports = cards;