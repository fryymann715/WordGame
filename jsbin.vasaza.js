
// A function to get the set of possible letters
function getLetters() {
  // Select the element with the id 'letters'
  var lettersContainer = document.querySelector('#letters');

  // Get the text content of the element
  var letters = lettersContainer.innerText;

  // Return the letters
  return letters;
}

// A function to get the user's guess
function getGuess() {
  // Select the input element where the user enters their guess
  var wordGuess = document.querySelector('input#word-guess');

  // Get the text content of the element
  var guess = wordGuess.value;

  // Return the guess
  return guess;
}

// A function to display a message on the screen
function showMessage(messageText) {
  // Select the element to display a message
  var messageElem = document.querySelector('#game-message');

  // Set the text value of the element to the provided text
  messageElem.innerText = messageText;
}


// A function to check whether the guessed word is correct or not
function checkGuess() {
  // Collect the text from the letters and the guess
  var letters = getLetters();
  var guess = getGuess();

  // Convert both to uppercase so we can compare equals
  guess = guess.toUpperCase();
  letters = letters.toUpperCase();

  // Determine if all the characters in the guess are in the letters
  for (var i = 0; i < guess.length; i++) {
    var currentChar = guess[i];

    // If the current character can't be found in letters, the guess is incorrect
    if (letters.indexOf(currentChar) === -1) {
      // Show a message saying guess is incorrect
      showMessage("Wrong guess, try again.");
      
      // Return false to exit the function 
      
      var losses = Number(document.querySelector('#number-of-losses').innerHTML);
      losses++;
      document.querySelector('#number-of-losses').innerHTML = losses;
      return false;
    }
    
  }

  // If we've made it this far, then the guess must be correct!
  // Show a message saying guess is correct
  showMessage("Good guess, that is correct!");
  // Return true to exit the function
 

  // Determine score of guess
  
  var currentScore = Number(document.querySelector('#player-score').innerHTML);
  var newScore = 0;
  
  var guessArray = guess.split("");
  
  for (var l in guessArray) {
    
    switch (guessArray[l]) {
    
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        
      newScore += 2;
      break;
    
    case "Q":
    case "X":
    case "Z":
        
      newScore+= 8;
      break;
      
    default: newScore += 1;
    }
    
  }
  showMessage("Points: " + newScore);
  currentScore += newScore;
  
  
  console.log("New score: " + newScore);
  document.querySelector('#player-score').innerHTML = currentScore;
    
  
  var wins = Number(document.querySelector('#number-of-wins').innerHTML);
  wins++;
  document.querySelector('#number-of-wins').innerHTML = wins;
  return true;
}


function updateLetters() {
  document.querySelector('#letters').innerHTML = randomLetters();
  
}

function randomLetters() {  
  var cnstnts = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var vowels = "AEIOU";
  var text = "";
  var numOfLetters = document.querySelector("select#number-of-letters").value;
  numOfLetters -= 2;
  
  for (var i=0; i<numOfLetters; i++)
    text += cnstnts.charAt(Math.floor(Math.random() * cnstnts.length));
  
  
  for (i=0; i<2; i++)
    text += vowels.charAt(Math.random() * vowels.length);
  
  console.log(changeNumberOfLetters());
  return text;
  
}

function changeNumberOfLetters(){
  return document.querySelector("select#number-of-letters").value;
 
}

function shuffle(currentLetters) {
  var array = currentLetters.split("");
  
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  
  var shuffled = array.join("");
  document.querySelector('#letters').innerHTML = shuffled;
  return shuffled;
  
 
    
  
}
