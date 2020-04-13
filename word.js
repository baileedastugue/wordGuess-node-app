var Letter = require("./letter");
var randomWord = "";
var wordRep = "";

function Word () {
    this.letterArray = [];
    this.wordArray = [];
    this.createArray = function(randomWord) {
        this.letterArray = randomWord.split("");
        // creates an array of letters using the constructor 
        for (var i = 0; i < this.letterArray.length; i++){
            this.wordArray.push(this.letterArray[i]);
            this.letterArray[i] = new Letter(this.letterArray[i]);
        }
    }
    this.callCheck = function (guess) {
        for (var i = 0; i < this.letterArray.length; i++) {
            this.letterArray[i].checkGuess(guess);
        }
        wordRep = pickedWord.letterArray.join(' ');
        console.log(wordRep);
    }
}



module.exports = Word;