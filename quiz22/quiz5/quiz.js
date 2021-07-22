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
        question : 'Apple costs L rupees per kilogram for first 30kgs and Q rupees per kilogram for each additional kilogram. If the price of 33 kilograms is 11.67 and for 36 kgs of Apples is 12.48 then the cost of first 10 kgs of Apples is?',
        option : ['362','1023','117','281'],
        answer : '11'
    },
    {
        question : 'Of a set of 30 numbers, average of first 10 numbers = average of last 20 numbers. Then the sum of the last 20 numbers is?',
        option : ['2xsun of ten numbers','2xsum of last ten numbers','sum of ten ten numbers','can not'],
        answer : '11.5'
    },
    {
        question : `The wages of 24 men and 16 women amounts to rs 11600 per day. if half of the men and 37 women earn same money. the daily wages paid to each man is?`,
        option : ['375','400','350', '325'],
        answer : '350'
    },
    {
        question : 'The Sum of ages of two siblings Akshat and Anubhav is 56 years. After the time span of 4 years the age of the Akshat will be three times that of the Anubhav. What is the present age of the Anubhav?',
        option : ['12yrs','15yrs','16yrs','13yrs'],
        answer : '12yrs'
    },
    {
        question : 'Visitors to show were charged Rs.15 each on the first day. Rs.7.50 on the second day, Rs.2.50 on the third day and total attendance on the three days were in ratio 2:5:13 respectively. The average charge per person for the whole show is?',
        option : ['3','4.50','5','7.50'],
        answer : '5'
    },
    {
        question : ' A sum invested in compound interest (CI) at a certain rate for 3 years earns the same interest as it would earn by the way of an investment in Simple Interest (SI) at the rate of 18.2% for four years. How much more or less in the percentage rate in case of the CI than that in case of the SI?',
        option : ['16.52','20.63','18.43','21.25'],
        answer : '20.63'
    },
    {
        question : 'Of a set of 30 numbers, average of first 10 numbers = average of last 20 numbers. Then the sum of the last 20 numbers is?',
        option : ['2xsun of ten numbers','2xsum of last ten numbers','sum of ten ten numbers','can not'],
        answer : '11.5'
    },
    {
        question : `The wages of 24 men and 16 women amounts to rs 11600 per day. if half of the men and 37 women earn same money. the daily wages paid to each man is?`,
        option : ['375','400','350', '325'],
        answer : '350'
    },
    {
        question : 'Raju lends Rs 3000 to Bharath and a certain sum to Charan at the same time of 6% per annum simple interest.If after 5 years ,Raju altogether receives Rs 1650 as interest from Bharath and Charan, What is the sum lent to charan ?',
        option : ['2500','3300','2750','3250'],
        answer : '2500'
    },
    {
        question : ' A sum invested in compound interest (CI) at a certain rate for 3 years earns the same interest as it would earn by the way of an investment in Simple Interest (SI) at the rate of 18.2% for four years. How much more or less in the percentage rate in case of the CI than that in case of the SI?',
        option : ['16.52','20.63','18.43','21.25'],
        answer : '20.63'
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