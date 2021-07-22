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
        question : 'Evaluate limx → 1⁡[(xx – 1) / (xlog(x))].',
        option : ['e of power(e)','e','1','e of power(2)'],
        answer : '1'
    },
    {
        question : `x(t)=\lbrack(t-1)u(t-1)\rbrack-\lbrack(t-2)u(t-2)\rbrack-\lbrack(t-3)u(t-3)\rbrack+\lbrack(t-4)u(t-4)\rbrack is`,
        option : ['11/3','7/3','1/5','5/3'],
        answer : '5/3'
    },
    {
        question : ' x(t)=\lbrack(t-1)u(t-1)\rbrack-\lbrack(t-2)u(t-2)\rbrack-\lbrack(t-3)u(t-3)\rbrack+\lbrack(t-4)u(t-4)\rbrack is',
        option : ['9.5 to 10.5','10.5 to 20.5','9.5 to 11.5', '8.5 to 10.5'],
        answer : '9.5 to 10.5'
    },
    {
        question : 'The Laplace Transform of ft=e2tsin5tut is',
        option : ['5s2-4s+29','5s2+5',' s-2s2-4s+29','5s+5'],
        answer : '5s2-4s+29'
    },
    {
        question : 'The transfer function of a system is YSRS=SS+2  The steady state output y(t)  is A cos2t+φ for the input cos2t The values of A and φ respectvely are',
        option : ['12,-45°','12,+45°','2,-45°','2,+45°'],
        answer : '12,+45°'
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