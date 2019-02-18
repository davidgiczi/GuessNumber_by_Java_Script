var number=document.querySelector("input");
var guessed=Math.floor(Math.random()*100+1);
var dv=document.querySelector("div");
var added=[];
var counter=0;

function eval(){

 var input=Number.parseInt(number.value);
 
    counter++;

    if(isNaN(input)){
    dv.classList.add("err");
    dv.textContent="Input value \'"+number.value+"\' is incorrect: it's not a number.";
    addedNumbers(number.value);
    }
    else if(input<1 || 100<input){
    dv.classList.add("err");
    dv.textContent="Input value \'"+input+"\' is incorrect: it needs to be between 1 and 100.";
    addedNumbers(input);
    }
    else if(input===guessed){
    closeGame("Congratulations! You have guessed the number ("+guessed+") in "+counter+" steps.\n"+addedNumbers(input));
    }
    else if(input<guessed){
    dv.classList.remove("err");
    dv.textContent="The number is bigger. "+
    addedNumbers(input);
    }
    else{
    dv.classList.remove("err");
    dv.textContent="The number is smaller. "+
    addedNumbers(input);
    }
    
    number.value="";
   
}

function addedNumbers(number) {

    added.push(number);

    var result="["

   for(var i=0; i<added.length-1; i++)
   result+=added[i]+", ";

    result+=added[added.length-1]+"]";

    return result;

}

function closeGame(text) {
    
    if(confirm(text+"\nWould you like to play a new game?")){

        location.reload();

    }
    else{

        close();

            }

}