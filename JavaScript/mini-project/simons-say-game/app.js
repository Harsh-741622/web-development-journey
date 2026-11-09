let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "green", "purple"];

let level = 0;
let started = false;
let max = 0;
let gameOver = false;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        levelUp();
        started = true;
        gameOver = false;
    }
})

function levelUp() {
    userSeq = [];
    level++;


    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randIdx];
    gameSeq.push(randomColor);
    console.log(gameSeq);
    let randbtn = document.querySelector(`.${randomColor}`);
    gameFlash(randbtn);

}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

// Once an event listener is attached, it remains active until explicitly removed using removeEventListener(). Changing a variable or condition does not automatically deactivate it.
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
}


function btnPress() {
    if(gameOver){ 
        return ; 
    }
    let btn = this;
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    userFlash(btn);
    checkAns(userSeq.length - 1);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 150);
}

function checkAns(idx) {
    if (gameSeq[idx] === userSeq[idx]) {
        if (gameSeq.length == userSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 300);
        gameOver = true;
        reset();
    }
}

let h3 = document.querySelector("h3");

function reset() {
    if (level > max) {
        h3.innerText = `Congratulation! You have scored Highest score of Level ${level}`;
        max = level;
    } else {
        h3.innerText = `The Highest score is Level ${max}`;
    }
    level = 0;
    gameSeq = [];
    userSeq = [];
    started = false;
}