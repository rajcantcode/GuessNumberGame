'use strict';
// const valueEl = Number(document.querySelector(".guess").value);

const randomNumberfunc = function () {
    return Math.trunc(Math.random() * 20) + 1;
}
let randomNumber = randomNumberfunc();
// document.querySelector('.number').textContent = randomNumber;


document.querySelector('.check').addEventListener('click', function () {

    // Getting input value in valueEl variable
    const valueEl = Number(document.querySelector('.guess').value);

    // Getting score value
    let scoreEl = Number(document.querySelector('.score').textContent);

    // Getting highscore value
    let highscore = Number(document.querySelector('.highscore').textContent);

    // Checking for no value
    if (!valueEl) {
        document.querySelector('.message').textContent = '🛑 No number';

    } else if (valueEl === randomNumber) {
        document.querySelector('.message').textContent = '🎉 Correct number';
        document.querySelector('.number').textContent = randomNumber;
        document.body.style.backgroundColor = "#60b347"
        if (scoreEl > highscore) {
            highscore = scoreEl;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if (valueEl !== randomNumber) {
        if (scoreEl > 1) {
            document.querySelector('.message').textContent = valueEl > randomNumber ? '📈 Too high' : "📉 Too low";
            scoreEl--;
            document.querySelector('.score').textContent = scoreEl;
        } else {
            document.querySelector('.message').textContent = '😭 You lost';
            document.querySelector('.score').textContent = 0;
        }

    }

});

document.querySelector('.again').addEventListener('click', function () {
    randomNumber = randomNumberfunc();
    console.log(randomNumber);
    console.log(randomNumberfunc());
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = "?";
    document.body.style.backgroundColor = "#222"
    document.querySelector('.guess').value = ""
})