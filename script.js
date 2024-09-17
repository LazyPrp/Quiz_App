// Object to store questions for each category
const questions = {
    HTML: [
        { q: 'What does HTML stand for?', options: ['Hyperlinks and Text Markup Language', 'Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinking Text Management Language'], correct: 1 },
        { q: 'Which HTML tag is used to define an internal style sheet?', options: ['<style>', '<css>', '<script>', '<link>'], correct: 0 },
        { q: 'Which HTML attribute is used to define inline styles?', options: ['style', 'font', 'class', 'styles'], correct: 0 },
        { q: 'Which HTML element is used for the largest heading?', options: ['<heading>', '<h6>', '<h1>', '<head>'], correct: 2 },
        { q: 'Which of the following is the correct way to create a hyperlink in HTML?', options: ['<a href="url">link</a>', '<link src="url">link</link>', '<a>link</a>', '<hyperlink href="url">link</hyperlink>'], correct: 0 },
        { q: 'What is the correct HTML for adding a background color?', options: ['<background>yellow</background>', '<body style="background-color: yellow;">', '<body bg="yellow">', '<background color="yellow">'], correct: 1 },
        { q: 'Which HTML tag is used to define a list item?', options: ['<ul>', '<li>', '<ol>', '<list>'], correct: 1 },
        { q: 'Which HTML tag is used to create a table row?', options: ['<tr>', '<td>', '<th>', '<table>'], correct: 0 },
        { q: 'Which HTML tag is used to embed an image?', options: ['<img>', '<picture>', '<image>', '<img src="url">'], correct: 0 },
        { q: 'How can you make a numbered list in HTML?', options: ['<ul>', '<ol>', '<li>', '<dl>'], correct: 1 }
    ],
    css: [
        { q: 'What does CSS stand for?', options: ['Cascading Style Sheets', 'Colorful Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets'], correct: 0 },
        { q: 'Which property is used to change the background color?', options: ['bgcolor', 'color', 'background-color', 'background'], correct: 2 },
        { q: 'Which CSS property controls the text size?', options: ['font-style', 'text-size', 'font-size', 'text-style'], correct: 2 },
        { q: 'Which CSS property is used to change the text color?', options: ['text-color', 'color', 'font-color', 'fgcolor'], correct: 1 },
        { q: 'How do you add a border in CSS?', options: ['border-width', 'border', 'border-color', 'border-style'], correct: 1 },
        { q: 'Which CSS property is used for changing the font?', options: ['font-style', 'font-weight', 'font-family', 'font'], correct: 2 },
        { q: 'How do you select an element with id "demo" in CSS?', options: ['.demo', '#demo', '*demo', 'id=demo'], correct: 1 },
        { q: 'Which CSS property controls the space between elements?', options: ['padding', 'spacing', 'margin', 'border'], correct: 2 },
        { q: 'What is the default value of the position property in CSS?', options: ['fixed', 'relative', 'static', 'absolute'], correct: 2 },
        { q: 'How can you make a list without bullets?', options: ['list-style: none;', 'list-style-type: none;', 'list: none;', 'list-type: none;'], correct: 1 }
    ],
    js: [
        { q: 'Which company developed JavaScript?', options: ['Mozilla', 'Netscape', 'Sun Microsystems', 'Oracle'], correct: 1 },
        { q: 'Inside which HTML element do we put the JavaScript?', options: ['<js>', '<script>', '<javascript>', '<scripting>'], correct: 1 },
        { q: 'What is the correct syntax for referring to an external script?', options: ['<script src="script.js">', '<script href="script.js">', '<script ref="script.js">', '<script name="script.js">'], correct: 0 },
        { q: 'Which of the following is not a reserved word in JavaScript?', options: ['interface', 'throws', 'program', 'short'], correct: 2 },
        { q: 'How do you create a function in JavaScript?', options: ['function = myFunction()', 'function myFunction()', 'function:myFunction()', 'createFunction()'], correct: 1 },
        { q: 'Which event occurs when the user clicks on an HTML element?', options: ['onmouseover', 'onchange', 'onclick', 'onmouseclick'], correct: 2 },
        { q: 'How can you add a comment in JavaScript?', options: ['<!--This is a comment-->', '//This is a comment', '**This is a comment**', '<comment>This is a comment</comment>'], correct: 1 },
        { q: 'Which operator is used to assign a value to a variable?', options: ['*', '=', '-', '=='], correct: 1 },
        { q: 'Which of the following is not a JavaScript data type?', options: ['Number', 'Boolean', 'Undefined', 'Float'], correct: 3 },
        { q: 'How do you round the number 7.25 to the nearest integer in JavaScript?', options: ['Math.rnd(7.25)', 'Math.round(7.25)', 'round(7.25)', 'Math.floor(7.25)'], correct: 1 }
    ],
    java: [
        { q: 'What is the size of an int in Java?', options: ['4 bytes', '8 bytes', '2 bytes', '1 byte'], correct: 0 },
        { q: 'Which of these is not a Java keyword?', options: ['static', 'private', 'goto', 'boolean'], correct: 2 },
        { q: 'Which method is used to start a thread in Java?', options: ['run()', 'init()', 'start()', 'execute()'], correct: 2 },
        { q: 'What is the default value of a boolean variable in Java?', options: ['true', 'false', '0', 'null'], correct: 1 },
        { q: 'Which operator is used to check for equality in Java?', options: ['=', '==', '===', '!='], correct: 1 },
        { q: 'Which keyword is used to inherit a class in Java?', options: ['this', 'extends', 'implements', 'inherits'], correct: 1 },
        { q: 'Which of the following is not a primitive data type in Java?', options: ['int', 'String', 'boolean', 'double'], correct: 1 },
        { q: 'Which package contains the Random class?', options: ['java.util', 'java.io', 'java.lang', 'java.sql'], correct: 0 },
        { q: 'How do you declare an array in Java?', options: ['int[] arr;', 'array arr;', 'int arr[];', 'arr = new int[];'], correct: 0 },
        { q: 'Which method is used to get the length of a string in Java?', options: ['getSize()', 'length()', 'size()', 'getLength()'], correct: 1 }
    ]
};

