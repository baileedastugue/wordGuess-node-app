// create a constructor, Letter
// display an underlying character or a blank placeholder
    // underlyingChar (string)
    // letterGuessed (boolean)
    // function ():
        // if letter has been guessed --> return letter
        // if letter has not been guessed --> return underscore
    // function (char): 
        // checks it against underlyingChar
        // if char === underlyingChar --> letterGuessed = true
        // call other function

var inquirer = require("inquirer");
inquirer.prompt([
    {
        type: "input",
        name: "char",
        message: "guess a letter",
        validate: function(value) {
            if (value.length == 1 && isNaN(value)) {
                return true;
            }
            return false;
        } 
    }
]).then (function(response) {
    console.log(typeof(response.char));  
})