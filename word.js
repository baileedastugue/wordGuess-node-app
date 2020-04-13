var Letter = require("./letter");
var wordRep = "";

// a constructor
function Word () {
    // empty array
    this.letterArray = [];
    this.createArray = function(randomWord) {
        // stores the letters of the word separately in letterArray
        this.letterArray = randomWord.split("");

        // creates an array of letters using the Letter constructor
        for (var i = 0; i < this.letterArray.length; i++){
            this.letterArray[i] = new Letter(this.letterArray[i]);
        }
    }
    // check to see if the letter is in the word
    // consoles a string of underscores or letters that updates
    this.callCheck = function (guess) {
        for (var i = 0; i < this.letterArray.length; i++) {
            this.letterArray[i].checkGuess(guess);
        }
        wordRep = pickedWord.letterArray.join(' ');
        console.log(wordRep);
    }
}

module.exports = Word;