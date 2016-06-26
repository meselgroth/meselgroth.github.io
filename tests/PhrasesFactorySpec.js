describe('PhrasesFactory', function () {
    var answersFactory, $httpBackend;
    var phrases, correctAnswer;

    beforeEach(function () {
        module('learnLanguage');
        inject(function (_answersFactory_, _$httpBackend_) {
            answersFactory = _answersFactory_;
            $httpBackend = _$httpBackend_;
        });

        $httpBackend.when('GET', 'js/phrases.js')
                            .respond([{ Phrase: "Anon pengalan mo?", Answer: "What is your name?" }, { Phrase: "asdf", Answer: "qwerty" }, { Phrase: "zxcv", Answer: "ghjk" }, { Phrase: "asdf", Answer: "qwerty1" }, { Phrase: "zxcv", Answer: "ghjk1" }, { Phrase: "zxcv", Answer: "12345" }]);
    });

    it('nextPhrase should return random phrase', function () {
        var actual = answersFactory.getPhrases();
        //expect(actual.Phrase).toBe(phrases[0].Phrase);
    });

});
