(function (){
    "use strict";
    console.log ("reading js");
    let timer;
    let timeLeft = 2;

// game
const game = {
    colors: ["red", "blue", "green", "yellow", "purple"],
    score: 0,
    currentWord: "",
    currentColor: "",
    status: "stopped"
    
}

const colorWord = document.querySelector ("#colorWord");
const scoreDisplay = document.querySelector ("#score");
const startBtn = document.querySelector ("#startBtn");
const buttons = document.querySelectorAll (".color-btn");
const buttonContainer = document.querySelector (".button-container");

const startTimer = () => {
    timeLeft = 2;
    colorWord.textContent = `${game.currentWord.toUpperCase()} - ${timeLeft}s`;

    clearInterval(timer);

    timer = setInterval(() => {
        timeLeft--;
        colorWord.textContent = `${game.currentWord.toUpperCase()} - ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame("TIME'S UP!", "red");  // end game if time runs out
        }
    }, 1000);
};

const startGame = () => { 
    game.score= 0;
    game.status = "playing";
    scoreDisplay.textContent = game.score;
    startBtn.style.display = "none";
    buttonContainer.classList.remove("hidden");
    console.log (buttonContainer);

    nextRound ();
};

const endGame = () => {
    game.status = "stopped";
    colorWord.textContent = "GAME OVER";
    colorWord.style.color = "black";
    startBtn.style.display = "inline-block";
};
const nextRound = () => {
    const randomWord = game.colors [Math.floor(Math.random () * game.colors.length)];

    const randomColor = game.colors [Math.floor(Math.random () * game.colors.length)];

    game.currentWord = randomWord;
    game.currentColor = randomColor;

    colorWord.textContent = randomWord.toUpperCase ();
    colorWord.style.color = randomColor;

    startTimer ();
};

const handleGuess = (event) => {
    if (game.status !== "playing") return;
    clearInterval (timer);
    const selectedColor = event.target.dataset.color;

    if (selectedColor === game.currentColor) {
        //correct answer
        game.score++;
        scoreDisplay.textContent = game.score;
        // add game sounds here winning

        //check for win
    if (game.score >= 10){
        game.status = "stopped";
        colorWord.textContent = "YOU WIN!";
        colorWord.style.color = "#B53324";
        startBtn.style.display = "inline-block";
        return;
    }  
    nextRound ();
}  
     else {
        endGame();
        return;
}
};

startBtn.addEventListener ("click", startGame);


//game sound
buttons.forEach (button => {
    button.addEventListener ("click", handleGuess);
})


// overlay
const overlay = document.querySelector ('.overlay');
const closeBtn = document.querySelector ('.close-btn');
// const startBtn = document.querySelector ('.start-btn');

closeBtn.addEventListener ('click', function (){
    overlay.classList.add ('hidden');
});

startBtn.addEventListener ('click', function(){
    overlay.classList.add ('hidden');
});

})();