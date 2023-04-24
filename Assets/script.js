//________Query Selectors pull data from HTML___________________
let beginScreen = document.querySelector(".begin-screen");
let beginButton = document.getElementById("begin");
let nextButton = document.getElementById("next-button");
let restartButton = document.getElementById("restart").style.visibility = "hidden";
let displayBox = document.getElementById("display-box").style.visibility = "hidden";
let quizBox = document.getElementById("main-box");
let numberOfQuestions = document.querySelector(".num-of-questions");
let timeLeft = document.querySelector(".time-remaining");
let highScore = document.getElementById("high-score");
let scoreContainer = document.querySelector("score-box");
let playerScore = document.getElementById("your-score").style.visibility = "hidden";

//_________Global Vars__________________________________________
let numQuestion;
let scoreCount = 0;
let count = 61;
let countdown;

//_________Quiz Array___________________________________________

const questionArray = [
    {
        id: "0",
        question: "question 1?",
        options: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ],
        correct: "Correct Answer",
    },
    {
        id: "1",
        question: "question 2?",
        options: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ],
        correct: "Correct Answer",
    },
    {
        id: "2",
        question: "question 3?",
        options: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ],
        correct: "Correct Answer",
    },
    {
        id: "3",
        question: "question 4?",
        options: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ],
        correct: "Correct Answer",
    },
    {
        id: "4",
        question: "question 5?",
        options: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ],
        correct: "Correct Answer",
    },
    {
        id: "5",
        question: "question 6?",
        options: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ],
        correct: "Correct Answer",
    },
    {
        id: "6",
        question: "question 7?",
        options: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ],
        correct: "Correct Answer",
    },
    {
        id: "7",
        question: "question 8?",
        options: [
            "Option 1",
            "Option 2",
            "Option 3",
            "Option 4",
        ],
        correct: "Correct Answer",
    },    
]


//_________Trigger Start Button_________________________________


//_________Trigger Next Button__________________________________


//_________Trigger Restart Button_______________________________


//_________Timer Countdown from 60s_____________________________


//_________Display Quiz Contaier________________________________


//_________Create Quiz__________________________________________


//_________Check True or False__________________________________


//_________Create initial function for start button_____________


//_________Confirm display on high scores with local Storage____





