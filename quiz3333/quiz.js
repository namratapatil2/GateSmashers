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
        question : 'The artificial activity, which indicates that an activity following it cannot be started unless, the preceding activity is complete, is known as',
        option : ['Event','Free float','Artificial','Dummy'],
        answer : 'Dummy'
    },
    {
        question : ' If ‘F’ is the fixed cost, ‘V’ is the variable cost per unit (or total variable costs) and ‘P’ is the selling price of each unit (or total sales value), then break-even point is equal to',
        option : ['(F × V)/P',' (F × P)/V','F/[1 + (V/P)]','F/[1 - (V/P)]'],
        answer : 'F/[1 - (V/P)]'
    },
    {
        question : ' A big advantage of PERT over Gantt charts is that in the former case',
        option : [' Activities and events are clearly shown','Activity times are clear','Interrelationship among activities is clearly shown', ' Early start and late finish of an activity are clearly marked'],
        answer : 'Interrelationship among activities is clearly shown'
    },
    {
        question : ' The determination of standard time in a complex job system is best done through',
        option : [' Develop effective methods in advance of the beginning of production',' Improve existing methods','Establish time standards',' All of the above'],
        answer : ' All of the above'
    },
    {
        question : ' If (R) is the base rate guaranteed per hour, (S) is the standard time for the job and (T) is the actual time, then according to Rowan plan, wages for the job will be',
        option : ['TR + [(S - T)/S] × R','TR','TR + (S - T) × R','TR + [(S - T)/2] × R'],
        answer : '7 MSS'
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