// Global variables for quiz state management
let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let timeLeft = 100;
let totalTimeTaken = 0;
let timer;
let selectedAnswer = null;

let userName = '';

// Event listener for start button to capture and store user name
document.getElementById('start-btn').addEventListener('click', function () {
    userName = document.getElementById('name').value;
    if (userName) {
        sessionStorage.setItem('userName', userName);
        alert(`Welcome ${userName}! Please select a category.`);
    } else {
        alert("Please enter your name before starting!");
    }
});

// Event listeners for category buttons to start the quiz for the selected category
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        if (!userName) {
            alert("Please enter your name before selecting a category.");
        } else {
            currentCategory = this.getAttribute('data-category');
            startQuiz(currentCategory);
        }
    });
});

// Function to start the quiz for the selected category
function startQuiz(category) {
    // Hide the home page and result page, show the quiz page
    document.getElementById('home').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    
    // Set the category title and initialize quiz state
    document.getElementById('category-title').innerText = category;
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    timeLeft = 100;
    totalTimeTaken = 0;

    loadQuestion();
    startTimer();
}

// Function to load and display the current question and options
function loadQuestion() {
    const questionData = questions[currentCategory][currentQuestionIndex];
    document.getElementById('question-container').innerText = questionData.q;
    document.getElementById('question-number').innerText = `Question ${currentQuestionIndex + 1}/10`;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    selectedAnswer = null;

    questionData.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.innerText = option;
        optionBtn.classList.add('option-btn');

        // Add event listener for option button clicks
        optionBtn.onclick = function () {
            document.querySelectorAll('.option-btn').forEach(btn => {
                btn.classList.remove('selected-option');
                btn.disabled = true;
            });

            optionBtn.classList.add('selected-option');
            selectedAnswer = index;
            document.getElementById('next-question-btn').classList.remove('hidden');
        };

        optionsContainer.appendChild(optionBtn);
    });
}

