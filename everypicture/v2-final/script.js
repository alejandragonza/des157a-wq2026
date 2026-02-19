(function () {
    'use strict';
    console.log ('reading js');
    
    const myImages = ['sketch2.jpg', 'purse.jpg', 'coffee.jpg', 'makeup.jpg'];

    const descriptions = [
        "The objects that every designer carries with them. It holds the story of things that are most important to them. Few objects that spark that creativity within them.",
        "The objects that are the most near and dear to girls. The objects that seem mundane to others but captures the essence of girlhood. Every girl has these objects within their own purse in their own manner.",
        "Capturing the essence of people's coffee order. A very personal order that can reflect a lot about a person.",
        "The epitome of girlhood. Girls begin to be mischiveous when they dig into their moms makeup. Destroying their makeup up it is ultimately the beginning of them tapping into their femininity. "
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