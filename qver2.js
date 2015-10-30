//intro code. Beginning alerts
alert("Welcome to the Question Game! Press Enter to Continue");
var userName = prompt("First, what's your name?");

//variables
var numCorrect = 0;
var rightMessage = "That's right, " + userName + "! ";
var wrongMessage = "That's not right " + userName + "! ";
var highMessage = userName + ", That is too high! ";
var lowMessage = userName +", That is too low! ";
var invalidMessage = {
    "yn": "Please enter yes or no.",
    "num": "That's not a number! Try again"
};

//constructor defining properties of Question
function Question(myQues, myAns, response, myType, answerLoc, picLoc) {
    this.myQues = myQues;
    this.myAns = myAns;
    this.response = response;
    this.myType = myType;
    var ansContent = "";
    this.answerLoc = answerLoc;
    this.picLoc = picLoc;
    var ans = document.getElementById(this.answerLoc);
    var pic = document.getElementById(this.picLoc);
    this.isItCorrect = function () {
        if (this.myType === 'num'){
            question[i].checkNum();
        } else if (this.myType === 'yn') {
            question[i].checkYN();
        }
    }
    this.checkNum = function() {
        userAnswer = parseInt(userAnswer);
        if (userAnswer === myAns){
            ansContent = rightMessage + this.response;
            numCorrect += 1;
            pic.className = "correct";
            ans.className = "correct";
        } else if (userAnswer > myAns){
            ansContent = highMessage + this.response;
        } else if (userAnswer < myAns){
            ansContent = lowMessage + this.response;
        }
        ans.innerHTML = ansContent;
    }
    this.checkYN = function(){
        if (userAnswer === myAns){
            ansContent = rightMessage + this.response;
            numCorrect += 1;
            pic.className = "correct";
            ans.className = "correct";
        } else {
            ansContent = wrongMessage + this.response;
        }
        ans.innerHTML = ansContent
    }
}

//array defining question
var question = [
    new Question("Did I grow up in Bellingham?", "yes", "I grew up in Bellingham \n", "yn", "answer1", "pic1"),
    new Question("Do I eat meat?", "no", "I don't eat meat \n", "yn", "answer2", "pic2"),
    new Question("Do I play the violin?", "yes", "I have played violin for many years \n", "yn", "answer3", "pic3"),
    new Question("How many cats do I have?", 3, "I have 3 cats!", "num", "answer4", "pic4"),
    new Question("Is my favorite author Hemingway?", "no", "I can't stand him. \n", "yn", "answer5", "pic5"),
    new Question("How many wives did Henry the 8th have?", 6, "He had 6, the cad. \n", "num", "answer6", "pic6")

];

var numQuestions = question.length;

//function to check if answer is valid input
function validateAnswer(userAnswer, myType) {
    var valid = false;
    if (myType === "yn") {
        userAnswer = userAnswer.toLowerCase();
        if (userAnswer == "yes" || userAnswer == "no") {
            valid = true;
        }
    } else if(myType === "num") {
        userAnswer = parseInt(userAnswer);
        if ((userAnswer != NaN) && (userAnswer != "")) {
            valid = true;
        }
    }
    return valid;
}

//looping through array: Prompts user, checks if input is valid, if valid -
//checks userAnswer against my answer
for (var i = 0; i < question.length; i++) {
    var validInput = false;
    var message = question[i].myQues;

    while(!validInput) {
        var userAnswer = prompt(message).toLowerCase();

        if ( validateAnswer(userAnswer, question[i].myType) ){
            validInput = true;
            question[i].isItCorrect();
      } else {
            message = invalidMessage[question[i].myType] + "\n\n" + question[i].myQues;
      }
  }
}

//final tallying of correct answer and alert to user
if (numCorrect < numQuestions) {
    alert("You got " + numCorrect + " out of " + numQuestions + " right! \n\n" +
        "Better luck next time, " + userName);
} else {
    alert(userName +"! You got 'em all right. Congratulations.");
}
