var wordArr = ["Queen","Led Zeppelin","The Rolling Stones","The Who","Aerosmith","Allman Brothers","Def Leppard","ACDC","Guns N Roses","Jay and the Americans","The Beatles"];

var activeWord = wordArr[Math.floor(Math.random()*wordArr.length)];

var answerArr = []
    for (var i = 0; i < activeWord.length; i++) {
        answerArr.push("_");

var letsLeft = activeWord.length

var guess

var rightGuess = [];

var wrongGuess = [];

var lives = 7;

var wins = 0

document.getElementById("winCounter").innerHTML = wins;

document.onkeyup = function(event) {
    guess = event.key;
    for (var x = 0; x < activeWord.length; x++) {
        if(activeWord[x] === guess) {
            if(answerArray [x] !== guess) {
            letsLeft--;
            }
        answerArr[x] = guess;
        document.getElementById("guessingArea").innerHTML = answerArr.join(" ");
        }
        
        if (answerArr.includes(guess))
}


function begin() {


    document.getElementById("guessingArea").innerHTML = rightGuess.join(" ");
    document.getElementById("guessesLeft").innerHTML = lives
}

begin();

