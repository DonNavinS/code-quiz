var optionsEl = document.querySelector("#options");
var questionEl = document.querySelector("#question");



function startQuiz() {

    startButton.remove()

    //Create first question
    var firstQ = document.createElement("p");
    firstQ.textContent = "Question 1: What is the answer to this question?";
    firstQ.className = "questions";
    questionEl.appendChild(firstQ);


    //Create list of options
    var option_1 = document.createElement("button");
    option_1.className = "correct-answer-button";
    option_1.textContent = "This is the correct answer";
    optionsEl.appendChild(option_1);

    var option_2 = document.createElement("button");
    option_2.className = "wrong-answer-button";
    option_2.textContent = "This is not correct";
    optionsEl.appendChild(option_2);

    var option_3 = document.createElement("button");
    option_3.className = "wrong-answer-button";
    option_3.textContent = "This is not correct";
    optionsEl.appendChild(option_3);

    var option_4 = document.createElement("button");
    option_4.className = "wrong-answer-button";
    option_4.textContent = "This is not correct";
    optionsEl.appendChild(option_4);

// Go to next question if correct answer is chosen
    option_1.addEventListener("click", firstAnswerCorrect);
    option_1.addEventListener("click", removePrevious);

// Go to next question if wrong answer is chosen
    option_2.addEventListener("click", firstAnswerWrong);
    option_2.addEventListener("click", removePrevious);
    option_3.addEventListener("click", firstAnswerWrong);
    option_3.addEventListener("click", removePrevious);
    option_4.addEventListener("click", firstAnswerWrong);
    option_4.addEventListener("click", removePrevious);


function removePrevious() {
        option_1.remove();
        option_2.remove();
        option_3.remove();
        option_4.remove();   
    }   
    
}


    

var startButton = document.querySelector("#start-button");
startButton.addEventListener("click", startQuiz);


function firstAnswerCorrect() {
    var option_1 = document.createElement("button");
    option_1.className = "wrong-answer-button";
    option_1.textContent = "This is now incorrect";
    optionsEl.appendChild(option_1);

    var option_2 = document.createElement("button");
    option_2.className = "correct-answer-button";
    option_2.textContent = "This is now the correct choice";
    optionsEl.appendChild(option_2);

    var option_3 = document.createElement("button");
    option_3.className = "wrong-answer-button";
    option_3.textContent = "This is still not correct";
    optionsEl.appendChild(option_3);

    var option_4 = document.createElement("button");
    option_4.className = "wrong-answer-button";
    option_4.textContent = "This is also not correct";
    optionsEl.appendChild(option_4);



    option_2.addEventListener("click", secondAnswerCorrect);
    option_2.addEventListener("click", removePrevious);


    option_1.addEventListener("click", secondAnswerWrong);
    option_1.addEventListener("click", removePrevious);
    option_3.addEventListener("click", secondAnswerWrong);
    option_3.addEventListener("click", removePrevious);
    option_4.addEventListener("click", secondAnswerWrong);
    option_4.addEventListener("click", removePrevious);

    function removePrevious() {
        option_1.remove();
        option_2.remove();
        option_3.remove();
        option_4.remove();   
    }   

};


function firstAnswerWrong() {
    var option_1 = document.createElement("button");
    option_1.className = "wrong-answer-button";
    option_1.textContent = "This is now incorrect";
    optionsEl.appendChild(option_1);

    var option_2 = document.createElement("button");
    option_2.className = "correct-answer-button";
    option_2.textContent = "This is now the correct choice";
    optionsEl.appendChild(option_2);

    var option_3 = document.createElement("button");
    option_3.className = "wrong-answer-button";
    option_3.textContent = "This is still not correct";
    optionsEl.appendChild(option_3);

    var option_4 = document.createElement("button");
    option_4.className = "wrong-answer-button";
    option_4.textContent = "This is also not correct";
    optionsEl.appendChild(option_4);

    option_2.addEventListener("click", correctAnswer);
    option_2.addEventListener("click", removePrevious);

    function removePrevious() {
        option_1.remove();
        option_2.remove();
        option_3.remove();
        option_4.remove();   
    }   



}


function secondAnswerCorrect() {
    var option_1 = document.createElement("button");
    option_1.className = "wrong-answer-button";
    option_1.textContent = "This is wrong";
    optionsEl.appendChild(option_1);

    var option_2 = document.createElement("button");
    option_2.className = "correct-answer-button";
    option_2.textContent = "This is no longer the correct choice";
    optionsEl.appendChild(option_2);

    var option_3 = document.createElement("button");
    option_3.className = "wrong-answer-button";
    option_3.textContent = "Nope";
    optionsEl.appendChild(option_3);

    var option_4 = document.createElement("button");
    option_4.className = "wrong-answer-button";
    option_4.textContent = "This is the answer to Q3";
    optionsEl.appendChild(option_4);

};


function secondAnswerWrong() {
    var option_1 = document.createElement("button");
    option_1.className = "wrong-answer-button";
    option_1.textContent = "This is now incorrect";
    optionsEl.appendChild(option_1);

    var option_2 = document.createElement("button");
    option_2.className = "correct-answer-button";
    option_2.textContent = "This is now the correct choice";
    optionsEl.appendChild(option_2);

    var option_3 = document.createElement("button");
    option_3.className = "wrong-answer-button";
    option_3.textContent = "This is still not correct";
    optionsEl.appendChild(option_3);

    var option_4 = document.createElement("button");
    option_4.className = "wrong-answer-button";
    option_4.textContent = "This is also not correct";
    optionsEl.appendChild(option_4);

    option_2.addEventListener("click", correctAnswer);
    option_2.addEventListener("click", removePrevious);

    function removePrevious() {
        option_1.remove();
        option_2.remove();
        option_3.remove();
        option_4.remove();   
    }   






}