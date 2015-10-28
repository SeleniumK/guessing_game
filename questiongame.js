var numCorrect = 0;
var userName;
//constructor defining properties of Question
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
        if (parseInt(userAnswer) === myAns){
            alert(rightMessage);
            numCorrect += 1;
        } else if (parseInt(userAnswer) > myAns){
            alert(userName +", That is too high!\n" + this.response);
        } else if (parseInt(userAnswer) < myAns){
            alert("Too low, " + userName + ". " + this.response);
        }
    }
    this.checkYN = function(){
        if (userAnswer === myAns){
            alert(rightMessage);
            numCorrect += 1;
        } else {
            alert(userName + "! No!\n" + this.response);
        }
    }
}

//array defining question
var question = [
    new Question("Did I grow up in Bellingham?", "yes", "I grew up in Bellingham \n", "yn"),
    new Question("Do I eat meat?", "no", "I don't eat meat \n", "yn"),
    new Question("Do I play the violin?", "yes", "I have played violin for many years \n", "yn"),
    new Question("How many cats do I have?", 3, "I have 3 cats!", "num")
];
var numQuestions = question.length;

alert("Welcome to the Question Game! Press Enter to Continue");
userName = prompt("First, what's your name?");

//variable holding messages
var rightMessage = "That's right, " + userName + "!";
var invalidMessage = {
    "yn": "Please enter yes or no.",
    "num": "That's not a number! Try again"
};

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
        if (userAnswer != NaN) {
            valid = true
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

