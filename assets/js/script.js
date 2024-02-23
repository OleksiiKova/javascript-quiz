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
    {
        question: "Which of the following is a server-side Java Script object?",
        answers: ["Function", "File", "FileUpload", "Date"],
        correct: 2,
    },
    {
        question: "Which of the below is used in Java script to insert special characters?",
        answers: ["&", "\\", "-", "%"],
        correct: 2,
    },
    {
        question: "How does Java Script store dates in objects of Date type?",
        answers: [
            "The number of days since January 1 st, 1900 ",
            "The number of seconds since January 1st, 1970",
            "The number of milliseconds since January 1st, 1970",
            "The number of picoseconds since January 1st, 1970"
        ],
        correct: 3,
    },
    {
        question: "JavaScript ignores extra spaces",
        answers: ["True", "False"],
        correct: 1,
    },
    {
        question: "Which is the correct way to write a JavaScript array?",
        answers: [
            "var txt = new Array(1:'arr',2:'kim',3:'jim')",
            "var txt = new Array:1=('arr')2=('kim')3=('jim')",
            "var txt = new Array('arr','kim','jim')",
            "var txt = new Array='arr', 'kim', 'jim'"
        ],
        correct: 3,
    },
    {
        question: "Which of the following is the tainted property of a window object in Java Script?",
        answers: ["Pathname", "Protocol", "Defaultstatus", "Host"],
        correct: 3,
    },
    {
        question: "Which of the following is used to capture all click events in a window?",
        answers: ["window.captureEvents(Event.CLICK);", "window.routeEvents(Event.CLICK );", "window.handleEvents (Event.CLICK);", "window.raiseEvents(Event.CLICK );"],
        correct: 1,
    },
    {
        question: "Javascript is an object oriented language?",
        answers: ["False", "True"],
        correct: 2,
    },
    {
        question: "Which of the following is not a valid JavaScript variable name?",
        answers: ["2java", "_java_and_ java _names", "javaandjava", "None of the above"],
        correct: 1,
    },
    {
        question: "Which of the ways below is incorrect of instantiating a date?",
        answers: ["new Date(dateString)", "new Date()", "new Date(seconds)", "new Date(year, month, day, hours, minutes, seconds, milliseconds)"],
        correct: 3,
    },
    {
        question: "What is negative infinity in Java script?",
        answers: [
            "any of below",
            "number in JavaScript, derived by dividing number by a negative number.",
            "number in JavaScript, derived by dividing number by zero.",
            "number in JavaScript, derived by dividing negative number by zero"
        ],
        correct: 4,
    },
    {
        question: " ___________ JavaScript is also called client-side JavaScript.",
        answers: ["Microsoft", "Navigator", "LiveWire", "Native"],
        correct: 2,
    },
    {
        question: "What language defines the behavior of a web page?",
        answers: ["HTML", "CSS", "XML", "Java Script"],
        correct: 4,
    },
    {
        question: "Why so Java and JavaScript have similar name?",
        answers: [
            "Java Script is a stripped-down version of Java",
            "The syntax of JavaScript is loosely based on Java syntax",
            "They both support Object Oriented Programming",
            "None of the above"
        ],
        correct: 2,
    },
    {
        question: "File is a server-side JavaScript object?",
        answers: ["True", "False"],
        correct: 1,
    },
    {
        question: "What is the alternate name for Java script?",
        answers: ["LimeScript", "Both LimeScript and ECMAScript", "ECMScript", "ECMAScript"],
        correct: 4,
    },
    {
        question: "Which of the following is a client-side Java Script object?",
        answers: ["File", "Function", "FileUpload", "Time"],
        correct: 3,
    },
    {
        question: "What java wrapper type is created when a JavaScript object is sent to Java?",
        answers: ["ScriptObject", "JavaObject", "Jobject", "JSObject"],
        correct: 4,
    },
    {
        question: "Is it possible to declare a variable in Java Script along its type?",
        answers: ["Yes", "No"],
        correct: 1,
    },
    {
        question: "Which of the following method is used to evaluate a string of Java Script code in the context of the specified object?",
        answers: ["Eval", "ParseDoule", "ParseObject", "Efloat"],
        correct: 1,
    },
    {
        question: "Java Script supports all boolean operators",
        answers: ["True", "False"],
        correct: 2,
    },
    {
        question: "Java Script entities start with ____________ and end with ______________",
        answers: ["Semicolon, colon", "Semicolon, Ampersand", "Ampersand, colon", "Ampersand, semicolon"],
        correct: 4,
    },
    {
        question: "How to append a value to an array of Java Script?",
        answers: ["arr[arr.length] = value", "arr[arr.length+1] = new Arrays()", "arr[arr.length-1] = value", "arr[arr.length*1] = value"],
        correct: 1,
    },
    {
        question: "Javascript is a _____ language.",
        answers: ["Programming", "Application", "Scripting", "None of the above"],
        correct: 3,
    },
    {
        question: "JavaScript is a _____ Side Scripting Language.",
        answers: ["Server", "Browser", "ISP", "None of the above"],
        correct: 2,
    },
    {
        question: "Which of the following purpose, JavaScript is designed for ?",
        answers: ["To Execute Query Related to DB on Server", "To Style HTML Pages", "To Perform Server Side Scripting Opertion", "To add interactivity to HTML Pages."],
        correct: 4,
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        answers: ["if (i != 5)", "if i =! 5 then", "if i <> 5", "if (i <> 5)"],
        correct: 1,
    },
    {
        question: "JavaScript code is written inside file having extension",
        answers: [".jvs", ".js", ".jsc", ".javascript"],
        correct: 2,
    },
    {
        question: "Why JavaScript is called as Lightweight Programming Language ?",
        answers: [
            "because JS is client side scripting",
            "because JS is available free of cost.",
            "because we can add programming functionality inside JS",
            "because JS can provide programming functionality inside but up to certain extend."
        ],
        correct: 4,
    },
    {
        question: "JavaScript is also called as",
        answers: ["Server Side Scripting Language", "Client Side Scripting Language", "All of the above", "None of the above"],
        correct: 2,
    },
{
        question: "Local Browser used for validations on the Web Pages uses",
        answers: ["JS", "Java", "HTML", "CSS"],
        correct: 1,
    },
    {
        question: "JavaScript code can be called by using",
        answers: ["RMI", "Preprocessor", "Function / Method", "None of the above"],
        correct: 3,
    },
    {
        question: "Which is correct about JavaScript?",
        answers: ["JavaScript is an Object-Based language", "JavaScript is Assembly-language", "JavaScript is an Object-Oriented language", "JavaScript is a High-level language"],
        correct: 1,
    },
    {
        question: "Arrays in JavaScript are defined by which of the following statements?",
        answers: ["It is an ordered list of values", "It is an ordered list of objects", "It is an ordered list of string", "It is an ordered list of functions"],
        correct: 1,
    },
    {
        question: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        answers: ["Position", "Window", "Standard", "Location"],
        correct: 1,
    },
    {
        question: "Which of the following is not an error in JavaScript?",
        answers: ["Missing of Bracket", "Division by zero", "Syntax error", "Missing of semicolons"],
        correct: 2,
    },
    {
        question: "When an empty statement is encountered, a JavaScript interpreter",
        answers: ["Throws an exception", "Throws an error", "Prompts to complete the statement", "Ignores the statement"],
        correct: 4,
    },
    {
        question: "The 'var' and 'function' are",
        answers: ["Prototypes", " Datatypes", "Keywords", "Declaration statements"],
        correct: 2,
    },
    {
        question: "Which attribute is used to specify that the script is executed when the page has finished parsing (only for external scripts)",
        answers: ["type", "parse", "async", "defer"],
        correct: 4,
    },
    {
        question: "Among the following, which one is a ternary operator ?",
        answers: ["?", "-", ":", "+"],
        correct: 1,
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