// Function to start the quiz timer and update the time left
function startTimer() {
    timer = setInterval(function () {
        timeLeft--;
        totalTimeTaken++;
        document.getElementById('timer').innerText = `Time Left: ${timeLeft}s`;

        // End the quiz if time runs out
        if (timeLeft <= 0) {
            clearInterval(timer);
            showResults();
        }
    }, 1000);
}

// Event listener for the next question button
document.getElementById('next-question-btn').addEventListener('click', function () {
    if (selectedAnswer !== null) {
        checkAnswer(selectedAnswer);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < 10) {
        loadQuestion();
        document.getElementById('next-question-btn').classList.add('hidden');
    } else {
        clearInterval(timer);
        showResults();
    }
});

// Function to check the selected answer and update scores
function checkAnswer(selected) {
    const correct = questions[currentCategory][currentQuestionIndex].correct;
    if (selected === correct) {
        score += 10;
        correctAnswers++;
    } else {
        wrongAnswers++;
    }
    document.getElementById('score').innerText = `Score: ${score}`;
}

// Function to display the results after the quiz ends
function showResults() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');

    const percentage = (correctAnswers / 10) * 100;  // Calculate the score percentage
    document.getElementById('userName').innerText = sessionStorage.getItem('userName');
    document.getElementById('correctAnswers').innerText = correctAnswers;
    document.getElementById('wrongAnswers').innerText = wrongAnswers;
    document.getElementById('scorePercentage').innerText = percentage.toFixed(2);
    
    document.getElementById('totalTime').innerText = `Total Time Taken: ${totalTimeTaken}s`;
    document.getElementById('attemptedQuestions').innerText = `Questions Attempted: ${correctAnswers + wrongAnswers}/10`;
}

// Function to restart the quiz by reloading the page
function startAgain() {
    location.reload();  
}

// Function to go back to the home screen and reset the quiz
function goHome() {
    document.getElementById('result').classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
    resetQuiz();
}

// Function to reset quiz variables to their initial state
function resetQuiz() {
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    currentQuestionIndex = 0;
    timeLeft = 100;
}


