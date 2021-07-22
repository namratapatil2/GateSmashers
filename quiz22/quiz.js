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
        question : `employee (name, salary, deptno) and department (deptno, deptname, address)
        Which of the following queries cannot be expressed using the basic relational algebra
        operations (U, -, x, π, σ, p)?`,
        option : [' Department address of every employee',' Employees whose name is the same as their department name',' The sum of all employees’ salaries','All employees of a given department'],
        answer : ' The sum of all employees’ salaries'
    },
    {
        question : `x  y  z
        1  4  2
        1  5  3
        1  6  3
        3  2  2 
        Which of the following functional dependencies are satisfied by the instance? `,
        option : ['XY -> Z and Z -> Y','YZ -> X and Y -> Z','YZ -> X and X -> Z','XZ -> Y and Y -> X'],
        answer : 'YZ -> X and Y -> Z'
    },
    {
        question : `Given relations r(w, x) and s(y, z), the result of
        select distinct w, x
        from r, s
        is guaranteed to be same as r, provided `,
        option : ['r has no duplicates and s is non-empty','r and s have no duplicates','s has no duplicates and r is non-empty', 'r and s have the same number of tuples'],
        answer : 'r has no duplicates and s is non-empty'
    },
    {
        question : 'In SQL, relations can contain null values, and comparisons with null values are treated as unknown. Suppose all comparisons with a null value are treated as false. Which of the following pairs is not equivalent?',
        option : ['x = 5, not (not (x = 5)',' x = 5, x > 4 and x < 6, where x is an integer','x < 5, not(x = 5)','none of the above'],
        answer : 'x < 5, not(x = 5)'
    },
    {
        question : ' Consider a schema R(A, B, C, D) and functional dependencies A -> B and C -> D. Then the decomposition of R into R1 (A, B) and R2(C, D) is',
        option : ['dependency preserving and loss less join','loss less join but not dependency preserving','dependency preserving but not loss less join','not dependency preserving and not loss less join'],
        answer : 'dependency preserving but not loss less join'
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