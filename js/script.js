window.addEventListener('DOMContentLoaded', () => {
    
    const tabs = require('./modules/tabs'),
        modal = require('./modules/modal'),
        timer = require('./modules/timer'),
        cards = require('./modules/cards'),
        calc = require('./modules/calc'),
        forms = require('./modules/form'),
        slider01 = require('./modules/slider01'),
        slider02 = require('./modules/slider02');

        tabs();
        modal();
        timer();
        cards();
        calc();
        forms();
        slider01();
        slider02();
});