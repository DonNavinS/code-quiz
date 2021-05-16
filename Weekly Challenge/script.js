var optionsEl = document.querySelector("#options");
var questionEl = document.querySelector("#question");
var titleEl = document.querySelector("#title");
var instructionsEl = document.querySelector("#instructions");
var timerEl = document.querySelector("#timer");
var finalEl = document.querySelector("#end-of-game");
var tableEl = document.querySelector("#table");

document.querySelector("#table").style.display = "none";

var timer = 90
var quizScore;
var timerInterval;

function startTimer() {

var timeDisplay = document.createElement("h2");
timeDisplay.textContent = timer;
timerEl.appendChild(timeDisplay);

 timerInterval = setInterval(() => {
    timer --;
    timeDisplay.textContent = timer;

    if (timer <=0) {
        clearInterval(timerInterval);
        finalScore();
    };



}, 1000);
};

function stopTimer(){
    
}
function timePenalty() {
    if (timer>=10) {
    timer -=10;
} else {
    timer=0
}
}



function startQuiz() {

    startButton.remove()

    //Create first question
    var firstQ = document.createElement("p");
    firstQ.textContent = "Question 1: What is the answer to this question?";
    firstQ.className = "questions";
    questionEl.appendChild(firstQ);


    //Create list of options
    var option_1 = document.createElement("button");
    option_1.className = "answer-button";
    option_1.textContent = "This is the correct answer";
    optionsEl.appendChild(option_1);

    var option_2 = document.createElement("button");
    option_2.className = "answer-button";
    option_2.textContent = "This is not correct";
    optionsEl.appendChild(option_2);

    var option_3 = document.createElement("button");
    option_3.className = "answer-button";
    option_3.textContent = "This is not correct";
    optionsEl.appendChild(option_3);

    var option_4 = document.createElement("button");
    option_4.className = "answer-button";
    option_4.textContent = "This is not correct";
    optionsEl.appendChild(option_4);

// Go to next question if correct answer is chosen
    option_1.addEventListener("click", secondQuestion);
    option_1.addEventListener("click", removePrevious);

// Go to next question if wrong answer is chosen
    option_2.addEventListener("click", secondQuestion);
    option_2.addEventListener("click", removePrevious);
    option_2.addEventListener("click", timePenalty);
    option_3.addEventListener("click", secondQuestion);
    option_3.addEventListener("click", removePrevious);
    option_3.addEventListener("click", timePenalty);
    option_4.addEventListener("click", secondQuestion);
    option_4.addEventListener("click", removePrevious);
    option_4.addEventListener("click", timePenalty);


function removePrevious() {
        option_1.remove();
        option_2.remove();
        option_3.remove();
        option_4.remove();   
        firstQ.remove();
    }   
    
}


    

var startButton = document.querySelector("#start-button");
startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", startTimer);


function secondQuestion() {

    var secondQ = document.createElement("p");
    secondQ.textContent = "Question 2: What is the correct answer now?";
    secondQ.className = "questions";
    questionEl.appendChild(secondQ);

    var option_1 = document.createElement("button");
    option_1.className = "answer-button";
    option_1.textContent = "This is now incorrect";
    optionsEl.appendChild(option_1);

    var option_2 = document.createElement("button");
    option_2.className = "answer-button";
    option_2.textContent = "This is now the correct choice";
    optionsEl.appendChild(option_2);

    var option_3 = document.createElement("button");
    option_3.className = "answer-button";
    option_3.textContent = "This is still not correct";
    optionsEl.appendChild(option_3);

    var option_4 = document.createElement("button");
    option_4.className = "answer-button";
    option_4.textContent = "This is also not correct";
    optionsEl.appendChild(option_4);



    option_2.addEventListener("click", thirdQuestion);
    option_2.addEventListener("click", removePrevious);


    option_1.addEventListener("click", thirdQuestion);
    option_1.addEventListener("click", removePrevious);
    option_1.addEventListener("click", timePenalty);
    option_3.addEventListener("click", thirdQuestion);
    option_3.addEventListener("click", removePrevious);
    option_3.addEventListener("click", timePenalty);
    option_4.addEventListener("click", thirdQuestion);
    option_4.addEventListener("click", removePrevious);
    option_4.addEventListener("click", timePenalty);

    function removePrevious() {
        option_1.remove();
        option_2.remove();
        option_3.remove();
        option_4.remove();   
        secondQ.remove();
    }   

};



