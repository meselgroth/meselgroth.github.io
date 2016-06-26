(function () {
    'use strict';

    angular
        .module('learnLanguage')
        .factory('phrasesFactory', phrasesFactory);

    phrasesFactory.$inject = ['$resource'];

    function phrasesFactory($resource) {
        return $resource('js/phrases.js');
    }
})();