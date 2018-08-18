    var wins = 0;
    var words =["wheelbarrow", "friction", "companionship"];
    var chosenWord =[];
    var guessedLetters = [];
    var displayWord = [];
    var remainingGuesses = 20;
    var isGameStart = false;
    var isGameFinished = false;

      // Set the inner HTML contents of the #game div to our html string

   var gameSetup = function () {

        var displayWord = [];
        var remainingGuesses = 20;
        var isGameFinished = false;

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
 
        var html = "<p>Guess This Word: " + displayWord.join(" ") + "</p>" +
                   "<p>Guessed Letters: " + guessedLetters + "</p>" +
                   "<p>Guesses Remaining: " + remainingGuesses + "</p>" +
                   "<p>Games Won: " + wins + "</p>" ;

        

      // Set the inner HTML contents of the #game div to our html string
      document.getElementById("game").innerHTML = html;

    };  


   var  playerGuess =  function(letter){

       if(guessedLetters.indexOf(letter) === -1){
            addToGuessedLetters(letter);
            revealLetter(letter);
            remainingGuesses--;
       }
       checkGameStatus();
       updateDisplay();



    
        //Is the letter guessed in the word?
        //If it is
            //Reveal it in the word
            //Add to gussed letters

        //If it's not
            //remainingGueses -1
            //push letter into guessed Letters array
    };

    var revealLetter = function(letter){

        for(var i = 0; i<= chosenWord.length; i++){
            if(chosenWord[i] === letter){
                displayWord.splice(i,  1, letter);
            }
                // find where the letter goes,
                    // add to displayWord at the correct index


        }
    };

    var addToGuessedLetters = function(letter){
        guessedLetters.push(letter);
        // add guessed letter to guessedLetters
    };

    var checkGameStatus = function() {
        //if all letters have been gussed and remaining guesses != 0

        if(displayWord.indexOf("_") === -1 && remainingGuesses > 0){
            gameWin();
            console.log("yay you win");
        }
        else if(remainingGuesses <= 0){
            console.log("Sorry you lose");
        }

    };


    var gameWin = function() {
        // wins +1 
        //restart game gameSetup()
        wins++;
        isGameFinished = true;

    }

    var gameLoss = function() {

        isGameFinished = true;
        //display something
        
    }

    document.onkeyup = function (event) {
        if(isGameStart = false){
            isGameStart = true;
        }
        
        playerGuess(event.key.toLowerCase());
    }


