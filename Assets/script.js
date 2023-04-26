//________Query Selectors pull data from HTML___________________
const beginScreen = document.querySelector(".begin-screen");
const beginButton = document.getElementById("begin");
const restartButton = document.getElementById("restart");
const displayBox = document.getElementById("display-box");
const quizBox = document.getElementById("main-box");
const quizContent = document.getElementById("question-container");
const numberOfQuestions = document.querySelector(".num-of-questions");
const timeRemaining = document.querySelector(".time-remaining");
const highScore = document.getElementById("high-score");
const scoreContainer = document.querySelector(".score-box");
const playerScore = document.getElementById("your-score");
const questionPlace = document.getElementById("question");
const answerBox = document.getElementById('answer');
const answerBtn = document.getElementsByClassName('answer-btn');

//_________Global Vars__________________________________________
let numQuestion = 0;
let scoreCount = 0;
let timeLeft = 60;
let countdown;

//_________Quiz Array___________________________________________

const questionArray = [
    {
        question: "What does CSS FlexBox do?",
        options: [
            "Styles HTML elements",
            "Specifies how to position your JavaScript functions",
            "Nothing",
            "Specifies how to position and element",
        ],
        correct: 3,
    },
    {
        question: "What does HTML stand for?",
        options: [
            "HighText Markup Language",
            "HyperText Markdown Language",
            "HalfText Markup Language",
            "HyperText Markup Language",
        ],
        correct: 3,
    },
    {
        question: "What is the CSS property to specify the transparency of an element?",
        options: [
            "Opacity",
            "Filter",
            "Visibility",
            "Display",
        ],
        correct: 0,
    },
    {
        question: "Which of the following keywords is used to define a variable in JavaScript?",
        options: [
            "const",
            "let",
            "Both A and B",
            "Function",
        ],
        correct: 2,
    },
    {
        question: "How many sizes of headers are available in HTML by default?",
        options: [
            "3",
            "5",
            "2",
            "6",
        ],
        correct: 3,
    },
    {
        question: "When encountering and empty statement, what does JavaScrit do?",
        options: [
            "Throws an error",
            "Ignores the statement(s)",
            "Defines as undefined",
            "Nothing",
        ],
        correct: 1,
    },
    {
        question: "Which of the following are valid ways to represent colour in CSS?",
        options: [
            "HEX values",
            "Correct colour names",
            "RBG values",
            "All of the above",
        ],
        correct: 3,
    },
    {
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        options: [
            "stringify()",
            "Unable to serialize an object into a JSON string",
            "parse()",
            "join()",
        ],
        correct: 0,
    },    
]

//_________Trigger Start Button_________________________________
function startQuiz() {
    countdown = setInterval(updateTimer, 1000);
    beginScreen.classList.add("hide");
    displayBox.classList.remove("hide");
    showQuestions();
}


//_________Trigger Restart Button_______________________________
restartButton.addEventListener("click", () => {
    beginScreen.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

//_________Timer Countdown from 60s_____________________________
function updateTimer() {
    timeLeft--;
    timeRemaining.textContent = `${timeLeft}s remaining.`;
    if (timeLeft <= 0) {
        clearInterval(timeLeft);
        showScore();
    }
}

//_________Create Quiz__________________________________________
//_________Display Quiz Contaier________________________________
function showQuestions() {
        //places current question index to = 0 and loops to go through array of questions
    let currentQuestion = questionArray[numQuestion];
    questionPlace.innerHTML = currentQuestion.question;
        //Sets the buttons to show on current index, depending on array, and add event of click to button. (checks new function: answerSelected)
    for (let i = 0; i < answerBtn.length; i++) {
        answerBtn[i].innerHTML = currentQuestion.options[i];
        answerBtn[i].addEventListener("click", selectedAnswer);
    }
}

//_________Check True or False__________________________________
function selectedAnswer(e) {
    //To target parent element, which would be the question array list from showQuestions().
    let selectAnswer = e.target.textContent;
    let currentQuestion = questionArray[numQuestion];
    //Set the value of true and false. 
    if (selectAnswer !== currentQuestion.options[currentQuestion.correct]) {
        timeLeft-5;
    }
    //To move the index up  one after every answer. 
    numQuestion++;

//_________Check if array still has questions and if not end quiz_

if (numQuestion < questionArray.length) {
    showQuestions();
    } else {
        displayBox.classList.add("hide");
        scoreContainer.classList.remove("hide");
        showScore();
    }
}

function showScore() {
    //create a pop up alert to enter initials
    //show score by showing box and hiding quiz box

    //ask for input
    //ready arr from local (parsed)
    //if return == null - initalize new array
    //New object contain init + score
    //push ^ new object to new array or already parsed array
    //stringify array + Save to local storage
    //Iterate ver array and display highest scores 1-5;

    //restart brings back to beginScreen
}
//_________Create initial function for start button_____________
beginButton.addEventListener("click", startQuiz);

//_________Confirm display on high scores with local Storage____
