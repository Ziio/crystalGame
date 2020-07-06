function startGame() {
    document.getElementById("startB").innerHTML = "Restart";
    targetGoal();
    randomNumber();
}

function targetGoal() {
    var x = Math.floor((Math.random() * (100-25)) + 25);
    document.getElementById("goal").innerHTML = x;
}

function randomNumber() {
    var begin = 0;
    var blueButton = 0;
    var greenButton = 0;
    var redButton = 0;
    var yellowButton = 0;

    while (blueButton == begin || blueButton == greenButton || blueButton == redButton || blueButton == yellowButton) {
        blueButton = Math.floor((Math.random() * 10));
        document.getElementById("blueB").innerHTML = blueButton;
    }

    while (greenButton == begin || greenButton == blueButton || greenButton == redButton || greenButton == yellowButton) {
        greenButton = Math.floor((Math.random() * 10));
        document.getElementById("greenB").innerHTML = greenButton;
    }

    while (redButton == begin || redButton == blueButton || redButton == greenButton || redButton == yellowButton) {
        redButton = Math.floor((Math.random() * 10));
        document.getElementById("redB").innerHTML = redButton;
    }

    while (yellowButton == begin || yellowButton == blueButton || yellowButton == greenButton || yellowButton == redButton) {
        yellowButton = Math.floor((Math.random() * 10));
        document.getElementById("yellowB").innerHTML = yellowButton;
    }
    console.log(yellowButton);

}

randomNumber();

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

