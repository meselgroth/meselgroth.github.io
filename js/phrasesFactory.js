(function () {
    'use strict';

    angular
        .module('learnLanguage')
        .factory('phrasesFactory', phrasesFactory);

    phrasesFactory.$inject = ['$resource', 'randomiserFactory'];

    function phrasesFactory($resource, randomiserFactory) {
        var service = {
            getPhrases: getPhrases
        };

        return service;

        function getPhrases() {
            return [{ Phrase: "Anon pengalan mo?", Answer: "What is your name?" }, { Phrase: "asdf", Answer: "qwerty" }, { Phrase: "zxcv", Answer: "ghjk" }, { Phrase: "asdf", Answer: "qwerty1" }, { Phrase: "zxcv", Answer: "ghjk1" }, { Phrase: "zxcv", Answer: "12345" }];
            var phraseResource = $resource('js/phrases.js');
            var phrases = phraseResource.get();

            return phrases;
        }
    }
})();