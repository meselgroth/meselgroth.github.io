(function () {
    'use strict';

    angular
        .module('learnLanguage')
        .factory('answersFactory', answersFactory);

    answersFactory.$inject = ['$resource', 'randomiserFactory','phrasesFactory'];

    function answersFactory($resource, randomiserFactory, phrasesFactory) {
        var service = {
            nextPhrase: nextPhrase,
            getPossibleAnswers: getPossibleAnswers
        };
        
        var numOfAnswers = 4;

        return service;

        function getPhrases() {
            return phrasesFactory.getPhrases();
        }

        function nextPhrase() {
            return getPhrases()[randomPhraseIndex()];
        }

        function getPossibleAnswers(chosenPhrase) {
            var answers = [];
            answers[randomAnswerIndex()] = chosenPhrase.Answer;
            answers[newRandomIndex(answers)] = newRandomAnswer(answers);
            answers[newRandomIndex(answers)] = newRandomAnswer(answers);
            answers[newRandomIndex(answers)] = newRandomAnswer(answers);

            return answers;
        }
        function newRandomAnswer(answers) {
            var newAnswer;
            var count = 0;
            do {
                newAnswer = getPhrases()[randomPhraseIndex()].Answer;
                count++;
            } while (answers.includes(newAnswer) && count < getPhrasesLength() * 5)
            return newAnswer;
        }
        function newRandomIndex(answers) {
            var answerIndex = 0;
            for (var i = 0; i < 20; i++) {
                answerIndex = randomAnswerIndex();
                if (answers[answerIndex] === undefined) {
                    break;
                }
            }
            return answerIndex;
        }
        function randomPhraseIndex() {
            return randomiserFactory.generate(getPhrasesLength(), 0);
        }
        function randomAnswerIndex() {
            return randomiserFactory.generate(numOfAnswers, 0);
        }
        function getPhrasesLength() {
            return getPhrases().length;
        }
    }
})();