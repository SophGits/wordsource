"use strict";


function CommaSeparatedWordsource(words) {
  if(words === ""){
    this.words = [];
  } else {
    this.words = words.split(",");
  }
  this.seenWords =[];
};

CommaSeparatedWordsource.prototype.nextWord = function() {
  if(this.words.length === 0) { return null; }
  var seenWord = this.words.shift();
  this.seenWords.push(seenWord);
  return seenWord;
};

CommaSeparatedWordsource.prototype.count = function() {
  return this.seenWords.length;
};

CommaSeparatedWordsource.prototype.topFiveWords = function() {
  var quantities = this.seenWords.reduce(function(ret, val, i){
    if(ret.hasOwnProperty(val)) {
      ret[val] += 1;
    } else {
      ret[val] = 1;
    }
    return ret;
  }, {});

  return Object.keys(quantities).sort(function(a,b) {
    if(quantities[a] > quantities[b]) {
      return 1;
    }
    if(quantities[a] < quantities[b]) {
      return -1;
    }
    return 0;
  }).reverse().slice(0,5);

};

CommaSeparatedWordsource.prototype.run = function() {
  while(this.nextWord());
};

module.exports = CommaSeparatedWordsource;

var src = new CommaSeparatedWordsource("lorem,ipsum,dolor,lorem,lorem,dolor,sit,sit,sit,sit,amet,consectetur,amet,hihi");
src.run();
console.log(src.topFiveWords());