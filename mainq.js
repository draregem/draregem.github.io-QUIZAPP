
const questionNumber = document.querySelector('.current-question');
const totalQuestion = document.querySelector('.total-question');

const question = document.querySelector('.question')

const opt1 = document.querySelector('.option1');
const opt2 = document.querySelector('.option2');
const opt3 = document.querySelector('.option3');
const opt4 = document.querySelector('.option4');
const options = document.querySelector('.option-container').children;

const currentScore = document.querySelector('.correct-answers');
const totalObtainable = document.querySelector('.possible-score');
const end = document.querySelector('.game-over');

const scoreCount = document.querySelector('.current-score');

let count = 0;
let questionIndex;
let index = 0;
let myArray = [];
let myArr = [];
let score = 0;


const questions = [
    {
        q: 'Which year did the HNG internship start?',
        options: ['2014', '2012', '2015', '2016'],
        answer: [3]
    }, {
        q: 'The HNG internship lasts for _____ months',
        options: ['4', '3', '6', '8'],
        answer: [1]
    },
    {
        q: 'Who is the head of the HNG internship',
        options: ['Seyi Onifade', 'Mark Essien', 'Paschal Dozie', 'Neo Ighodaro'],
        answer: [0]
    },
    {
        q: 'Posting in the general, announcement and class channels leads to _____.',
        options: ['Express', 'Probation', 'Promotion', 'Nothing'],
        answer: [1]
    },
    {
        q: ' The pre-HNG internship program is known as____.',
        options: ['pre-hng', 'slack channel', 'start', 'start.ng'],
        answer: [3]
    }
]


totalQuestion.innerHTML = questions.length;
function load() {
    questionNumber.innerHTML = index+1;
    question.innerHTML = questions[questionIndex].q;
    opt1.innerHTML = questions[questionIndex].options[0];
    opt2.innerHTML = questions[questionIndex].options[1];
    opt3.innerHTML = questions[questionIndex].options[2];
    opt4.innerHTML = questions[questionIndex].options[3];
    index++;
   
}
 
function randomQuestions() {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = 0;
    if (index == questions.length){
        gameOver();
    }
    else{
        if (myArray.length > 0){
            for (let i = 0; i < myArray.length; i++){
                if (myArray[i] == randomNumber){
                    hitDuplicate = 1;
                    break;
                }
            } 
            if (hitDuplicate == 1){
                randomQuestions();
            }
            else {
                questionIndex = randomNumber;
                load();
                myArr.push(questionIndex);
            }
        }
            if (myArray.length == 0){
                questionIndex = randomNumber;
                load();
                myArr.push(questionIndex);
            }
    
        myArray.push(randomNumber);
    }
   
}


function check(element) {
    if (element.id == questions[questionIndex].answer){
       element.classList.add('correct'); 
        counter();
       score++;
        

    }
    else {
        element.classList.add('wrong');
    }
    disabledOptions();
}


function disabledOptions() {
    for (let i = 0; i < options.length; i++){
    options[i].classList.add('disabled');
    if (options[i].id == questions[questionIndex].answer){
        options[i].classList.add('correct');
    }
}
}

function enableOptions(){
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove('disabled', 'correct', 'wrong');
}
}
function validate() {
    if (!options[0].classList.contains('disabled')){
        alert("Please Select an Option");
    }
        else {
        randomQuestions();
        enableOptions();
        }
    }

function next(){
    validate();
}
function counter(){
    count++;
    scoreCount.innerHTML = count;
}
function gameOver() {
    end.classList.add('show');
    currentScore.innerHTML = score;
    totalObtainable.innerHTML = questions.length;
}
function startAgain (){
    window.location.reload();
}
window.onload = function(){
    randomQuestions()
}
