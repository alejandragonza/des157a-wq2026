(function (){
    'use strict';
    console.log ('reading js');

    const madlibsForm= document.querySelector ('#madlibsForm');
    const madlibQuestions= document.querySelector('#madlib-questions');
    const madlibOverlay=document.querySelector ('#madlib-overlay');
    const myBtn=document.querySelector("#close");
    console.log (myBtn);
   

    madlibsForm.addEventListener ('submit', function (event){
        event.preventDefault();


        const adjective= document.querySelector('#adjective').value;
        const object= document.querySelector ('#object').value;
        const verbEnding=document.querySelector ('#verbEnding').value;
        const adverb= document.querySelector ('#adverb').value;
       const emotion= document.querySelector ('#emotion').value;
       const adjective2= document.querySelector ('#adjective2').value;

       let myText;

       if (adjective == ''){
        myText= "please provide a adjective";
       document.querySelector ('#adjective').focus();
        }
        else if (object == ''){
            myText= "please provide a object";
           document.querySelector ('#object').focus();
            }
        else if (verbEnding == ''){
            myText= "please provide a verb ending in ing";
           document.querySelector ('#verbEnding').focus();
            }
        else if (adverb == ''){
            myText= "please provide a adverb";
           document.querySelector ('#adverb').focus();
            }
        else if (emotion == ''){
            myText= "please provide an emotion";
           document.querySelector ('#emotion').focus();
            }
        else if (adjective2 == ''){
            myText= "please provide a second adjective";
           document.querySelector ('#adjective2').focus();
            }
        else {
            myText= `you typed these words ${adjective}, ${object}, ${verbEnding}, ${adverb}, ${emotion}, ${adjective2}`;
        }

        
        madlibsForm.innerHTML=myText;
        document.querySelector('#adjective').value = '';
        document.querySelector('#object').value = '';
        document.querySelector('#verbEnding').value = '';
        document.querySelector('#adverb').value = '';
        document.querySelector('#emotion').value = '';
        document.querySelector('#adjective2').value = '';

    });
    document.querySelector('.open').addEventListener('submit', function (){
        document.querySelector('#madlib-overlay').className= 'showing';
    });

    document.querySelector('.close').addEventListener('click', function (){
        document.querySelector('#madlib-questions').className= 'hidden';
    });

    document.addEventListener('keydown', function (event ){
        if(event.key == "Escape"){
            madlibOverlay.className='showing';
        };
    });
    myBtn.addEventListener('click', function (event ){
        
        madlibOverlay.className= 'close';
    });
})();