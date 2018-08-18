    var wins = 0;
    var words =["wheelbarrow", "friction", "companionship"];
    var chosenWord =[];
    var guessedLetters = [];
    var displayWord = [];
    var remainingGuesses = 20;

      // Set the inner HTML contents of the #game div to our html string

   var gameSetup = function () {
        chooseWord();       
        
        //do I remove the letter from chosen word,, and once it's empty win.
        //do I keep a separate word fill array

    };


    var chooseWord = function(){
        //choose word randomly
        var rand = Math.floor(Math.random() * words.length);
        //choose word.
        chosenWord = words[rand];
        console.log(chosenWord);
        //Takes the index chosen, and removes it from the array
        // this.words.splice(rand, 1);
        console.log(words);

        console.log(chosenWord);
        console.log(chosenWord.length)

        displayWord = new Array(chosenWord.length).fill("_");

        

         
        console.log(displayWord);
        
        
        
        //remove it from the words array
        //if no words left congrats you finished! refresh to start again.
    };

     var updateDisplay = function(){
 
        var html = "<p>You chose: " + displayWord.join(" ") + "</p>";

      // Set the inner HTML contents of the #game div to our html string
      document.getElementById("game").innerHTML = html;

    };  


   var  matchedLetter =  function(){
        //Is the letter guessed in the word?
        //If it is
            //Reveal it in the word
            //Add to gussed letters

        //If it's not
            //remainingGueses -1
            //push letter into guessed Letters array
    };

    var revealLetter = function(){
        // find where the letter goes,
        // reveal it,
        //add letter to gussed letters
    };

    var addToGuessedLetters = function(){
        // add guessed letter to guessedLetters
    };

    var gameEnd = function() {
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

    };
// document.onkeyup = function (event) {
//     //matchedLetter

// }