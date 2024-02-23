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
 
];

let score = 0;
let questionNumber = 0;

const quizQuestion = document.querySelector(".quiz-question");
const listAnswers = document.querySelector(".quiz-answers-list");
const resultsContainer = document.querySelector(".results_container");
const resetBtn = document.querySelector(".quiz-button-reset");
const popupChooseAnswer = document.querySelector(".popup-choose-answer");
const nextBtn = document.querySelector(".quiz-button-next");






//     function () {
//     if (confirm("Are you sure? All the progress will be lost!")) {
//         history.go()
//     } else {
//         return
//     }
// };

function clearHtml() {
    quizQuestion.innerHTML = "";
    listAnswers.innerHTML = "";
    resultsContainer.innerHTML = "";
    // if (document.querySelector(".quiz-button-next")) {
    //     document.querySelector(".quiz-button-next").classList.add('hidden')
    // };
    document.querySelector(".quiz-buttons").classList.remove('show-easy');
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
        // Show pop-up window with text "Select answer"
        showChooseAnswer();
        if (document.querySelector('.sound-off').classList.contains("hidden")) {
            playNotificationSound();
            };
        // Hide pop-up window with text Choose answer
        document.querySelector(".modal-choose-answer-btn").onclick = hideChooseAnswer;
        document.querySelector(".close-btn").onclick = hideChooseAnswer;

    };

    // Get the user's answer
    let userAnswer = parseInt(checkedRadio.value);
    let correctAnswer = questions[questionNumber]['correct'];

    // Add disabled attribute to the inputs after press submit
    document.querySelectorAll('input[type="radio"]').forEach(function (disableRadioButton) {
        disableRadioButton.disabled = true;
    });

    // Add animation after press submit
    document.querySelector(".selected").className += " selected-blink";
    setTimeout(() => {
        document.querySelector(".selected").classList.remove("selected-blink");
        document.querySelector(".score-correct-answer").innerHTML = score;
        document.querySelector(".quiz-button-next").classList.remove('hidden');
        document.querySelector(".quiz-button-reset").classList.remove('hidden');
        document.querySelector(".quiz-buttons").classList.add('show-easy');
    }, 1500);

    // Compare user's and correct answers
    if (userAnswer === correctAnswer) {
        score++;
        document.querySelector(".selected").classList.add("selected-correct");
        setTimeout(() => {
            if (document.querySelector('.sound-off').classList.contains("hidden")) {
                playCorrectSound();
            };
        }, 1200);

    } else {
        setTimeout(() => {
            document.querySelector(".selected").classList.add("selected-wrong");
            let correctInput = document.querySelector('input[value="' + correctAnswer + '"]');
            correctInput.parentNode.parentNode.classList.add('selected-correct');

            if (document.querySelector('.sound-off').classList.contains("hidden")) {
                playWrongSound();
            };
        }, 1500);
    };

    nextBtn.classList.add('hidden');
    resetBtn.classList.add('hidden');

    // Check is this the last question? 
    if (questionNumber !== questions.length - 1) {
        questionNumber++;
        nextBtn.onclick = function () {
            clearHtml();
            showQuestion();
            increaseQuestionOf();
            selectedRadio();
            selectAnswer();
        };
    } else {
        setTimeout(() => {
            document.querySelector(".quiz-button-reset").classList.remove('hidden');
            nextBtn.outerHTML =
                `
                <button class="quiz-button-finish" type="button">
                 Get results
                </button>
                `
            document.querySelector(".quiz-button-finish").onclick = function () {
                clearHtml();
                showResults();
            }
        }, 1500);
    };
};


function showResults() {
    document.querySelector(".block-score-questionof").outerHTML = " ";
    document.querySelector(".quiz-answers").outerHTML = " ";
    document.querySelector(".quiz-button-reset").outerHTML = " ";
    document.querySelector(".quiz-buttons").className += ' play-again';
    // document.querySelector(".quiz-button-finish").outerHTML = " ";

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

    document.querySelector(".quiz-button-finish").innerText = "Play again";
    document.querySelector(".quiz-button-finish").onclick = function () {
        history.go()
    };
};


// Pop-up choose answer
function showChooseAnswer() {
    popupChooseAnswer.className += " popup-visible";
};

function hideChooseAnswer() {
    popupChooseAnswer.classList.remove("popup-visible");
};

// Pop-up are you sure to start again
document.querySelector(".modal-start-again-btn-cancel").onclick = hideStartAgain;
document.querySelector(".close-btn-again").onclick = hideStartAgain;
document.querySelector(".modal-start-again-btn-ok").onclick = restart;

function restart() {
    location.reload();
}

function showStartAgain() {
    document.querySelector(".popup-start-again").className += " popup-visible";
    if (document.querySelector('.sound-off').classList.contains("hidden")) {
            playNotificationSound();
            };
};

function hideStartAgain() {
    document.querySelector(".popup-start-again").classList.remove("popup-visible");
};

function selectedRadio() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener("change", function () {
            removeClassFromAll();
            if (this.checked) {
                this.parentNode.parentNode.classList.add("selected");
            }
            checkAnswer();
        });
    });

    function removeClassFromAll() {
        radioButtons.forEach(function (radioButton) {
            radioButton.parentNode.parentNode.classList.remove("selected");
        });
    }
};

function playWrongSound() {
    let wrongSound = document.getElementById('wrong');
    wrongSound.play()
};

function playCorrectSound() {
    let correctSound = document.getElementById('correct');
    correctSound.play()
};

function playNotificationSound() {
    let notificationSound = document.getElementById('notification');
    notificationSound.play()
};



let muteOff = document.querySelector('.sound-off');
let muteOn = document.querySelector('.sound-on');
muteOff.onclick = soundOn;
muteOn.onclick = soundOff;

function soundOn() {
    muteOff.classList.add('hidden');
    muteOn.classList.remove('hidden');
};

function soundOff() {
    muteOn.classList.add('hidden');
    muteOff.classList.remove('hidden');
};

clearHtml()
showQuestion()
increaseQuestionOf();
selectedRadio();
resetBtn.onclick = showStartAgain;
selectAnswer();

function selectAnswer() {
nextBtn.onclick = function () {
    let checkedRadio = listAnswers.querySelector("input:checked");

    // If an answer is not selected the function exits
    if (!checkedRadio) {
        // Show pop-up window with text "Select answer"
        showChooseAnswer();
        if (document.querySelector('.sound-off').classList.contains("hidden")) {
            playNotificationSound();
            };
        // Hide pop-up window with text Choose answer
        document.querySelector(".modal-choose-answer-btn").onclick = hideChooseAnswer;
        document.querySelector(".close-btn").onclick = hideChooseAnswer;

    };
    }
};