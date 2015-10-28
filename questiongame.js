var numCorrect = 0;
var userName;

function Question(myQues, myAns, response, myType) {
    this.myQues = myQues;
    this.myAns = myAns;
    this.response = response;
    this.myType = myType;
    this.isItCorrect = function () {
        if (this.myType === 'num'){
            question[i].checkNum();
        } else if (this.myType === 'yn') {
            question[i].checkYN();
        }
    }
    this.checkNum = function() {
        if (parseInt(userAnswer) == NaN) {
            userAnswer = prompt("Please enter a number\n" + question[i].myQues).toLowerCase();
            question[i].isItCorrect();
        } else if (parseInt(userAnswer) === myAns){
            alert(rightMessage);
            numCorrect += 1;
        } else if (parseInt(userAnswer) > myAns){
            alert(userName +", That is too high!\n" + this.response);
        } else if (parseInt(userAnswer) < myAns){
            alert("Too low, " + userName + ". " + this.response);
        }
    }
    this.checkYN = function(){
        if (userAnswer != "yes" && userAnswer != "no") {
            userAnswer = prompt("Please enter yes or no\n" + question[i].myQues).toLowerCase();
            question[i].isItCorrect();
        } else if (userAnswer === myAns){
            alert(rightMessage);
            numCorrect += 1;
        } else if (userAnswer != myAns){
            alert(userName + "! No!\n" + this.response);
        }
    }
}

var question = [
    new Question("Did I grow up in Bellingham?", "yes", "I grew up in Bellingham \n", "yn"),
    new Question("Do I eat meat?", "no", "I don't eat meat \n", "yn"),
    new Question("Do I play the violin?", "yes", "I have played violin for many years \n", "yn"),
    new Question("How many cats do I have?", 3, "I have 3 cats!", "num"),
    new Question("Is my favorite author Hemingway?", "no", "I can't stand him. \n", "yn"),
];
var numQuestions = question.length;

alert("Welcome to the Question Game! Press Enter to Continue");
userName = prompt("First, what's your name?");
var rightMessage = "That's right, " + userName + "!";

for (var i = 0; i < question.length; i++) {
    userAnswer = prompt(question[i].myQues).toLowerCase();
    question[i].isItCorrect();
}

if (numCorrect < numQuestions) {
    alert("You got " + numCorrect + " out of " + numQuestions + " right! \n\n" +
        "Better luck next time, " + userName);
} else {
    alert(userName +"! You got 'em all right. Congratulations.");
}

