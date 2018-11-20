var wordArr = ["queen","ledzeppelin","therollingstones","thewho","aerosmith","allmanbrothers","defleppard","acdc","beatles"];

var activeWord = wordArr[Math.floor(Math.random()*wordArr.length)];

var answerArr = []
    for (var i = 0; i < activeWord.length; i++) {
        answerArr[i] = ("_");

var letsLeft = activeWord.length

var guess

var rightGuess = [];

var wrongGuess = [];

var lives = 7;

var wins = 0

document.getElementById("winCounter").innerHTML = wins;

document.getElementById("guessingArea").innerHTML = answerArr.join(" ")

document.onkeyup = function(event) {
    guess = event.key;
    
    if (lives == 1) {
        alert("You lose! The correct answer was " + activeWord)
    }
    
    else {
    for (var x = 0; x < activeWord.length; x++) {
        if(activeWord[x] === guess) {
        answerArr[x] = guess;
        console.log(answerArr[x])
        document.getElementById("guessingArea").innerHTML = answerArr.join(" ");        
        console.log(activeWord[x])}
        }}
        
        if(answerArr.includes(guess)==false) {
        lives--}
        document.getElementById("guessesLeft").innerHTML = lives;
        document.getElementById("wrongGuess").innerHTML = wrongGuess.join(" ") 
    }


document.getElementById("wrongGuess").innerHTML = wrongGuess.join(" ")


begin()}

function begin() {


    document.getElementById("guessingArea").innerHTML = rightGuess.join(" ");
    document.getElementById("guessesLeft").innerHTML = lives
}