import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/form';
import slider01 from './modules/slider01';
import slider02 from './modules/slider02';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    //открываем модальное по истечении времени
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 30000);

    tabs('.tabheader__item', '.tabcontent', '.tabcontainer', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2021-07-30');
    cards();
    calc();
    forms('form', modalTimerId);
    slider01({
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        currentCounter: '#current',
        totalCounter: '#total'
    });
    slider02({
        container: '.offer__slider_second',
        nextArrow: '.offer__slider-next_second',
        prevArrow: '.offer__slider-prev_second',
        slide: '.offer__slide_second',
        totalCounter: '#total_second',
        currentCounter: '#current_second',
        wrapper: '.offer__slider-wrapper_second',
        field: '.offer__slider-inner'

    });
});