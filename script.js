
$(document).ready(function(){
  $("button").click(function(){
    $(this).hide();
    $(".rules").hide();

});
});


//create a variable that hold the questions section from the html
var quizQuestions = document.querySelector("#quiz")

var quiz = [
  {
    q: "HTML stand for:",
    choices: ["How To Meet Ladies", "Holy Turkey Monkey Language", "Hyper Text Markup Language", "Hyper Touch Markup Language"],
    a: "Hyper Text Markup Language", },

  {  q: "CSS means:",
    choices: ["Cute Sandy Storm", "Cascading Style Sheet", "Candy Sugar & Spice", "Country Style Steak"],
    a: "Cascading Style Sheet"
  },  

  {  q: "This symbol => is a ",
    choices: ["Javascript Function", "Equal to but greater than", "It is a symbol", "XML symbol"],
    a: "Javascript Function"
  },  
  
]


// We start the game with a score of 0.
var score = 0;
function startQuiz(quiz) {
  for (var i = 0; i < quiz.length; i++) {

    // Each time we print the value inside the array.
   var answer = console.log(quiz[i].q);

    if ((quiz[0].a === "Hyper Text Markup Language" )) {
      score++;
      // will change to document.write
        console.log("Correct!");

  }

  else {
    score--;
    console.log("Wrong!");
  }

  if ((quiz[1].a === "Cascading Style Sheet" )) {
      score++;
        console.log("Correct!");

  }

  else {
    score--;
    console.log("Wrong!");
  }

  if ((quiz[2].a === "Javascript Function" )) {
    score++;
      console.log("Correct!");

}

else {
  score--;
  console.log("Wrong!");
}


}
}

startQuiz(quiz)

var timerEl = document.querySelector("#time")
timerSeconds = setInterval(clockTick, 5000);

 
timerEl.textContent = timerSeconds;

function clockTick() {
   // update time
   time--;
   timerEl.textContent = time;
   // check if user ran out of time
   if (time <= 0) {
     quizEnd();
   }
 }