(function () {
    'use strict';
    console.log ('reading js');
    
    const myImages = ['sketch.jpg', 'purse2.jpg', 'coffee2.jpg', 'makeup2.jpg', 'room2.jpg'];

    const descriptions = [
        "The objects that every designer carries with them. It holds the story of things that are most important to them. Few objects that spark that creativity within them.",
        "The objects that are the most near and dear to girls. The objects that seem mundane to others but captures the essence of girlhood. ",
        "Capturing the essence of people's coffee order. A very personal order that can reflect a lot about a person.",
        "The epitome of girlhood. Girls begin to be mischiveous when they dig into their moms makeup. This is ultimately the beginning for them. ",
        "The chaos of rummaging through your closet as a girl before going somewhere important like a date, hangout, etc. ",
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