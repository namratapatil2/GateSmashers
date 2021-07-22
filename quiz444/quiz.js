const startingMinutes = 10;
let time = startingMinutes * 60;
const countdownEl = document.getElementById('countdown');

// setInterval{updateCountdown , 1000};

function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;

    if(time<=0){
        setTimeout();
    }

    time--;
}


var questionBank= [
    {
        question : `The value of \int\limits_{-\infty}^{+\infty}\mathrm e^{-\mathrm t}\mathrm\delta\left(2\mathrm t-2\right)\mathrm{dt} where δt is the Dirac delta function, is`,
        option : ['12e','2e','1e2','12e2'],
        answer : '12e'
    },
    {
        question : ' Consider a causal LTI system characterized by differential equation dytdt+16yt=3xt. The response of the system to the input xt=3e-t3ut, where u(t) denotes the unit step function, is',
        option : ['9e-t3ut','9e-t6ut','9e-t3ut-6e-t6ut','54e-t6ut-54e-t3ut'],
        answer : '54e-t6ut-54e-t3ut'
    },
    {
        question : `The solution of the differential equation, for t>0,y''t+2y't+yt=0 with initial conditions y0=0 and y'0=1 is(ut denotes the unit step function)`,
        option : ['te-tut','e-t-te-tut','-e-t+te-tut','e-tut'],
        answer : 'te-tut'
    },
    {
        question : `Consider an LTI system with transfer function
        HS=1ss+4
        If the input to the system is cos3t and the steady state output is Asin3t+α, then the value of A is`,
        option : ['1/30','1/15','3/4','4/3'],
        answer : '1'
    },
    {
        question : `The value of \int\limits_{-\infty}^{+\infty}\mathrm e^{-\mathrm t}\mathrm\delta\left(2\mathrm t-2\right)\mathrm{dt} where δt is the Dirac delta function, is`,
        option : ['12e','2e','1e2','12e2'],
        answer : '12e'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();
setInterval(updateCountdown , 1000);