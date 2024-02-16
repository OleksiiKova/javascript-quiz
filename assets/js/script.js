let questions = [{
        question: "Where is the correct place to insert a JavaScript?",
        answers: ["Both the \< head> section and the \< body> section are correct", "The \< body> section", "The \< head> section"],
        correct: 1,
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
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: ["\< script href='xxx.js'>", "\< script name='xxx.js'>", "\< script src='xxx.js'>"],
        correct: 3,
    },
];

let score = 0;
let questionNumber = 0;

const quizQuestion = document.querySelector(".quiz-question");
const listAnswers = document.querySelector(".quiz-answers-list");
const resultsContainer = document.querySelector(".results_container");
const submitBtn = document.querySelector(".quiz-button-submit");
const resetBtn = document.querySelector(".quiz-button-reset");
const popupChooseAnswer = document.querySelector(".popup-choose-answer");


clearHtml()
showQuestion()
increaseQuestionOf();
submitBtn.onclick = checkAnswer;
resetBtn.onclick = function () {
    if (confirm("Are you sure? All the progress will be lost!")) {
        history.go()
    } else {
        return
    }
};

function clearHtml() {
    quizQuestion.innerHTML = "";
    listAnswers.innerHTML = "";
    resultsContainer.innerHTML = "";
};

function showQuestion() {
    // Create variable with question
    const questionTemplate = `<h2 class = "quiz-title">%question%</h2>`;
    const questionTitle = questionTemplate.replace('%question%', questions[questionNumber]["question"])
    quizQuestion.innerHTML = questionTitle;

    // Create variable with answers
    for ([index, item] of questions[questionNumber]["answers"].entries()) {
        const answersTemplate =
            `<li class="quiz-answers-item">
                <label>
                    <input value="%num%" type="radio" name="quiz-answers" />
                    %answer%
                </label>
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
        showChooseAnswer();

        // Hide pop-up window with text Choose answer
        document.querySelector(".modal-choose-answer-btn").onclick = hideChooseAnswer;     
        document.querySelector(".close-btn").onclick = hideChooseAnswer;
        
    };

    // Get the user's answer
    let userAnswer = parseInt(checkedRadio.value);

    let correctAnswer = questions[questionNumber]['correct'];

    // Compare user's and correct answers
    if (userAnswer === correctAnswer) {
        score++;
        document.querySelector(".score-correct-answer").innerHTML = score;
    }

    // Check is this the last question? 
    if (questionNumber !== questions.length - 1) {
        questionNumber++;
        clearHtml();
        showQuestion();
        increaseQuestionOf();
    } else {
        clearHtml();
        showResults();
    };
}

function showResults() {
    document.querySelector(".block-score-questionof").outerHTML = " ";
    document.querySelector(".quiz-answers").outerHTML = " ";
    document.querySelector(".quiz-button-reset").outerHTML = " ";
    document.querySelector(".quiz-buttons").className += ' play-again';

    let resultsTemplate = `
        <h2 class="results-title">%title%</h2>
        <h3 class="results-message">%message%</h3>
        <p class="results-score" >%result%</p>
        `;

    // Answer options based on test results
    let title, message;
    if (score === questions.length) {
        title = 'Congratulations!';
        message = "You've answered all the questions correctly!";
    } else if ((score * 100) / questions.length >= 50) {
        title = 'Well done!';
        message = "You have good knowledge about JS!";
    } else if ((score * 100) / questions.length >= 30) {
        title = 'Not bad...';
        message = 'But, there is still lots of space for improvement!';
    } else {
        title = 'Don\'t be upset...';
        message = 'Learn the theory and try again!';
    };

    let result = `Correct ${score} of ${questions.length} answers!`;

    let resultsMessage = resultsTemplate
        .replace('%title%', title)
        .replace('%message%', message)
        .replace('%result%', result)

    resultsContainer.innerHTML = resultsMessage;

    submitBtn.innerText = "Play again";
    submitBtn.onclick = function () {
        history.go()
    };
}

function showChooseAnswer() {
    popupChooseAnswer.className += " popup-visible"; 
}

function hideChooseAnswer() {
    popupChooseAnswer.classList.remove("popup-visible");
}