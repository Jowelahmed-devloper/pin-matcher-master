
function getPin(){
    const random = Math.random()*10000;
    const pin = (random+'').split('.')[0];
    if(pin.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}
const generatePin = document.getElementById("generatePin-btn");
generatePin.addEventListener("click",function(){
    const typedInput = document.getElementById("pinInput");
    typedInput.value = getPin();
})



const digitContainer = document.getElementById("digit-container");
digitContainer.addEventListener("click",function(event){
   const digit = event.target.innerText;

    if(isNaN(digit)){
        
    }
    else{
        const typedInput = document.getElementById("typed-input");
        typedInput.value = typedInput.value + digit;

    }
})








// verify pin

function verifyPin (){
    const typedInputPin = document.getElementById("pinInput").value;
    const generateInputPin = document.getElementById("typed-input").value;


    if(typedInputPin === generateInputPin){
        const correct = document.getElementById("correct-pin");
        correct.style.display = 'block';
    }
    else{
        const innCorrect = document.getElementById("incorrect-pin");
        innCorrect.style.display= "block";
    }

}


