describe('PhraseFactory', function () {
    var $controller,
        phraseFactory,
        $httpBackend,
        $rootScope,
        randomiserMock;

    beforeEach(function () {
        randomiserMock = { generate: function () { return 0; } };
        module('learnLanguage');
        module(function ($provide) {
            $provide.value('randomiserFactory', randomiserMock);
        });
        inject(function (_$controller_, _phraseFactory_, _$httpBackend_, _$rootScope_) {
            $controller = _$controller_;
            phraseFactory = _phraseFactory_;
            $httpBackend = _$httpBackend_;
            $rootScope = _$rootScope_;
        });
    });

    it('nextPhrase should return random phrase', function () {
        var actual = phraseFactory.nextPhrase();
        expect(actual.Phrase).toBe("Anon pengalan mo?");
    });

    var correctAnswer = "What is your name?";

    it('getPossibleAnswers should return correct answer in array of 3', function () {
        var answers = phraseFactory.getPossibleAnswers({ Phrase: "", Answer: correctAnswer });
        expect(answers.length).toBe(3);
        expect(answers).toContain(correctAnswer);
    });
    it('getPossibleAnswers should return 2 random answers from other phrases', function () {
        spyOn(randomiserMock, "generate").and.returnValues(0, 0, 1, 2);
        var answers = phraseFactory.getPossibleAnswers({ Phrase: "", Answer: correctAnswer });
        expect(answers).toContain("qwerty");
        expect(answers).toContain("ghjk");
    });

    it('getPhrases should store phrases from server in object', function () {

    });
});
