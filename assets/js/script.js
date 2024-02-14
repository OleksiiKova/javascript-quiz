let questions = [{
        question: "Where is the correct place to insert a JavaScript?",
        answers: ["Both the \< head> section and the \< body> section are correct", "The \< body> section", "The \< head> section"],
        correct: 1,
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: ["\< script href='xxx.js'>", "\< script name='xxx.js'>", "\< script src='xxx.js'>"],
        correct: 3,
    },
    {
        question: "The external JavaScript file must contain the \< script> tag.",
        answers: ["True", "False"],
        correct: 2,
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: ["function = myFunction()", "function myFunction()", "function: myFunction()"],
        correct: 2,
    },
    {
        question: "How does a WHILE loop start?",
        answers: ["while (i <= 10; i++)", "while (i <= 10)", "while i = 1 to 10"],
        correct: 2,
    },
    {
        question: "How does a FOR loop start?",
        answers: ["for(i <= 5; i++)", "for(i = 0, i <= 5, i++)", "for(i = 0; i <= 5; i++)", "for(i = 0, i <= 5)"],
        correct: 3,
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: [
            "var colors = (1:'red', 2:'green', 3:'blue')",
            "var colors = 'red', 'green', 'blue'",
            "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
            "var colors = ['red', 'green', 'blue']"
        ],
        correct: 4,
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        answers: ["math.Round(7.25)", "round(7.25)", "Math.rnd(7.25)", "Math.round(7.25)"],
        correct: 4
    },
    {
        question: "Is JavaScript case-sensitive?",
        answers: ["Yes", "No"],
        correct: 1,
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: ["onclick", "onmouseover", "onmouseclick", "onchange"],
        correct: 1,
    },
];

let score = 0;
let questionNumber = 0;

const quizQuestion = document.querySelector(".quiz-question");
const listAnswers = document.querySelector(".quiz-answers-list");
const submitBtn = document.querySelector(".quiz-button-submit");
const resetBtn = document.querySelector(".quiz-button-reset");

clearHtml()
showQuestion()
increaseQuestionOf()
submitBtn.onclick = checkAnswer; 

function clearHtml() {
    quizQuestion.innerHTML = "";
    listAnswers.innerHTML = "";
}

function showQuestion() {
    // Create variable with question
    const questionTemplate = `<h2 class = "quiz-title">%question%</h2>`;
    const questionTitle = questionTemplate.replace('%question%', questions[questionNumber]["question"])
    quizQuestion.innerHTML = questionTitle;

    // Create variable with answers
    for ([index, item] of questions[questionNumber]["answers"].entries()) {
        const answersTemplate =
            `<li class="quiz-answers-item">
                <input value="%num%" type="radio" name="quiz-answers" />
                %answer%
            </li>`;
        let answerText = answersTemplate
                            .replace('%answer%', item)
                            .replace('%num%', index + 1);
        listAnswers.innerHTML += answerText;
    }
}

function increaseQuestionOf() {
    let quizQuestionOf = document.querySelector(".quiz-question-of");
    let numberOfQuestion = questionNumber + 1;
    quizQuestionOf.innerHTML = `Question ${numberOfQuestion} of ${questions.length}`;
}

function checkAnswer() {
    let checkedRadio = listAnswers.querySelector("input:checked");

    // If an answer is not selected the function exits
    if (!checkedRadio) {
        alert("Select answer");
        return    
    };
    
    // Get the user's answer
    let userAnswer = parseInt(checkedRadio.value);

    
}
