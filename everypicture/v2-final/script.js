(function () {
    'use strict';
    console.log ('reading js');
    
    const myImages = ['sketch2.jpg', 'purse.JPG', 'coffee.JPG', 'makeup.JPG', 'room.JPG'];

    const descriptions = [
        "The objects that every designer carries with them. It holds the story of things that are most important to them. Few objects that spark that creativity within them.",
        "The objects that are the most near and dear to girls. The objects that seem mundane to others but captures the essence of girlhood. Every girl has these objects within their own purse in their own manner.",
        "Capturing the essence of people's coffee order. A very personal order that can reflect a lot about a person.",
        "The epitome of girlhood. Girls begin to be mischiveous when they dig into their moms makeup. Destroying their makeup up it is ultimately the beginning of them tapping into their femininity. ",
        "The chaos of rummaging through your closet as a girl before going somewhere important. Every girl has that moment where she says 'I have nothing to wear' when they have a closet full of clothes ",
    ];
    const titles = [
        "what's in my backpack as a designer",
        "the details of my pursue",
        "coffee order",
        "makeup mishap",
        "cluttered chaos"
    ];
    
    let currentImage=0;
    const slide=document.querySelector('#myimage');
    const descriptionText= document.querySelector ('#imageDescription');
    const overlayText = document.querySelector('#overlayText');


    document.querySelector ('#next').addEventListener ('click', nextPhoto);
    document.querySelector ('#previous').addEventListener ('click', previousPhoto);

    function nextPhoto (){
        currentImage++;


        if (currentImage> myImages.length-1){
            currentImage=0;
        }
        slide.src= `v2-images/${myImages[currentImage]}`;
        descriptionText.textContent= descriptions [currentImage];
        overlayText.textContent = titles[currentImage];

    }

    function previousPhoto (){
        currentImage--;


        if (currentImage < 0){
            currentImage= myImages.length-1;
        }
        slide.src= `v2-images/${myImages[currentImage]}`;
        descriptionText.textContent= descriptions [currentImage];
        overlayText.textContent = titles[currentImage];

    }

})();