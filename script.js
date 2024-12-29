const questions = [
    {
        question: "Who is the father of C Language?",
        options: ["Steve Jobs", "James Gosling", "Dennis Ritchie", "Rasmus Lerdorf"],
        answer: "Dennis Ritchie"
    },
    {
        question: "What is an example of iteration in C?",
        options: ["for", "while", "do-while", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "Which of the following is not a valid C variable name?",
        options: ["int number", "float rate", "int variable_count", "int $main"],
        answer: "int $main"
    },
    {
        question: "Which of the following is not an OOPS concept in java?",
        options: ["polymorphism", "inheritance", "compilation","encapsulation"],
        answer: "compilation"
    },
    {
        question: "Which of these is not a feature of java?",
        options:["Object-oriented","Platform-independent","Compiled","Interpreted language"],
        answer: "Compiled"
    },
    {
        question: "Which component of Java is responsible for running the compiled Java bytecode?",
        options: ["JDK","JVM","JRE","JIT"],
        answer:"JVM"
    },
    {
        question: "What is the default value of a boolean variable in Java?",
        options: ["true","false","0","null"],
        answer: "false"
    },
    {
        question: "Which keyword is used for function in Python Language?",
        options: ["Function","def","function","Define"],
        answer: "def"
    },
    {
        question: "Which of the following character is used to give single-line comments in Python?",
        options: ["//","#","!","/*"],
        answer: "#"
    },
    {
        question: "What will be the output of the following Python code snippet?\nfor i in [1,2,3,4][::-1]\nprint(i,end=' ')",
        options: ["4 3 2 1","error","1 2 3 4","none"],
        answer: "4 3 2 1"
    }
];
let currentQuestionIndex = 0;
let score = 0;
let userName = '';

function startQuiz() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    userName = `${firstName} ${lastName}`;
    document.getElementById('participantForm').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('nextButton');
    const submitButton = document.getElementById('submitButton');

    questionElement.innerText = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = '';

    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => {
            if (option === questions[currentQuestionIndex].answer) {
                button.classList.add('correct');
                score++;
            } else {
                button.classList.add('incorrect');
                document.querySelectorAll('.options button').forEach(btn => {
                    if (btn.innerText === questions[currentQuestionIndex].answer) {
                        btn.classList.add('correct');
                    }
                });
            }
            document.querySelectorAll('.options button').forEach(btn => btn.disabled = true);

            if (currentQuestionIndex === questions.length - 1) {
                submitButton.classList.remove('hidden');
            } else {
                nextButton.classList.remove('hidden');
            }
        };
        optionsElement.appendChild(button);
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    const nextButton = document.getElementById('nextButton');
    nextButton.classList.add('hidden');
    showQuestion();
}

function submitQuiz() {
    document.getElementById('quiz').classList.add('hidden');
    const completionMessage = `Quiz completed!`;
    const attemptMessage = `You attempted ${questions.length} questions.`;
    document.getElementById('completionMessage').innerText = completionMessage;
    document.getElementById('attemptMessage').innerText = attemptMessage;
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('showScoreButton').classList.remove('hidden');
}

function showScore() {
    const resultMessage = ` ${userName}! You scored ${score} out of ${questions.length}.`;
    document.getElementById('resultMessage').innerText = resultMessage;
    document.getElementById('resultMessage').classList.remove('hidden');
    document.getElementById('showScoreButton').classList.add('hidden');
    document.getElementById('retakeButton').classList.remove('hidden');
}

function retakeQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById('result').classList.add('hidden');
    document.getElementById('resultMessage').classList.add('hidden');
    document.getElementById('retakeButton').classList.add('hidden');
    document.getElementById('participantForm').classList.remove('hidden');
}
