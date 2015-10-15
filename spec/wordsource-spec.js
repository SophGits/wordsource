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

  describe("When contains gte two items", function() {

    beforeEach(function () {
      src = new CommaSeparatedWordsource("lorem,ipsum,dolor");
    });

    it("returns the proceeding word", function() {
      expect(src.nextWord()).toBe("lorem");
      expect(src.nextWord()).toBe("ipsum");
      expect(src.nextWord()).toBe("dolor");
    });
  });

});