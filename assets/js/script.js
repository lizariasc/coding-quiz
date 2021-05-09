
// HTML elements
var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-score");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

// Questions 
var quizQuestions = [{
    question:"The \"function\" and \"var\" are known as:",
    choiceA: "Declaration statements",
    choiceB: "Keywords",
    choiceC: "Data types",
    choiceD: "Prototypes",
    correctAnswer: "a"},
  {
    question: "What is the correct syntax of the following variable?",
    choiceA: "var (Name = 'Tony the Robot');",
    choiceB: "var = name ('Tony the Robot')",
    choiceC: "var name = 'Tony the Robot';",
    choiceD: "var Name = 'Tony the Robot'",
    correctAnswer: "c"},
   {
    question: "Which one of the following operators returns false if both values are equal?",
    choiceA: "!",
    choiceB: "!=",
    choiceC: "!==",
    choiceD: "All of the above",
    correctAnswer: "b"},
    {
    question: "Inside which HTML element do we put the JavaScript?",
    choiceA: "&lt;script&gt;",
    choiceB: "&lt;link&gt;",
    choiceC: "&lt;head&gt;",
    choiceD: "&lt;meta&gt;",
    correctAnswer: "a"},
    {
    question: "Which of the following is the correct syntax to display 'Almost there!' in an alert box?",
    choiceA: "alert-box('Almost done!');",
    choiceB: "confirm('Almost done!');",
    choiceC: "msg-box('Almost done!');",
    choiceD: "alert('Almost done!');",
    correctAnswer: "d"},  
    ];

var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var count = 76;
var timerInterval;
var score = 0;
var penalty = 10;
var correct;

// Generate a question with answers
function generateQuizQuestion(){
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    } 
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<h2>" + currentQuestion.question + "</h2>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

// Make the Start Quiz button work and present the first question
function startQuiz(){
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

    // Start the timer
    timerInterval = setInterval(function() {
        count--;
        quizTimer.textContent = "Time: " + count;
    
        if(count === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
    quizBody.style.display = "block";
}
// After completing the questions or when the time is up, I am presented with my final score
function showScore(){
  quizBody.style.display = "none"
  gameoverDiv.style.display = "flex";
  clearInterval(timerInterval);
  highscoreInputName.value = "";
  finalScoreEl.innerHTML = "All done! Your final score is " + score + ".";
}
// On click of the submit button, we run the function highscore that saves and stringifies the array of high scores already saved in localStorage
// We push the user initials and score into the array we are saving in localStorage. 
submitScoreBtn.addEventListener("click", function highscore(){
  
  
  if(highscoreInputName.value === "") {
      alert("Initials cannot be blank. Please enter your initials.");
      return false;
  }else{
      var savedHighscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
      var currentUser = highscoreInputName.value.trim();
      var currentHighscore = {
          name : currentUser,
          score : score
      };
  
      gameoverDiv.style.display = "none";
      highscoreContainer.style.display = "flex";
      highscoreDiv.style.display = "block";
      endGameBtns.style.display = "flex";
      
      savedHighscores.push(currentHighscore);
      localStorage.setItem("savedHighscores", JSON.stringify(savedHighscores));
      generateHighscores();

  }
  
});

// Generate a new list from data saved in from localStorage
function generateHighscores(){
  highscoreDisplayName.innerHTML = "";
  highscoreDisplayScore.innerHTML = "";
  var highscores = JSON.parse(localStorage.getItem("savedHighscores")) || [];
  for (i=0; i<highscores.length; i++){
      var newNameSpan = document.createElement("li");
      var newScoreSpan = document.createElement("li");
      newNameSpan.textContent = highscores[i].name;
      newScoreSpan.textContent = highscores[i].score;
      highscoreDisplayName.appendChild(newNameSpan);
      highscoreDisplayScore.appendChild(newScoreSpan);
  }
}

// Display the High scores page hiding all the other pages
function showHighscore(){
  startQuizDiv.style.display = "none"
  gameoverDiv.style.display = "none";
  highscoreContainer.style.display = "flex";
  highscoreDiv.style.display = "block";
  endGameBtns.style.display = "flex";

  generateHighscores();
}


// Check if the answer is correct or incorrect
function checkAnswer(answer){
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        alert("Correct!");
        currentQuestionIndex++;
        generateQuizQuestion();
        //display in the results div that the answer is correct.
    } else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex) {
        // If incorrect, subtract 10sec from timer
        count = count - penalty;
        alert("Incorrect!")
        currentQuestionIndex++;
        generateQuizQuestion();
        //display in the results div that the answer is wrong.
    } else{
        showScore();
    }
}

// This button starts the quiz!
startQuizButton.addEventListener("click",startQuiz);