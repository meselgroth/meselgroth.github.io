(function () {
    'use strict';

    angular
        .module('learnLanguage')
        .factory('randomiserFactory', randomiserFactory);


    function randomiserFactory() {
        var service = {
            generate: generate,
        };

        return service;

        function generate(top, bottom) {
            var number = Math.random() * (top - bottom) + bottom;
            return number;
        }
    }
})();