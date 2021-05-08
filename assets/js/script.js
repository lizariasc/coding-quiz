
var startButton = document.querySelector("#start-btn");

// Make the Start Quiz button start the timer
startButton.addEventListener("click", startTimer()); 

function startTimer () {
var counter = 75;
setInterval(function() {
    counter--;
    if (counter >=0) {
        span = document.getElementById("count");
        span.innerHTML = counter;
    }
    if (counter === 0) {
        alert("Sorry, out of time");
        clearInterval(counter);
    }
 }, 1000);
};

 // The array of questions for the  quiz

var questions = [
  {
     question:"The \"function\" and \"var\" are known as:",
     answers: {
        a: "Declaration statements",
        b: "Keywords",
        c: "Data types",
        d: "Prototypes"
        },
          correctAnswer: "a"
        },
        {
     question:"What is the correct syntax of the following variable?",
     answers: {
        a: "var (PlayerName = 'Tony the Robot');",
        b: "var = PlayerName ('Tony the Robot')",
        c: "var playerName = 'Tony the Robot';",
        d: "var playerName = 'Tony the Robot'"
        },
          correctAnswer: "c"
        },
    {
     question: "Which one of the following operator returns false if both values are equal?",
    answers: {
        a: "!",
        b: "!=",
        c: "!==",
        d: "All of the above"
          },
          correctAnswer: "b"
        },
    {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: {
       a: "<script>",
       b: "<head>",
       c: "<meta>",
       d: "<style>"
         },
         correctAnswer: "a"
     },
     {
    question: "Which of the following is the correct syntax to display 'Almost there!' in an alert box using JavaScript?",
    answers: {
        a: "alert-box('Almost done!');",
        b: "confirm('Almost done!');",
        c: "msg-box('Almost done!');",
        d: "alert('Almost done!');"
          },
          correctAnswer: "d"
     }
    ];

    // Show questions
    function ShowQuestion() {
        
    }



