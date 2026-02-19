(function () {
    'use strict';
    console.log ('reading js');
    
    const myImages = ['sketch2.jpg', 'purse.jpg', 'coffee.jpg', 'makeup.jpg'];

    const descriptions = [
        "This is the original sketch.",
        "A purse translated into form and texture.",
        "Coffee captured as shape and tone.",
        "Makeup objects reimagined through line."
    ];
    
    let currentImage=0;
    const slide=document.querySelector('#myimage');
    const descriptionText= document.querySelector ('#imageDescription');


    document.querySelector ('#next').addEventListener ('click', nextPhoto);
    document.querySelector ('#previous').addEventListener ('click', previousPhoto);

    function nextPhoto (){
        currentImage++;


        if (currentImage> myImages.length-1){
            currentImage=0;
        }
        slide.src= `v2-images/${myImages[currentImage]}`;
        descriptionText.textContent= descriptions [currentImage];

    }

    function previousPhoto (){
        currentImage--;


        if (currentImage < 0){
            currentImage= myImages.length-1;
        }
        slide.src= `v2-images/${myImages[currentImage]}`;
        descriptionText.textContent= descriptions [currentImage];

    }

})();