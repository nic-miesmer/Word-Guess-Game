


var game = {

    wins: 0,
    words:["wheelbarrow", "friction", "companionship"],
    guessedLetters: [],
    remainingGuesses: 20,


    gameSetup: function () {

    },

    matchedLetter: function(){
        //Is the letter guessed in the word?
        //If it is
            //Reveal it in the word
            //Add to gussed letters

        //If it's not
            //remainingGueses -1
            //push letter into guessed Letters array
    },

    gameEnd: function() {
        //if all letters have been gussed and remaining guesses != 0
            // Win
                //restart game gameSetup()
                // wins +1 
        //else if
            //remaining gusses = 0
            // loss
            //restart game -> gameSetup()
        // else
            // continue game

    },

    revealLetter: function(leter){
        // find where the letter goes,
        // reveal it,
        //add letter to gussed letters
    },

    addToGuessedLetters: function(letter){
        // add guessed letter to guessedLetters
    }

}

document.onkeyup = function (event) {
    //matchedLetter

}