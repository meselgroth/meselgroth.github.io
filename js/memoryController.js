﻿(function () {
    'use strict';

    angular
        .module('learnLanguage')
        .controller('memoryController', memoryController);

    memoryController.$inject = ['phrasesFactory', 'answersFactory'];

    function memoryController(phrasesFactory, answersFactory) {
        /* jshint validthis:true */
        var vm = this;
        
        vm.Phrases = phrasesFactory.query(function (phrases) {
            vm.NextPhrase = answersFactory.nextPhrase(phrases);
            vm.PossibleAnswers = answersFactory.getPossibleAnswers(vm.NextPhrase, phrases);
        });

        vm.Submit = submit;

        function submit() {
            if (vm.ChosenAnswer === vm.NextPhrase.Answer) {
                vm.NextPhrase = answersFactory.nextPhrase(vm.Phrases);
                vm.PossibleAnswers = answersFactory.getPossibleAnswers(vm.NextPhrase, vm.Phrases);
            }
        }

    }
})();
