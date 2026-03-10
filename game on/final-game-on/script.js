(function (){
    "use strict";
    console.log ("reading js");

    //timer

    let timer;
    let timeLeft = 2;
    const winSound = document.querySelector (".winSound");
    const loseSound = document.querySelector (".loseSound");

// game details
const game = {
    colors: ["red", "blue", "green", "yellow", "purple"],
    score: 0,
    currentWord: "",
    currentColor: "",
    status: "stopped"
    
}

//html stuff here
const colorWord = document.querySelector ("#colorWord");
const scoreDisplay = document.querySelector ("#score");
const startBtn = document.querySelector ("#startBtn");
const buttons = document.querySelectorAll (".color-btn");
const buttonContainer = document.querySelector (".button-container");

// have to figure this out bc its not really working

const startTimer = () => {
    timeLeft = 2;
    colorWord.textContent = `${game.currentWord.toUpperCase()} - ${timeLeft}s`;

    clearInterval(timer);

    timer = setInterval(() => {
        timeLeft--;
        colorWord.textContent = `${game.currentWord.toUpperCase()} - ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
  
            endGame();  
        //add sound here too
        loseSound.currentTime = 0;
        loseSound.play();
        }
    }, 1000);
};

//game bones
const startGame = () => { 
    game.score= 0;
    game.status = "playing";
    scoreDisplay.textContent = game.score;
    startBtn.style.display = "none";
    buttonContainer.classList.remove("hidden");

    nextRound ();
};

const endGame = () => {
    game.status = "stopped";
    colorWord.textContent = "GAME OVER";
    colorWord.style.color = "black";
    startBtn.style.display = "inline-block";
    buttonContainer.style.display = "none";
    //add lose sound here
    loseSound.currentTime = 0;
    loseSound.play();
};
const nextRound = () => {
    const randomWord = game.colors [Math.floor(Math.random () * game.colors.length)];

    const randomColor = game.colors [Math.floor(Math.random () * game.colors.length)];

    game.currentWord = randomWord;
    game.currentColor = randomColor;

    colorWord.textContent = randomWord.toUpperCase ();
    colorWord.style.color = randomColor;
    buttonContainer.style.display = "inline-block";

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
        buttonContainer.style.display = "none";
        //i think i can hidd the color button heres woth the div button-container and make it hidden idk if i need to do a hidden classlist? 
        

        // play win sound
        winSound.currentTime = 0;
        winSound.play ();
        return;
    }  
    nextRound ();
}  
     else {
        endGame();
        return;
}
};

//start game 
startBtn.addEventListener ("click", startGame);


//game sounds add here
buttons.forEach (button => {
    button.addEventListener ("click", handleGuess);
})


// overlay
const overlay = document.querySelector ('#howToOverlay');
const closeBtn = document.querySelector ('.close-btn');


closeBtn.addEventListener ('click', function (){
    overlay.classList.add ('hidden');
});

startBtn.addEventListener ('click', function(){
    overlay.classList.add ('hidden');
});

})();