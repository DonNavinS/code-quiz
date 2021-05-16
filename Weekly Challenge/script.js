var optionsEl = document.querySelector("#options");
var questionEl = document.querySelector("#question");

function startQuiz() {
    var firstQ = document.createElement("p");
    firstQ.textContent = "Question 1: What is the answer to this question?";
    firstQ.className = "questions";
    questionEl.appendChild(firstQ);

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
}

var startButton = document.querySelector("#start-button");
startButton.addEventListener("click", startQuiz)


function correctAnswer() {


}
option_1 = document.addEventListener("click", correctAnswer)