
    $(document).ready(function() {

    // VARIABLES
    // ====================================================================

      var winCounter = 0;
      var losesCounter = 0;
      var guessesLeftCounter = 10;
      var guessesDisplay = "";


      //This is for the letters the computer will use
      var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

      //Computer Answers, have it get a random number
      var answer;
      var randomNumber = getRandomLetter();
      answer = letters[Math.floor(randomNumber)];
      console.log(answer);

      // FUNCTIONS

      //function to have computer generate random letter each time the game starts
      function getRandomLetter() {
        return Math.random() * (25 - 0) + 0;
      }

      //Create an on function for the user to choose a letter on the keyboard and it to display under guesses

      document.addEventListener('keypress', (event) => {
        //keyName is the user pushing down on the key

         //for (var i=0; i < guessesLeftCounter; i++){}

        var keyName = event.key;
        //if the key pushed is equal to the random letter generated
         if (keyName.toLowerCase() == answer.toLowerCase()) {
          //then the win counter will go up by 1
          winCounter++;
          //make the wins html text stay intackt and numbercal value be shown next to it
          document.getElementById("wins").innerHTML = winCounter;
          randomNumber = getRandomLetter();
      		answer = letters[Math.floor(randomNumber)];
      			console.log(answer);
      			guessesLeftCounter = 10;
      			guessesDisplay = "";
        } 

        //if the key pushed is not the random letter the computer generated then the guesses left counter goes down by 1
        var keyName = event.key;
          if (keyName.toLowerCase() != answer.toLowerCase()) {
          guessesLeftCounter--;
          document.getElementById("guessesLeft").innerHTML = guessesLeftCounter;
          	if (guessesLeftCounter == 0) {
          		losesCounter++;
          		document.getElementById("loses").innerHTML = losesCounter;
          		randomNumber = getRandomLetter();
      			answer = letters[Math.floor(randomNumber)];
      			console.log(answer);
      			guessesLeftCounter = 10;
      			guessesDisplay = "";
          	}
          }
        
        
        //if the key pushed is not equal to the random letter generated display that letter next to the guesses html
        var keyName = event.key;
         if (keyName.toLowerCase() != answer.toLowerCase()) {
         	guessesDisplay = guessesDisplay + keyName + " , ";
          document.getElementById("guesses").innerHTML = guessesDisplay;


        }

      }); 

    });