function thirdQuestion() {

    var thirdQ = document.createElement("p");
    thirdQ.textContent = "Question 3: How bout now";
    thirdQ.className = "questions";
    questionEl.appendChild(thirdQ);


    var option_1 = document.createElement("button");
    option_1.className = "answer-button";
    option_1.textContent = "This is wrong";
    optionsEl.appendChild(option_1);

    var option_2 = document.createElement("button");
    option_2.className = "answer-button";
    option_2.textContent = "This is no longer the correct choice";
    optionsEl.appendChild(option_2);

    var option_3 = document.createElement("button");
    option_3.className = "answer-button";
    option_3.textContent = "Nope";
    optionsEl.appendChild(option_3);

    var option_4 = document.createElement("button");
    option_4.className = "answer-button";
    option_4.textContent = "This is the answer to Q3";
    optionsEl.appendChild(option_4);

    option_2.addEventListener("click", fourthQuestion);
    option_2.addEventListener("click", removePrevious);


    option_1.addEventListener("click", fourthQuestion);
    option_1.addEventListener("click", removePrevious);
    option_1.addEventListener("click", timePenalty);
    option_3.addEventListener("click", fourthQuestion);
    option_3.addEventListener("click", removePrevious);
    option_3.addEventListener("click", timePenalty);
    option_4.addEventListener("click", fourthQuestion);
    option_4.addEventListener("click", removePrevious);
    option_4.addEventListener("click", timePenalty);


    function removePrevious() {
        option_1.remove();
        option_2.remove();
        option_3.remove();
        option_4.remove();   
        thirdQ.remove();
    }   

};

function fourthQuestion() {

    var fourthQ = document.createElement("p");
    fourthQ.textContent = "Question 4: What's the answer to this one";
    fourthQ.className = "questions";
    questionEl.appendChild(fourthQ);


    var option_1 = document.createElement("button");
    option_1.className = "answer-button";
    option_1.textContent = "This is the answer";
    optionsEl.appendChild(option_1);

    var option_2 = document.createElement("button");
    option_2.className = "answer-button";
    option_2.textContent = "This is not it";
    optionsEl.appendChild(option_2);

    var option_3 = document.createElement("button");
    option_3.className = "answer-button";
    option_3.textContent = "Incorrect";
    optionsEl.appendChild(option_3);

    var option_4 = document.createElement("button");
    option_4.className = "answer-button";
    option_4.textContent = "This was the answer to Q3";
    optionsEl.appendChild(option_4);

    option_2.addEventListener("click", fifthQuestion);
    option_2.addEventListener("click", removePrevious);


    option_1.addEventListener("click", fifthQuestion);
    option_1.addEventListener("click", removePrevious);
    option_1.addEventListener("click", timePenalty);
    option_3.addEventListener("click", fifthQuestion);
    option_3.addEventListener("click", removePrevious);
    option_3.addEventListener("click", timePenalty);
    option_4.addEventListener("click", fifthQuestion);
    option_4.addEventListener("click", removePrevious);
    option_4.addEventListener("click", timePenalty);

    function removePrevious() {
        option_1.remove();
        option_2.remove();
        option_3.remove();
        option_4.remove();   
        fourthQ.remove();
    }   

};

function fifthQuestion() {

    var fifthQ = document.createElement("p");
    fifthQ.textContent = "Question 5: This is the last one";
    fifthQ.className = "questions";
    questionEl.appendChild(fifthQ);


    var option_1 = document.createElement("button");
    option_1.className = "answer-button";
    option_1.textContent = "No good";
    optionsEl.appendChild(option_1);

    var option_2 = document.createElement("button");
    option_2.className = "answer-button";
    option_2.textContent = "This is correct now ";
    optionsEl.appendChild(option_2);

    var option_3 = document.createElement("button");
    option_3.className = "answer-button";
    option_3.textContent = "not the one";
    optionsEl.appendChild(option_3);

    var option_4 = document.createElement("button");
    option_4.className = "answer-button";
    option_4.textContent = "wrong";
    optionsEl.appendChild(option_4);

    option_2.addEventListener("click", finalScore);
    option_2.addEventListener("click", removePrevious);
    option_2.addEventListener("click", timerCorrection);


    option_1.addEventListener("click", finalScore);
    option_1.addEventListener("click", removePrevious);
    option_1.addEventListener("click", timePenalty);
    option_3.addEventListener("click", finalScore);
    option_3.addEventListener("click", removePrevious);
    option_3.addEventListener("click", timePenalty);
    option_4.addEventListener("click", finalScore);
    option_4.addEventListener("click", removePrevious);
    option_4.addEventListener("click", timePenalty);

    function removePrevious() {
        option_1.remove();
        option_2.remove();
        option_3.remove();
        option_4.remove();   
        fifthQ.remove();
    }   

};

function timerCorrection() {
    timer-=10;
}

function finalScore() {
    
clearInterval(timerInterval);

titleEl.remove();
instructionsEl.remove();
questionEl.remove();
optionsEl.remove();


var endOfQuiz = document.createElement("h1")
endOfQuiz.classname = "end-of-quiz";
endOfQuiz.textContent = "This is your final Score!";
finalEl.appendChild(endOfQuiz);

var initials = document.createElement("input");
initials.type = "text";
initials.placeholder= "Type in your initials here!";
initials.id = "initials";
initials.className = "initials";
finalEl.appendChild(initials);

var submitButton = document.createElement("button");
submitButton.innerHTML = "Submit"
submitButton.className = "submit-button";
finalEl.appendChild(submitButton);

document.querySelector("#table").style.display = "block";



timer += 10

submitButton.addEventListener("click", function() {
    localStorage.setItem(initials.value, timer)
    tableEl.innerHTML += initials.value + ": " + timer + ";  " ;
})


 for (var i = 0 ; i<localStorage.length ; i++) {
    tableEl.innerHTML += localStorage.key(i) + ": " + localStorage.getItem(localStorage.key(i)) + ";  ";
}

}


