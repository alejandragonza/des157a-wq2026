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
        alert("please provide an adjective");
       document.querySelector ('#adjective').focus();
       return;
        }
        else if (object == ''){
            alert("please provide a object");
           document.querySelector ('#object').focus();
           return;
            }
        else if (verbEnding == ''){
            alert("please provide a verb ending in ing");
           document.querySelector ('#verbEnding').focus();
           return;
            }
        else if (adverb == ''){
            alert("please provide a adverb");
           document.querySelector ('#adverb').focus();
           return;
            }
        else if (emotion == ''){
            alert("please provide an emotion");
           document.querySelector ('#emotion').focus();
           return;
            }
        else if (adjective2 == ''){
            alert("please provide a second adjective");
           document.querySelector ('#adjective2').focus();
           return;
            }
        // else {
        //     myText= `you typed these words ${adjective}, ${object}, ${verbEnding}, ${adverb}, ${emotion}, ${adjective2}`;

            madlibQuestions.className= "hidden";
        madlibOverlay.className= "showing";

        document.querySelector('#adjOut').innerText = adjective;
        document.querySelector('#objectOut').innerText = object;
        document.querySelector('#verbEndingOut').innerText = verbEnding;
        document.querySelector('#adverbOut').innerText = adverb;
        document.querySelector('#emotionOut').innerText = emotion;
        document.querySelector('#adj2Out').innerText = adjective2;



        document.querySelector('#adjective').value = '';
        document.querySelector('#object').value = '';
        document.querySelector('#verbEnding').value = '';
        document.querySelector('#adverb').value = '';
        document.querySelector('#emotion').value = '';
        document.querySelector('#adjective2').value = '';
        // }
        

        
        // madlibsForm.innerHTML=myText

    });

    document.addEventListener('keydown', function (event ){
        if(event.key == "Escape"){
            madlibOverlay.className='showing';
        };
    });
    myBtn.addEventListener('click', function ( ){
        
        madlibOverlay.className= 'hidden';
    });

    
})();