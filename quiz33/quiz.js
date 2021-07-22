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
        question : 'The protocol data unit(PDU) for the application layer in the Internet stack is',
        option : ['Segment','Datagram','Message','Frame'],
        answer : 'Message'
    },
    {
        question : 'Which of the following transport layer protocolss is used to support electronic mail?',
        option : ['STMP','IP','TCP','UDP'],
        answer : 'TCP'
    },
    {
        question : ' In the IPv4 addressing format, the number of networks allowed under Class C addresses is',
        option : ['2^14','2^7','2^21', '2^24'],
        answer : '10hr'
    },
    {
        question : 'An Internet Service Provider(ISP) has the following chunk of CIDR-based IP addresses available with it:245.248.128.0/20. The ISP wants to give half of this chunk of addreses to Organization A, and a quarter to Organization B, while retaining the remaining with itself. Which of the following is a valid allocation of addresses to A and B?',
        option : [' 245.248.136.0/21 and 245.248.128.0/22','245.248.128.0/21 and 245.248.128.0/22','245.248.132.0/22 and 245.248.132.0/21','245.248.136.0/22 and 245.248.132.0/21'],
        answer : ' 245.248.136.0/21 and 245.248.128.0/22'
    },
    {
        question : 'Consider an instance of TCP’s Additive Increase Multiplicative Decrease(AIMD) algorithm where the window size at the start of the slow start phase is 2 MSS and the threshold at the start of the first transmission is 8 MSS. Assume that a time out occurs during the fifth transmission. Find the congestion window size at the end of the tenth transmission.',
        option : ['8 MSS','14 MSS','7 MSS','12 MSS'],
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