function timer() {

    const deadine = '2021-05-30';

    const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date()); //превращаем строку даты во что-то числовое ms
        const days = Math.floor(t / (1000 * 60 * 60 * 24)); //ms в дни
        const hours = Math.floor((t / (1000 * 60 * 60) % 24)); //ms в часы
        const minutes = Math.floor((t / (1000 * 60)) % 60);
        const seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            days,
            hours,
            minutes,
            seconds
            };
        };

    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');

        const timeInterval = setInterval(updateClock, 1000);

        updateClock(); //чтобы не было мигания

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0 ) {
                clearInterval(timeInterval);
            }
        }
    };

    //подставление нуля
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    setClock('.timer', deadine);

}

module.exports = timer;