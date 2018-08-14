


var game = {

    wins: 0,
    words:["wheelbarrow", "friction", "companionship"],
    chosenWord:"",
    guessedLetters: [],
    remainingGuesses: 20,


    gameSetup: function () {
        this.chooseWord();       
        
        //do I remove the letter from chosen word,, and once it's empty win.
        //do I keep a separate word fill array
        

    },

    chooseWord: function(){

        var rand = Math.floor(Math.random() * this.words.length);
        //choose word.
        this.chosenWord = this.words[rand];
        console.log(this.chosenWord);
        //Takes the index chosen, and removes it from the array
        this.words.splice(rand, 1);
        console.log(this.words);
        //choose word randomly
        //remove it from the words array
        //if no words left congrats you finished! refresh to start again.
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

    revealLetter: function(letter){
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

game.gameSetup();