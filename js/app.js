var begin = 0;
var blueButton = 0;
var greenButton = 0;
var redButton = 0;
var yellowButton = 0;
var score = 0;
var goal = 0;



function startGame() {
    begin = 0;
    blueButton = 0;
    greenButton = 0;
    redButton = 0;
    yellowButton = 0;
    score = 0;
    goal = 0;

    document.getElementById("startB").innerHTML = "Restart";
    document.getElementById("currentScore").innerHTML = "0";
    targetGoal();
    randomNumber();
}

function targetGoal() {
    goal = Math.floor((Math.random() * (100-25)) + 25);
    document.getElementById("goal").innerHTML = goal;

}

function randomNumber() {
    while (blueButton == begin || blueButton == greenButton || blueButton == redButton || blueButton == yellowButton) {
        blueButton = Math.floor((Math.random() * 10));
    }

    while (greenButton == begin || greenButton == blueButton || greenButton == redButton || greenButton == yellowButton) {
        greenButton = Math.floor((Math.random() * 10));
    }

    while (redButton == begin || redButton == blueButton || redButton == greenButton || redButton == yellowButton) {
        redButton = Math.floor((Math.random() * 10));
    }

    while (yellowButton == begin || yellowButton == blueButton || yellowButton == greenButton || yellowButton == redButton) {
        yellowButton = Math.floor((Math.random() * 10));
    }

    console.log(blueButton, greenButton, redButton, yellowButton);
    console.log(score, goal);
}

function blueAdd() {
    score = blueButton + score;
    document.getElementById("currentScore").innerHTML = score;
    console.log(score);
    bigF();
    bigW();
}

function greenAdd() {
    score = greenButton + score;
    document.getElementById("currentScore").innerHTML = score;
    console.log(score);
    bigF();
    bigW();
}

function redAdd() {
    score = redButton + score;
    document.getElementById("currentScore").innerHTML = score;
    console.log(score);
    bigF();
    bigW();
}

function yellowAdd() {
    score = yellowButton + score;
    document.getElementById("currentScore").innerHTML = score;
    console.log(score);
    bigF();
    bigW();
}

function bigF() {
    if (score > goal) {
        document.getElementById("currentScore").innerHTML = "Loser!";
    }
}

function bigW() {
    if (score === goal) {
        document.getElementById("currentScore").innerHTML = "Winner!";
    }
}











// function blueButton() {
//     var x = Math.floor((Math.random() * 10) + 1);
//     document.getElementById("blueB").innerHTML = x;
// }   while(blueButton === greenButton);

// function greenButton() {
//     var x = Math.floor((Math.random() * 10) + 1);
//     document.getElementById("greenB").innerHTML = x;
// }

// function redButton() {
//     var x = Math.floor((Math.random() * 10) + 1);
//     document.getElementById("redB").innerHTML = x;
// }

// function yellowButton() {
//     var x = Math.floor((Math.random() * 10) + 1);
//     document.getElementById("yellowB").innerHTML = x;
// }

