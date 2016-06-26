(function () {
    'use strict';

    angular
        .module('learnLanguage')
        .controller('memoryController', memoryController);

    memoryController.$inject = ['answersFactory'];

    function memoryController(answersFactory) {
        /* jshint validthis:true */
        var vm = this;
        
        vm.NextPhrase = answersFactory.nextPhrase();
        vm.PossibleAnswers = answersFactory.getPossibleAnswers(vm.NextPhrase);
        vm.Submit = submit;

        function submit() {
            if (vm.ChosenAnswer === vm.ChosenPhrase.Answer) {
                alert('wohoo');
            }
        }

    }
})();
