function startGame() {
    document.getElementById("startB").innerHTML = "Restart";
    targetGoal()
}

function targetGoal() {
    var x = Math.floor((Math.random() * 10) + 1);
    document.getElementById("goal").innerHTML = x;
}