(function (){
    "use strict";
    console.log ("reading js");

// overlay
const overlay = document.querySelector ('.overlay');
const closeBtn = document.querySelector ('.close-bt');
const startBtn = document.querySelector ('.start-btn');

closeBtn.addEventListener ('click', function (){
    overlay.classList.add ('hidden');
});

startBtn.addEventListener ('click', function(){
    overlay.classList.add ('hidden');
});


})();