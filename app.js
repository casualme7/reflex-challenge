let resetButton = document.querySelector("#resetButton");
let startButton = document.querySelector("#startButton");
let countdownNum = document.querySelector("#countdownNum");
let reflexSection = document.querySelector(".reflexSection");
let time = document.querySelector(".time");
let gameInfo = document.querySelector(".gameInfo");

let timeoutX;
let healineTimeout;
let intervalX;
let cntdwnInt;
let gameStarted = false;

let startGame = () => {
    gameStarted = true;
    let delay = Math.ceil(Math.random() * 15) + 2;
    let countdown = 0;
    startButton.style.display = "none";
    timeoutX = setTimeout(() => {
        gameStarted = false;
        time.classList.add("scoreFont");
        reflexSection.style.backgroundColor = "lime";
        reflexSection.style.borderColor = "green";
        intervalX = setInterval(() => {
            countdown++;
            time.innerText = countdown;
        }, 1)
    }, delay * 1000)
};

let numCountdown = () => {
    let brojac = 3;
    cntdwnInt = setInterval(() => {
        countdownNum.innerText = brojac;
        brojac--
        if (brojac < 0) {
            clearInterval(cntdwnInt);
            countdownNum.innerText = "";
        }
    }, 500)
};

let resetGame = () => {
    gameStarted = false;
    startButton.style.display = "inline-block";
    reflexSection.style.backgroundColor = "whitesmoke";
    clearTimeout(timeoutX);
    clearInterval(intervalX);
    time.innerText = "";
    time.classList.remove("scoreFont");
    gameInfo.innerText = "‎";
    countdownNum.innerText = "";
    clearInterval(cntdwnInt);
    clearTimeout(healineTimeout);
    reflexSection.style.border = "1px solid black";
};

startButton.addEventListener("click", (e) => {
    e.stopPropagation();
    numCountdown();
    startGame();
    reflexSection.style.border = "4px solid red";
    healineTimeout = setTimeout(() => {
        gameInfo.innerText = "Reflex game started!";
    }, 2000)
});

resetButton.addEventListener("click", () => {
    resetGame();
});

reflexSection.addEventListener("click", () => {
    if (gameStarted) {
        clearTimeout(timeoutX);
        clearTimeout(healineTimeout);
        gameInfo.innerText = "‎";
        time.innerText = "You clicked to early BOT!";
        countdownNum.innerText = "";
        clearInterval(cntdwnInt);
    } else if (!gameStarted) {
        clearInterval(intervalX);
    }
});
