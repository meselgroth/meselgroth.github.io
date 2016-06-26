describe('AnswersFactory', function () {
    var answersFactory;
    var randomiserMock;
    var phrases;

    beforeEach(function () {
        phrases = [{ Phrase: "Anon pengalan mo?", Answer: "What is your name?" }, { Phrase: "asdf", Answer: "qwerty" }, { Phrase: "zxcv", Answer: "ghjk" }, { Phrase: "asdf", Answer: "qwerty1" }, { Phrase: "zxcv", Answer: "ghjk1" }, { Phrase: "zxcv", Answer: "12345" }];
        randomiserMock = { generate: function () { return 0; } };

        module('learnLanguage');
        module(function ($provide) {
            $provide.value('randomiserFactory', randomiserMock);
        });

        inject(function (_answersFactory_) {
            answersFactory = _answersFactory_;
        });
    });

    it('nextPhrase should return random phrase', function () {
        var actual = answersFactory.nextPhrase(phrases);
        expect(actual.Phrase).toBe(phrases[0].Phrase);
        expect(actual.Answer).toBe(phrases[0].Answer);
    });


    it('getPossibleAnswers should return correct answer in array of 4', function () {
        spyOn(randomiserMock, "generate").and.returnValues(0, 1, 2, 3, 4, 0, 1, 2, 3, 4);
        var answers = answersFactory.getPossibleAnswers(phrases[0], phrases);
        expect(answers.length).toBe(4);
        expect(answers).toContain(phrases[0].Answer);
    });

    it('getPossibleAnswers should return 3 random answers from other phrases', function () {
        spyOn(randomiserMock, "generate").and.returnValues(0, 0, 1, 1, 2, 2, 3, 3, 4, 0, 5, 1, 0, 2, 1);
        var answers = answersFactory.getPossibleAnswers(phrases[0], phrases);
        expect(answers).toContain("qwerty");
        expect(answers).toContain("ghjk");
        expect(answers).toContain("qwerty1");
    });
});
