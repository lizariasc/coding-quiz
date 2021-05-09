 // The array of questions for the  quiz

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
 


  
  
    // If I click Start Quiz I am presented with the first question
    // A footer shows up telling me if my answer was correct or not
    // If I answer incorrectly 10 seconds are subtracted from the timer
    // When I finish the questions, I can enter my initials
    // I can store and look up high scores
    // Go back to the beggining 
   }