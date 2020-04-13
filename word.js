var Letter = require("./letter");
var randomWord = "";

function Word () {
    this.letterArray = [];
    this.createArray = function(randomWord) {
        this.letterArray = randomWord.split("");
        // creates an array of letters using the constructor 
        for (var i = 0; i < this.letterArray.length; i++){
            this.letterArray[i] = new Letter(this.letterArray[i]);
        }
        // when concatenating with a string, JS automatically calls `toString`
        console.log(this.letterArray.join(' '));
    }
    this.callCheck = function (guess) {
        for (var i = 0; i < this.letterArray.length; i++) {
            this.letterArray[i].checkGuess(guess);
        }
    }
}

module.exports = Word;