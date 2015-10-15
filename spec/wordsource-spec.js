/*global
 describe, it, expect, beforeEach
*/
var CommaSeparatedWordsource = require('../wordsource.js');

describe("Wordsource", function () {

  var src;
  describe("When empty", function () {

    beforeEach(function () {
      src = new CommaSeparatedWordsource("");
    });

    it("returns null", function () {
      expect(src.nextWord()).toBe(null);
    });
  });

});