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
        question : 'A block of weight 50 kg is placed on a horizontal plane. When a horizontal force of 18 kg is applied, the block is just on the point of motion. The angle of friction is',
        option : [' 17° 48',' 18° 48',' 19° 48','20° 48'],
        answer : ' 19° 48'
    },
    {
        question : 'A car goes round a curve of radius 100 m at 25 m/sec. The angle to the horizontal at which the road must be banked to prevent sideways friction on the car wheels is tan"1 x, where x is (Assume g = 10 m/sec²)',
        option : ['3/8','1/2','9/5','5/8'],
        answer : '5/8'
    },
    {
        question : 'The diagram showing the point of application and line of action of forces in their plane is called',
        option : ['Vector diagram','Space diagram','Force diagram','Funicular diagram'],
        answer : 'Space diagram'
    },
    {
        question : 'A block in the shape of a parallelepiped of sides 1m × 2m × 3m lies on the surface. Which of the faces gives maximum stable block?',
        option : ['1 m × 2 m','2 m × 3 m','1 m × 3 m','Equally stable on all faces'],
        answer : '2 m × 3 m'
    },
    {
        question : 'The diagram showing the point of application and line of action of forces in their plane is called',
        option : ['Vector diagram','Space diagram','Force diagram','Funicular diagram'],
        answer : 'Space diagram'
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