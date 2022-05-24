'use strict';

// console.log(document.querySelector(".message").innerHTML);
// document.querySelector('.message').textContent = "🎉 Correct Number !";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value=23;
// console.log(document.querySelector(".guess").value);

let number = Math.trunc(Math.random()*20)+1;

let score = 20;
let highScore = 0;


document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);

    if(!guess) {
        document.querySelector(".message").textContent = "⛔ No Number! ";
    }else if(guess===number){
        document.querySelector('.message').textContent = "🎉 Correct Number !";
        
        document.querySelector("body").style.backgroundColor="#60b342";
        document.querySelector(".number").textContent = number;

        document.querySelector(".number").style.width="20%";
         
        if(score> highScore){
            highScore=score;
        }

        document.querySelector(".highscore").textContent = highScore;


    }else if(guess!==number){
        if(score>1){
        document.querySelector('.message').textContent = guess>number?"📈 Too high !":"📉 Too low !";
        score--;
        document.querySelector(".score").textContent = score;
        }else{
            document.querySelector(".message").textContent = "☢️ You lost the game!"
            document.querySelector(".score").textContent = 0;
        }
    }
    // }else if(guess<number){
    //     if(score>1){
    //     document.querySelector('.message').textContent = "📉 Too low !";
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //     }else{
    //         document.querySelector(".message").textContent = "☢️ You lost the game!"
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }
})

document.querySelector(".again").addEventListener("click", function() {
    score=20;
    number = Math.trunc(Math.random()*20)+1;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = " ";
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".number").style.width="12%";
})