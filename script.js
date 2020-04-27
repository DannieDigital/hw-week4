$(document).ready(function(){
  $("#buttonDiv").click(function(){
    $(this).hide();
    $(".rules").hide();

});
 
});


var startQuiz = document.getElementById("buttonDiv");
var questionOne = document.getElementById("questionOne");
var quizRules = document.getElementById("rules");

$(startQuiz).on("click", questions);
$(questionOne).on("click", questions);
$(questionTwo).on("click", questions);
$(answerBtn).on("click", questions);

 function questions (){ 
if (questionOne.className === "hide" ){
    questionOne.className="";
  } 
}

// functions for question one 
  $(function(){
  $(".rightAnswer").click(function(){
    document.getElementById("results").innerHTML ="Correct!";
    if (".rightAnswer"){
      setTimeout(function() { $("#questionOne").hide(); }, 2000);
     
    } 
    
      
  });
});
  
$(function(){
  $(".rightAnswer").click(function(){
    document.getElementById("results").innerHTML ="Correct!";
    if (".rightAnswer"){
      setTimeout(function() { $(".hideTwo").show(); }, 2000); 
    } 
      
  });
});

$(function(){
  $(".wrongAnswer").click(function(){
    document.getElementById("results").innerHTML ="Wrong!";
    if (".wrongAnswer"){
      setTimeout(function() { $("#questionOne").hide(); }, 2000);
     
    } 
  });
});

$(function(){
  $(".wrongAnswer").click(function(){
    document.getElementById("results").innerHTML ="Wrong!";
    if (".wrongAnswer"){
      setTimeout(function() { $(".hideTwo").show(); }, 2000); 
    } 
      
  });
});

// Functions for question two

$(function(){
  $(".rightAnswerTwo").click(function(){
    document.getElementById("results").innerHTML ="Correct!";
    if (".rightAnswerTwo"){
      setTimeout(function() { $("#questionTwo").hide(); }, 2000);
    } 
  });
});
  
$(function(){
  $(".rightAnswerTwo").click(function(){
    document.getElementById("results").innerHTML ="Correct!";
    if (".rightAnswerTwo"){
      setTimeout(function() { $(".hideThree").show(); }, 2000); 
    } 
      
  });
});

$(function(){
  $(".wrongAnswerTwo").click(function(){
    document.getElementById("results").innerHTML ="Wrong!";
    if (".wrongAnswerTwo"){
      setTimeout(function() { $("#questionTwo").hide(); }, 2000);
     
    } 
  });
});

$(function(){
  $(".wrongAnswerTwo").click(function(){
    document.getElementById("results").innerHTML ="Wrong!";
    if (".wrongAnswerTwo"){
      setTimeout(function() { $(".hideThree").show(); }, 2000); 
    } 
      
  });
});

// Functions for question three

$(function(){
  $(".rightAnswerThree").click(function(){
    document.getElementById("results").innerHTML ="Correct!";
  });
});
  
$(function(){
  $(".wrongAnswerThree").click(function(){
    document.getElementById("results").innerHTML ="Wrong!";
    
  });
});

// Timer
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

// //create a variable that hold the questions section from the html
// var quizQuestions = document.querySelector("#quiz")

// var quiz = [
//   {
//     q: "HTML stand for:",
//     choices: ["How To Meet Ladies", "Holy Turkey Monkey Language", "Hyper Text Markup Language", "Hyper Touch Markup Language"],
//     a: "Hyper Text Markup Language", },

//   {  q: "CSS means:",
//     choices: ["Cute Sandy Storm", "Cascading Style Sheet", "Candy Sugar & Spice", "Country Style Steak"],
//     a: "Cascading Style Sheet"
//   },  

//   {  q: "This symbol => is a ",
//     choices: ["Javascript Function", "Equal to but greater than", "It is a symbol", "XML symbol"],
//     a: "Javascript Function"
//   },  
  
// ]


// // We start the game with a score of 0.
// var score = 0;
// function startQuiz(quiz) {
//   for (var i = 0; i < quiz.length; i++) {

//     // Each time we print the value inside the array.
//    var answer = console.log(quiz[i].q);

//     if ((quiz[0].a === "Hyper Text Markup Language" )) {
//       score++;
//       // will change to document.write
//         console.log("Correct!");

//   }

//   else {
//     score--;
//     console.log("Wrong!");
//   }

//   if ((quiz[1].a === "Cascading Style Sheet" )) {
//       score++;
//         console.log("Correct!");

//   }

//   else {
//     score--;
//     console.log("Wrong!");
//   }

//   if ((quiz[2].a === "Javascript Function" )) {
//     score++;
//       console.log("Correct!");

// }

// else {
//   score--;
//   console.log("Wrong!");
// }


// }
// }

// startQuiz(quiz)

