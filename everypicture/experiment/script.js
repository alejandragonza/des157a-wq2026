(function () {
    const myImages = ['sketch2.jpg', 'purse.jpg', 'coffee.jpg'];
    
    let currentImage=0;
    const slide=document.querySelector('#myimage');

    document.querySelector ('#next').addEventListener ('click', nextPhoto);
    document.querySelector ('#previous').addEventListener ('click', previousPhoto);

    function nextPhoto (){
        currentImage++;


        if (currentImage> myImages.length-1){
            currentImage=0;
        }
        slide.src= `imagess/${myImages[currentImage]}`;

    }

    function previousPhoto (){
        currentImage--;


        if (currentImage < 0){
            currentImage= myImages.length-1;
        }
        slide.src= `imagess/${myImages[currentImage]}`;

    }

})();