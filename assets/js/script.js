document.addEventListener('DOMContentLoaded', function () {
    
    // Checking if the script is on the desired page by page ID

    if (document.body.id === 'quiz_Page') {

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
                question: "How do you round the number 7.25 to the nearest integer?",
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
                question: "How do you find the number with the highest value of x and y?",
                answers: ["ceil(x, y)", "Math.max(x, y)", "top(x, y)", "Math.ceil(x, y)"],
                correct: 2,
            },
            {
                question: "JavaScript is the same as Java.",
                answers: [
                    "True",
                    "False"
                ],
                correct: 2,
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
                question: "How do you declare a JavaScript variable?",
                answers: ["variable carName;", "v carName;", "var carName;"],
                correct: 3,
            },
            {
                question: "What is the alternate name for Java script?",
                answers: ["LimeScript", "Both LimeScript and ECMAScript", "EScript", "ECMAScript"],
                correct: 4,
            },
            {
                question: "What will the following code return: Boolean(10 > 9)",
                answers: ["false", "true", "NaN"],
                correct: 2,
            },
            {
                question: "What java wrapper type is created when a JavaScript object is sent to Java?",
                answers: ["ScriptObject", "JavaObject", "Jobject", "JSObject"],
                correct: 4,
            },
            {
                question: "How to write an IF statement in JavaScript?",
                answers: ["if i = 5", "if (i == 5)", "if i == 5 then", "if i = 5 then"],
                correct: 2,
            },
            {
                question: "Which of the following method is used to evaluate a string of Java Script code in the context of the specified object?",
                answers: ["Eval", "ParseDoule", "ParseObject", "Efloat"],
                correct: 1,
            },
            {
                question: "How do you call a function named 'myFunction'?",
                answers: ["myFunction()", "call myFunction()", "call function myFunction()"],
                correct: 1,
            },
            {
                question: "Java Script entities start with ____________ and end with ______________.",
                answers: ["Semicolon, colon", "Semicolon, Ampersand", "Ampersand, colon", "Ampersand, semicolon"],
                correct: 4,
            },
            {
                question: "How do you write 'Hello World' in an alert box?",
                answers: ["msg('Hello World');", "alertBox('Hello World');", "alert(Hello World);", "alert('Hello World'); "],
                correct: 4,
            },
            {
                question: "Javascript is a _____ language.",
                answers: ["Programming", "Application", "Scripting", "None of the above"],
                correct: 3,
            },
            {
                question: "How can you detect the client's browser name?",
                answers: ["browser.name", "client.navName", "navigator.appName"],
                correct: 3,
            },
            {
                question: "Which of the following purpose, JavaScript is designed for?",
                answers: ["To Execute Query Related to DB on Server", "To Style HTML Pages", "To Perform Server Side Scripting Opertion", "To add interactivity to HTML Pages."],
                correct: 4,
            },
            {
                question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
                answers: ["if (i != 5)", "if i =! 5 then", "if i <> 5", "if (i <> 5)"],
                correct: 1,
            },
            {
                question: "JavaScript code is written inside file having extension?",
                answers: [".jvs", ".js", ".jsc", ".javascript"],
                correct: 2,
            },
            {
                question: "Why JavaScript is called as Lightweight Programming Language?",
                answers: [
                    "because JS is client side scripting",
                    "because JS is available free of cost.",
                    "because we can add programming functionality inside JS",
                    "because JS can provide programming functionality inside but up to certain extend."
                ],
                correct: 4,
            },
            {
                question: "JavaScript is also called as?",
                answers: ["Server Side Scripting Language", "Client Side Scripting Language", "All of the above", "None of the above"],
                correct: 2,
            },
            {
                question: "JavaScript code can be called by using?",
                answers: ["RMI", "Preprocessor", "Function / Method", "None of the above"],
                correct: 3,
            },
            {
                question: "Arrays in JavaScript are defined by which of the following statements?",
                answers: ["It is an ordered list of values", "It is an ordered list of objects", "It is an ordered list of string", "It is an ordered list of functions"],
                correct: 1,
            },
            {
                question: "Which of the following is not an error in JavaScript?",
                answers: ["Missing of Bracket", "Division by zero", "Syntax error", "Missing of semicolons"],
                correct: 2,
            },
            {
                question: "When an empty statement is encountered, a JavaScript interpreter?",
                answers: ["Throws an exception", "Throws an error", "Prompts to complete the statement", "Ignores the statement"],
                correct: 4,
            },
            {
                question: "The 'var' and 'function' are?",
                answers: ["Prototypes", " Datatypes", "Keywords", "Declaration statements"],
                correct: 4,
            },
            {
                question: "Which attribute is used to specify that the script is executed when the page has finished parsing (only for external scripts)?",
                answers: ["type", "parse", "async", "defer"],
                correct: 4,
            },
            {
                question: "Among the following, which one is a ternary operator?",
                answers: ["?", "-", ":", "+"],
                correct: 1,
            },
            {
                question: "What is the purpose of the 'let' keyword in JavaScript?",
                answers: ["To declare a constant variable.", "To declare a variable with block scope.", "To declare a global variable."],
                correct: 2,
            },
            {
                question: "What is the purpose of the 'addEventListener' method in JavaScript?",
                answers: ["To add a CSS style to an element.", "To attach an event handler function to an element.", "To create a new HTML element."],
                correct: 2,
            },
            {
                question: "What is the DOM in the context of web development?",
                answers: ["Document Object Model", "Data Object Model", "Design Object Model"],
                correct: 1,
            },
            {
                question: "How does the setTimeout function work in JavaScript?",
                answers: [
                    "Delays the execution of a function for a specified number of milliseconds.",
                    "Sets a timer for the browser to refresh the page.",
                    "Pauses the script execution indefinitely."
                ],
                correct: 1,
            },
            {
                question: "How do you iterate over elements in an array in JavaScript?",
                answers: ["Using a 'for...in' loop.", "Using a 'for' loop.", "Using the 'forEach' method."],
                correct: 3,
            },
            {
                question: "Explain the concept of closure in JavaScript.",
                answers: ["It refers to the process of closing a browser window.", "It's a function with access to variables from its outer (enclosing) scope.", "It's a way to close and open HTML tags."],
                correct: 2,
            },
            {
                question: "What is the purpose of the 'this' keyword in JavaScript?",
                answers: ["Refers to the current HTML document.", "Refers to the current object in a method or function.", "Represents a placeholder for a future value."],
                correct: 1,
            },
        ];

        let score = 0;
        let questionNumber = 0;

        const quizQuestion = document.querySelector(".quiz_question");
        const listAnswers = document.querySelector(".quiz_answers_list");
        const resultsContainer = document.querySelector(".results_container");
        const popupChooseAnswer = document.querySelector(".popup_choose_answer");
        const popupStartAgain = document.querySelector(".popup_start_again");
        const resetBtn = document.querySelector(".quiz_button_reset");
        const nextBtn = document.querySelector(".quiz_button_next");
        const quizBtns = document.querySelector(".quiz_buttons");
        const soundOffIcon = document.querySelector('.sound_off');
        const soundOnIcon = document.querySelector('.sound_on');



        /**Clears page content before each question */
        function clearHtml() {
            quizQuestion.innerHTML = "";
            listAnswers.innerHTML = "";
            resultsContainer.innerHTML = "";
            quizBtns.classList.remove('show-easy');
        };


        /**Function for choose random questions from array */
        function getRandomQuestions(array, n) {
            // Shuffle array
            const shuffledArray = array.sort(() => Math.random() - 0.5);
            // Choose first n elements
            return shuffledArray.slice(0, n);
        }

        //Choose 10 random questions
        const randomQuestions = getRandomQuestions(questions, 10);


        /**Create question and answers from array and put them in HTML */
        function showQuestion() {

            // Create variable with question
            const questionTemplate = `<h2 class = "quiz_title">%question%</h2>`;
            const questionTitle = questionTemplate.replace('%question%', randomQuestions[questionNumber]["question"])
            quizQuestion.innerHTML = questionTitle;

            // Create variable with answers
            for ([index, item] of randomQuestions[questionNumber]["answers"].entries()) {
                const answersTemplate =
                    `<li class="quiz_answers_item">
                <label>
                    <input value="%num%" type="radio" name="quiz_answers" />
                    %answer%
                </label>
            </li>`;
                const answerText = answersTemplate
                    .replace('%answer%', item)
                    .replace('%num%', index + 1);
                listAnswers.innerHTML += answerText;
            }
        }



        /**Definition of a sequential question */
        function increaseQuestionOf() {
            let quizQuestionOf = document.querySelector(".quiz_question_of");
            let numberOfQuestion = questionNumber + 1;
            quizQuestionOf.innerHTML = `Question ${numberOfQuestion} of ${randomQuestions.length}`;
        }



        /**Check Answer (is correct? Is last?) */
        function checkAnswer() {

            ifAnswerCorrect();

            // Add disabled attribute to the all inputs after choose answer
            document.querySelectorAll('input[type="radio"]').forEach(function (disableRadioButton) {
                disableRadioButton.disabled = true;
            });

            //Hide buttons Next and Start Again after choose answer
            nextBtn.classList.add('hidden');
            resetBtn.classList.add('hidden');

            // Add animation after choose answer
            document.querySelector(".selected").className += " selected_blink";
            setTimeout(() => {
                document.querySelector(".selected").classList.remove("selected_blink");
                document.querySelector(".score_correct_answer").innerHTML = score;
                nextBtn.classList.remove('hidden');
                resetBtn.classList.remove('hidden');
                quizBtns.classList.add('show-easy');
            }, 1500);

            checkIsLastQuestion()
        };


        /**Compare user's and correct answers */
        function ifAnswerCorrect() {
            // Get the user's answer
            let checkedRadio = listAnswers.querySelector("input:checked");
            let userAnswer = parseInt(checkedRadio.value);
            // Get the correct answer
            let correctAnswer = randomQuestions[questionNumber]['correct'];

            //if user's answer is correct
            if (userAnswer === correctAnswer) {
                score++;
                document.querySelector(".selected").classList.add("selected_correct");
                setTimeout(() => {
                    if (soundOffIcon.classList.contains("hidden")) {
                        playCorrectSound();
                    };
                }, 1200);
            }
            //if user's answer is incorrect
            else {
                setTimeout(() => {
                    document.querySelector(".selected").classList.add("selected_wrong");
                    let correctInput = document.querySelector('input[value="' + correctAnswer + '"]');
                    correctInput.parentNode.parentNode.classList.add('selected_correct');
                    if (soundOffIcon.classList.contains("hidden")) {
                        playWrongSound();
                    };
                }, 1500);
            }
        }



        /** Check is this the last question? */
        function checkIsLastQuestion() {

            // Question isn't last!
            if (questionNumber !== randomQuestions.length - 1) {
                questionNumber++;
                nextBtn.onclick = function () {
                    clearHtml();
                    showQuestion();
                    increaseQuestionOf();
                    selectedRadio();
                    selectAnswer();
                };
            }
            // Question is last!
            else {
                setTimeout(() => {
                    resetBtn.classList.remove('hidden');
                    nextBtn.outerHTML =
                        `
                <button class="quiz_button_finish" type="button">
                 Get results
                </button>
                `
                    document.querySelector(".quiz_button_finish").onclick = function () {
                        clearHtml();
                        showResults();
                    }
                }, 1500);
            }
        }

        /**After completing all questions display result based on the number of correct answers. */
        function showResults() {
            document.querySelector(".block_score_questionof").outerHTML = " ";
            document.querySelector(".quiz_answers").outerHTML = " ";
            resetBtn.outerHTML = " ";
            quizBtns.className += ' play_again';

            let resultsTemplate = `
        <h2 class="results-title">%title%</h2>
        <h3 class="results-message">%message%</h3>
        <p class="results-score" >%result%</p>
        `;

            // Answer options based on test results
            let title, message;
            if (score === randomQuestions.length) {
                title = 'Congratulations!';
                message = "You've answered all the questions correctly!";
            } else if ((score * 100) / randomQuestions.length >= 50) {
                title = 'Well done!';
                message = "You have good knowledge about JS!";
            } else if ((score * 100) / randomQuestions.length >= 30) {
                title = 'Not bad...';
                message = 'But, there is still lots of space for improvement!';
            } else {
                title = 'Don\'t be upset...';
                message = 'Learn and try again!';
            };

            let result = `Correct ${score} of ${randomQuestions.length} answers!`;

            let resultsMessage = resultsTemplate
                .replace('%title%', title)
                .replace('%message%', message)
                .replace('%result%', result)

            resultsContainer.innerHTML = resultsMessage;

            document.querySelector(".quiz_button_finish").innerText = "Play again";
            document.querySelector(".quiz_button_finish").onclick = function () {
                history.go()
            };
        };

        /**Toggle between hide or visible pop-up "Choose" window */
        function toggleModalChoose() {
            popupChooseAnswer.classList.toggle('popup_visible');
        }

        /**Toggle between hide or visible pop-up "Start Again" window */
        function showStartAgain() {

            function toggleModalStartAgain() {
                popupStartAgain.classList.toggle('popup_visible');
            }

            toggleModalStartAgain();
            if (soundOffIcon.classList.contains("hidden")) {
                playNotificationSound();
            };
            document.querySelector(".modal_start_again_btn_cancel").onclick = toggleModalStartAgain;
            document.querySelector(".modal_start_again_btn_ok").onclick = restart;
        }

        /**Reload Quiz page and start quiz again */
        function restart() {
            location.reload();
        }


        /**Assigning a class "selected" to the parent block of the selected answer */
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

        /**If an answer is not selected the button 'Next' won't work*/
        function selectAnswer() {
            nextBtn.onclick = function () {
                let checkedRadio = listAnswers.querySelector("input:checked");

                // If an answer is not selected the function exits
                if (!checkedRadio) {
                    // Show pop-up window with text "Select answer"
                    toggleModalChoose()
                    if (soundOffIcon.classList.contains("hidden")) {
                        playNotificationSound();
                    };
                    // Hide pop-up window with text Choose answer
                    document.querySelector(".close_btn").onclick = toggleModalChoose;
                    document.querySelector(".modal_choose_answer_btn").onclick = toggleModalChoose;
                }
            };
        }

        //Sound

        /**Play sound when user answers incorrect*/
        function playWrongSound() {
            let wrongSound = document.getElementById('wrong');
            wrongSound.play()
        };

        /**Play sound when user answers correct*/
        function playCorrectSound() {
            let correctSound = document.getElementById('correct');
            correctSound.play()
        };

        /**Play sound when pop-up window appears*/
        function playNotificationSound() {
            let notificationSound = document.getElementById('notification');
            notificationSound.play()
        };

        /**Turn on the sound on the Quiz page */
        function soundOn() {
            soundOffIcon.classList.add('hidden');
            soundOnIcon.classList.remove('hidden');
        };

        /**Turn off the sound on the Quiz page */
        function soundOff() {
            soundOnIcon.classList.add('hidden');
            soundOffIcon.classList.remove('hidden');
        };

        clearHtml()
        showQuestion()
        increaseQuestionOf();
        selectedRadio();
        selectAnswer();

        soundOffIcon.onclick = soundOn;
        soundOnIcon.onclick = soundOff;
        resetBtn.onclick = showStartAgain;
    }
});


/**Open quiz page when click btn on the main page*/
function redirectToQuizPage() {
    window.location.href = 'quiz.html';
};

/**Toggle nav menu for mobile screens*/
function toggleMenu() {
    const navMenu = document.querySelector('.nav');
    navMenu.classList.toggle('show');
};