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
        question : 'Two forces act an angle of 120°. If the greater force is 50 kg and their resultant is perpendicular to the smaller force, the smaller force is ',
        option : ['20kg',' 25kg',' 30kg','35kg'],
        answer : ' 25kg'
    },
    {
        question : ` The necessary condition of equilibrium of a body is:`,
        option : ['Algebraic sum of horizontal components of all the forces must be zero','Algebraic sum of vertical components of all the forces must be zero','Algebraic sum of the moments of the forces about a point must be zero, but not deadlock',' All (a), (b) and (c)'],
        answer : ' All (a), (b) and (c)'
    },
    {
        question : 'Which of the following represents the state of neutral equilibrium?',
        option : ['A cube resting on one edge','A smooth cylinder lying on a curved surface','A smooth cylinder lying on a convex surface', 'None of the above'],
        answer : 'None of the above'
    },
    {
        question : 'The unit of force in C.G.S. system of units, is called',
        option : ['Dyne','Newton','Kg','All the above'],
        answer : 'Dyne'
    },
    {
        question : 'The equation of motion of a particle starting from rest along a straight line is x = t3 - 3t2+ 5. The ratio of the accelerations after 5 sec and 3 sec will be',
        option : ['2','3',' 4','5'],
        answer : '5'
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