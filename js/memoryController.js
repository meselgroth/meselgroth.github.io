(function () {
    'use strict';

    angular
        .module('learnLanguage')
        .controller('memoryController', memoryController);

    memoryController.$inject = ['phraseFactory'];

    function memoryController(phraseFactory) {
        /* jshint validthis:true */
        var vm = this;
        
        vm.Phrases = phraseFactory.getPhrases();
        vm.NextPhrase = phraseFactory.nextPhrase();
        vm.PossibleAnswers = phraseFactory.getPossibleAnswers(vm.NextPhrase);
        vm.Submit = submit;

        function submit() {
            if (vm.ChosenAnswer === vm.ChosenPhrase.Answer) {
                alert('wohoo');
            }
        }

    }
})();
