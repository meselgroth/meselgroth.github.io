describe('PhrasesFactory', function () {
    var phrasesFactory, $httpBackend;
    var phrases;

    beforeEach(function () {
        module('learnLanguage');
        inject(function (_phrasesFactory_, _$httpBackend_) {
            phrasesFactory = _phrasesFactory_;
            $httpBackend = _$httpBackend_;
        });
        phrases = [{ Phrase: "Anon pengalan mo?", Answer: "What is your name?" }, { Phrase: "asdf", Answer: "qwerty" }, { Phrase: "zxcv", Answer: "ghjk" }, { Phrase: "asdf", Answer: "qwerty1" }, { Phrase: "zxcv", Answer: "ghjk1" }, { Phrase: "zxcv", Answer: "12345" }];
        $httpBackend.when('GET', 'js/phrases.js').respond(phrases);
    });

    it('Get phrases should call $resource and return phrases', function (done) {
        phrasesFactory.query(function (data) {
            expect(data.length).toBe(phrases.length);
            done();
        });
        $httpBackend.flush();
    });

});
