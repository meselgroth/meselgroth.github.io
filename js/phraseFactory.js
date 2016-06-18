(function () {
    'use strict';

    angular
        .module('learnLanguage')
        .factory('phraseFactory', phraseFactory);

    phraseFactory.$inject = ['$http', 'randomiserFactory'];

    function phraseFactory($http, randomiserFactory) {
        var service = {
            getPhrases: getPhrases,
            nextPhrase: nextPhrase,
            getPossibleAnswers: getPossibleAnswers
        };
        var numOfPhrases = 3;

        return service;

        function getPhrases() {
            return [{ Phrase: "Anon pengalan mo?", Answer: "What is your name?" }, { Phrase: "asdf", Answer: "qwerty" }, { Phrase: "zxcv", Answer: "ghjk" }];
        }

        function nextPhrase() {
            return getPhrases()[randomIndex()];
        }

        function getPossibleAnswers(chosenPhrase) {
            var answer1 = getPhrases()[randomIndex()].Answer;
            while (answer1 === chosenPhrase.Answer) {
                answer1 = getPhrases()[randomIndex()].Answer;
            }

            var answers = [answer1, chosenPhrase.Answer, getPhrases()[randomIndex()].Answer];
            return answers;
            var answer;
            for (var i = 0; i < 2; i++) {
                do {
                    var index = randomiserFactory.generate(numOfPhrases - 1, 0);
                    answer = getPhrases()[index].Answer;
                } while (answer === chosenPhrase.Answer)
                answers.push(answer);
            }
        }

        function randomIndex() {
            return randomiserFactory.generate(numOfPhrases - 1, 0);
        }
    }
})();