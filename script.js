var i = 0;
var score = 0;
var secondsLeft = 60;
var timeEl = document.querySelector("#time")
var messageEl = document.querySelector("#message")
var storedScores;
var scoreList = [];
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");

// Set timer for quiz and alert user when time has ran out. Used example from 08-Ins_Timers-Intervals
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Timer " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        alert("Sorry, you are out of time")
        questionEnder();
      }

      else if (i === questions.length) {
        clearInterval(timerInterval);
      }
    }, 1000);
    return (score)
  }
  


