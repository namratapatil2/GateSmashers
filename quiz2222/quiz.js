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
        question : `If the tension in a cable supporting a lift moving upwards is twice the tension when the lift is moving downwards, the acceleration of the lift, is`,
        option : ['g/2','g/3','g/4','g/5'],
        answer : 'g/3'
    },
    {
        question : `Newton's law of Collision of elastic bodies states that when two moving bodies collide each other, their velocity of separation`,
        option : ['Is directly proportional to their velocity of approach','Is inversely proportional to their velocity of approach','Bears a constant ratio to their velocity of approach','Is equal to the sum of their velocities of approach'],
        answer : 'Bears a constant ratio to their velocity of approach'
    },
    {
        question : `A ball moving with a velocity of 5 m/sec impinges a fixed plane at an angle of 45° and its direction after impact is equally inclined to the line of impact. If the coefficient of restitution is 0.5, the velocity of the ball after impact will be`,
        option : [' 0.5 m/sec','1.5 m/sec','2.5 m/sec','3.5 m/sec'],
        answer : '2.5 m/sec'
    },
    {
        question : 'The mechanical advantage of an ideal machine is 100. For moving the local through 2 m, the effort moves through',
        option : ['0.02m','2m','2.5m','20m'],
        answer : '0.02m'
    },
    {
        question : '  The angle of projection at which the horizontal range and maximum height of a projectile are equal to',
        option : ['36deg','45deg','56deg','76deg'],
        answer : '76deg'
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