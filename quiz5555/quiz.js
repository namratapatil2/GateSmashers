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
        question : 'A 49 kg lady stands on a spring scale in an elevator. During the first 5 sec, starting from rest, the scale reads 69 kg. The velocity of the elevator will be',
        option : [' 10 m/sec',' 15 m/sec',' 20 m/sec',' 25 m/sec'],
        answer : '20 MB'
    },
    {
        question : `A rod AB carries three loads of 30 N, 70 N and 100 N at distances of 20 mm, 90 mm and 150 mm respectively from A. Neglecting the weight of the rod, the point at which the rod will balance is `,
        option : ['109.5 mm from A',' 119.5 mm from A','125.5 mm from A','  132.5 mm from A'],
        answer : '109.5 mm from A'
    },
    {
        question : 'More than one word are put in one cache block to ',
        option : ['exploit the temporal locality of reference in a program','exploit the spatial locality of reference in a program','reduce the miss penalty', ' none of the above'],
        answer : 'exploit the spatial locality of reference in a program'
    },
    {
        question : 'A body of weight ‘w’ placed on an inclined plane is acted upon by a force ‘P’ parallel to the plane which causes the body just to move up the plane. If the angle of inclination of the plane is ‘θ’ and angle of friction is ‘φ’, the minimum value of ‘P’, is ',
        option : ['w sin (φ - θ)/cos φ',' w sin (θ - φ)/cos φ',' w cos (θ + φ)/cos φ',' w sinθ  cos(θ - φ)/sin φ'],
        answer : ' w sin (θ - φ)/cos φ'
    },
    {
        question : 'A 50 kg boy climbs up a 8 m rope in gymnasium in 10 sec. The average power developed by the boy is approximately',
        option : [' 400 watts',' 500 watts','4000 watts','none of these'],
        answer : '400 watts'
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