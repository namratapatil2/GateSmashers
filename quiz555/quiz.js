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
        question : 'A sinusoid x(t) of unknown frequency is sampled by an impulse train of period 20 ms. The resulting sample train is next applied to an ideal lowpass filter with a cutoff at 25 Hz. The filter output is seen to be a sinusoid of frequency 20 Hz. This means that x(t) has a frequency of',
        option : ['10 Hz','60 Hz','30 Hz','9Hz'],
        answer : '30 Hz'
    },
    {
        question : `A differentiable non constant even function x(t) has a derivative y(t), and their respective Fourier Transforms are Xω and Yω. Which of the following statements is TRUE?`,
        option : [' Xω and Yω are both real',' Xω is real and Yω is imaginary',' Xω and Yω are both imaginary.','Xω and Yω are both imaginary'],
        answer : ' Xω is real and Yω is imaginary'
    },
    {
        question : 'The impulse response of a system is h(t) = t u(t) . For an input u(t -1) , the output is ',
        option : ['t22u(t)','t(t-1)2u(t-1)',' (t2-1)2u(t-1)'],
        answer : '(C) (t-1)22u(t-1)'
    },
    {
        question : `Which one of the following statements is NOT TRUE for a continuous time causal and stable LTI system? `,
        option : ['All the poles of the system must lie on the left side of the jω axis',' Zeros of the system can lie anywhere in the s-plane',' All the poles must lie within s =1','All the roots of the characteristic equation must be located on the left side of the jω axis'],
        answer : ' All the poles must lie within s =1'
    },
    {
        question : `A differentiable non constant even function x(t) has a derivative y(t), and their respective Fourier Transforms are Xω and Yω. Which of the following statements is TRUE?`,
        option : [' Xω and Yω are both real',' Xω is real and Yω is imaginary',' Xω and Yω are both imaginary.','Xω and Yω are both imaginary'],
        answer : ' Xω is real and Yω is imaginary'
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