/*const questions = {
    HTML: [
        { q: 'What does HTML stand for?', options: ['Hyperlinks and Text Markup Language', 'Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinking Text Management Language'], correct: 1 },
        { q: 'Which HTML tag is used to define an internal style sheet?', options: ['<style>', '<css>', '<script>', '<link>'], correct: 0 },
        { q: 'Which HTML attribute is used to define inline styles?', options: ['style', 'font', 'class', 'styles'], correct: 0 },
        { q: 'Which HTML element is used for the largest heading?', options: ['<heading>', '<h6>', '<h1>', '<head>'], correct: 2 },
        { q: 'Which of the following is the correct way to create a hyperlink in HTML?', options: ['<a href="url">link</a>', '<link src="url">link</link>', '<a>link</a>', '<hyperlink href="url">link</hyperlink>'], correct: 0 },
        { q: 'What is the correct HTML for adding a background color?', options: ['<background>yellow</background>', '<body style="background-color: yellow;">', '<body bg="yellow">', '<background color="yellow">'], correct: 1 },
        { q: 'Which HTML tag is used to define a list item?', options: ['<ul>', '<li>', '<ol>', '<list>'], correct: 1 },
        { q: 'Which HTML tag is used to create a table row?', options: ['<tr>', '<td>', '<th>', '<table>'], correct: 0 },
        { q: 'Which HTML tag is used to embed an image?', options: ['<img>', '<picture>', '<image>', '<img src="url">'], correct: 0 },
        { q: 'How can you make a numbered list in HTML?', options: ['<ul>', '<ol>', '<li>', '<dl>'], correct: 1 }
    ],
    css: [
        { q: 'What does CSS stand for?', options: ['Cascading Style Sheets', 'Colorful Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets'], correct: 0 },
        { q: 'Which property is used to change the background color?', options: ['bgcolor', 'color', 'background-color', 'background'], correct: 2 },
        { q: 'Which CSS property controls the text size?', options: ['font-style', 'text-size', 'font-size', 'text-style'], correct: 2 },
        { q: 'Which CSS property is used to change the text color?', options: ['text-color', 'color', 'font-color', 'fgcolor'], correct: 1 },
        { q: 'How do you add a border in CSS?', options: ['border-width', 'border', 'border-color', 'border-style'], correct: 1 },
        { q: 'Which CSS property is used for changing the font?', options: ['font-style', 'font-weight', 'font-family', 'font'], correct: 2 },
        { q: 'How do you select an element with id "demo" in CSS?', options: ['.demo', '#demo', '*demo', 'id=demo'], correct: 1 },
        { q: 'Which CSS property controls the space between elements?', options: ['padding', 'spacing', 'margin', 'border'], correct: 2 },
        { q: 'What is the default value of the position property in CSS?', options: ['fixed', 'relative', 'static', 'absolute'], correct: 2 },
        { q: 'How can you make a list without bullets?', options: ['list-style: none;', 'list-style-type: none;', 'list: none;', 'list-type: none;'], correct: 1 }
    ]
    ,
    js: [
        { q: 'Which company developed JavaScript?', options: ['Mozilla', 'Netscape', 'Sun Microsystems', 'Oracle'], correct: 1 },
        { q: 'Inside which HTML element do we put the JavaScript?', options: ['<js>', '<script>', '<javascript>', '<scripting>'], correct: 1 },
        { q: 'What is the correct syntax for referring to an external script?', options: ['<script src="script.js">', '<script href="script.js">', '<script ref="script.js">', '<script name="script.js">'], correct: 0 },
        { q: 'Which of the following is not a reserved word in JavaScript?', options: ['interface', 'throws', 'program', 'short'], correct: 2 },
        { q: 'How do you create a function in JavaScript?', options: ['function = myFunction()', 'function myFunction()', 'function:myFunction()', 'createFunction()'], correct: 1 },
        { q: 'Which event occurs when the user clicks on an HTML element?', options: ['onmouseover', 'onchange', 'onclick', 'onmouseclick'], correct: 2 },
        { q: 'How can you add a comment in JavaScript?', options: ['<!--This is a comment-->', '//This is a comment', '**This is a comment**', '<comment>This is a comment</comment>'], correct: 1 },
        { q: 'Which operator is used to assign a value to a variable?', options: ['*', '=', '-', '=='], correct: 1 },
        { q: 'Which of the following is not a JavaScript data type?', options: ['Number', 'Boolean', 'Undefined', 'Float'], correct: 3 },
        { q: 'How do you round the number 7.25 to the nearest integer in JavaScript?', options: ['Math.rnd(7.25)', 'Math.round(7.25)', 'round(7.25)', 'Math.floor(7.25)'], correct: 1 }
    ]
    ,
    java: [
        { q: 'What is the size of an int in Java?', options: ['4 bytes', '8 bytes', '2 bytes', '1 byte'], correct: 0 },
        { q: 'Which of these is not a Java keyword?', options: ['static', 'private', 'goto', 'boolean'], correct: 2 },
        { q: 'Which method is used to start a thread in Java?', options: ['run()', 'init()', 'start()', 'execute()'], correct: 2 },
        { q: 'What is the default value of a boolean variable in Java?', options: ['true', 'false', '0', 'null'], correct: 1 },
        { q: 'Which operator is used to check for equality in Java?', options: ['=', '==', '===', '!='], correct: 1 },
        { q: 'Which keyword is used to inherit a class in Java?', options: ['this', 'extends', 'implements', 'inherits'], correct: 1 },
        { q: 'Which of the following is not a primitive data type in Java?', options: ['int', 'String', 'boolean', 'double'], correct: 1 },
        { q: 'Which package contains the Random class?', options: ['java.util', 'java.io', 'java.lang', 'java.sql'], correct: 0 },
        { q: 'How do you declare an array in Java?', options: ['int[] arr;', 'array arr;', 'int arr[];', 'arr = new int[];'], correct: 0 },
        { q: 'Which method is used to get the length of a string in Java?', options: ['getSize()', 'length()', 'size()', 'getLength()'], correct: 1 }
    ]
    
};


let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let timeLeft = 100;
let totalTimeTaken = 0;
let timer;
let selectedAnswer = null;

let userName = '';

document.getElementById('start-btn').addEventListener('click', function () {
    userName = document.getElementById('name').value;
    if (userName) {
        sessionStorage.setItem('userName', userName);
        alert(`Welcome ${userName}! Please select a category.`);
    } else {
        alert("Please enter your name before starting!");
    }
});

document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        if (!userName) {
            alert("Please enter your name before selecting a category.");
        } else {
            currentCategory = this.getAttribute('data-category');
            startQuiz(currentCategory);
        }
    });
});

function startQuiz(category) {
    // Hide the home page and result page, show the quiz page
    document.getElementById('home').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    
    document.getElementById('category-title').innerText = category;

    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    timeLeft = 100;
    totalTimeTaken = 0;

    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const questionData = questions[currentCategory][currentQuestionIndex];
    document.getElementById('question-container').innerText = questionData.q;
    document.getElementById('question-number').innerText = `Question ${currentQuestionIndex + 1}/10`;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    selectedAnswer = null;

    questionData.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.innerText = option;
        optionBtn.classList.add('option-btn');

        optionBtn.onclick = function () {
            document.querySelectorAll('.option-btn').forEach(btn => {
                btn.classList.remove('selected-option');
                btn.disabled = true;
            });

            optionBtn.classList.add('selected-option');
            selectedAnswer = index;
            document.getElementById('next-question-btn').classList.remove('hidden');
        };

        optionsContainer.appendChild(optionBtn);
    });
}
//function to keep trck of timer
function startTimer() {
    timer = setInterval(function () {
        timeLeft--;
        totalTimeTaken++;
        document.getElementById('timer').innerText = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            showResults();
        }
    }, 1000);
}

document.getElementById('next-question-btn').addEventListener('click', function () {
    if (selectedAnswer !== null) {
        checkAnswer(selectedAnswer);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < 10) {
        loadQuestion();
        document.getElementById('next-question-btn').classList.add('hidden');
    } else {
        clearInterval(timer);
        showResults();
    }
});

// function to check answers
function checkAnswer(selected) {
    const correct = questions[currentCategory][currentQuestionIndex].correct;
    if (selected === correct) {
        score += 10;
        correctAnswers++;
    } else {
        wrongAnswers++;
    }
    document.getElementById('score').innerText = `Score: ${score}`;
}

// Function to show the results after the quiz ends

function showResults() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');

    const percentage = (correctAnswers / 10) * 100;  // Calculate the score percentage
    document.getElementById('userName').innerText = sessionStorage.getItem('userName');
    document.getElementById('correctAnswers').innerText = correctAnswers;
    document.getElementById('wrongAnswers').innerText = wrongAnswers;
    document.getElementById('scorePercentage').innerText = percentage.toFixed(2);
    
    document.getElementById('totalTime').innerText = `Total Time Taken: ${totalTimeTaken}s`;
    document.getElementById('attemptedQuestions').innerText = `Questions Attempted: ${correctAnswers + wrongAnswers}/10`;
}

// Function to restart the quiz
function startAgain() {
    location.reload();  
}

// Function to go back to the home screen and reset the quiz
function goHome() {
    document.getElementById('result').classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
    resetQuiz();
}

// Function to reset quiz variables
function resetQuiz() {
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    currentQuestionIndex = 0;
    timeLeft = 100;
}
*/