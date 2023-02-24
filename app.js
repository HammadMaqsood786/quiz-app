var questionContainer = document.getElementById('question-container');

// First we make quiz data with the help of Array Objects.

function Question(question, a, b, c, d, ans) {
    this.question = question
    this.a = a
    this.b = b
    this.c = c
    this.d = d
    this.ans = ans
}

var question1 = new Question("Q1: What is HTML?",  "Hyper Text Markup Language", "Hyper Text Marker Language", "High Text Making Language", "Hero Text Making Language", "ans1");

var question2 = new Question("Q2: What is CSS?", "Hyper Text Markup Language", "Hyper Text Marker Language", "High Text Making Language", "Hero Text Making Language", "ans1");

var questions = [
    // question1, question2,



    {
        question: "Q1: What is HTML?",
        a: "Hyper Text Markup Language",
        b: "Hyper Text Marker Language",
        c: "High Text Making Language",
        d: "Hero Text Making Language",
        ans: "ans1"
    },
    {
        question: "Q2: What is CSS?",
        a: "Cascading Super Style",
        b: "Convert Style Sheet",
        c: "Countable Style Script",
        d: "Cascading Style Sheet",
        ans: "ans4"
    },
    {
        question: "Q3: What is JS?",
        a: "JavaSuper",
        b: "JavaScript",
        c: "JsonScript",
        d: "Jquery",
        ans: "ans2"
    },
    {
        question: "Q4: Who was the first Prime Minister of Pakistan?",
        a: "Zulfiqar Ali Bhutto",
        b: "Hafeez Jalandhri",
        c: "Liaquat Ali Khan",
        d: "Sir Syed Ahmed Khan",
        ans: "ans3"
    },
    {
        question: "Q5: Largest Mountain in the World is?",
        a: "K2",
        b: "Himalaya",
        c: "Nanga Parbat",
        d: "Mount Everest",
        ans: "ans4"
    },
    {
        question: "Q6: Who score fastest 100 in ODI?",
        a: "AB Devilliers",
        b: "Shahid Afridi",
        c: "Corey Anderson",
        d: "Joe Root",
        ans: "ans1"
    },
    {
        question: "Q7: ISI stands for?",
        a: "International Super Intelligence",
        b: "Inter Services Intelligence",
        c: "Inter Supreme Investigation",
        d: "Investigation Superior Intellingence",
        ans: "ans2"
    },
    {
        question: "Q8: Which is the largest ocean in the world?",
        a: "Atlantic ocean",
        b: "Amazon ocean",
        c: "Antarctic ocean",
        d: "Pacific ocean",
        ans: "ans4"
    },
    {
        question: "Q9: Ankara is the capital of?",
        a: "Iran",
        b: "Iraq",
        c: "Uzbekistan",
        d: "Turkey",
        ans: "ans4"
    },
    {
        question: "Q10: Currency of Malaysia is?",
        a: "Rubel",
        b: "Riyal",
        c: "Ringgit",
        d: "Dirham",
        ans: "ans3"
    }
];

// Make variables to increment the Question & score.

var currentQuestion = 0;
var score = 0;

// Getting the Inputs & showScore DIV with there IDs. 

var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var showScore = document.getElementById('show-score');

// Here we place questions & options by changing innerText.

function renderQuiz() {
    questionContainer.innerText = questions[currentQuestion].question;
    var questionList = questions[currentQuestion];
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

// Here the Quiz starts.

renderQuiz();
const answers = document.querySelectorAll('.answer'); // Here we store all Inputs in const answers.

const getCheckAnswer = () => {
    let answer;
    
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });

    return answer;
};

//Now we do that when user clicks on submit buttton so the all Input radio buttons are empty.

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

// Now when the user clicks on Submit button it will check that tha ID of Input and Current question (ans) is same.

const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === questions[currentQuestion].ans) {
        score++;
    };

    currentQuestion++;
    deselectAll();

    if (currentQuestion < questions.length) {
        renderQuiz();
    }else {
        showScore.innerHTML = `
                <h3> You scored ${score}/${questions.length} </h3>
                <button class="btn" onclick = "location.reload()">Play Again</button>
        `;
        showScore.classList.remove('score-area');
    }

});


 

