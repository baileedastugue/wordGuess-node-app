var Letter = require("./letter");
var randomWord = "";
var numTrue =0;
var numFalse = 0;

function Word () {
    this.letterArray = [];
    this.createArray = function(randomWord) {
        this.letterArray = randomWord.split("");
        // creates an array of letters using the constructor 
        for (var i = 0; i < this.letterArray.length; i++){
            this.letterArray[i] = new Letter(this.letterArray[i]);
        }
    }
    this.callCheck = function (guess) {
        for (var i = 0; i < this.letterArray.length; i++) {
            this.letterArray[i].checkGuess(guess);
            if (this.letterArray[i].checkGuess(guess)) {
                numTrue += 1;
            }
        }
        console.log(pickedWord.letterArray.join(' '));
    }
}



module.exports = Word;