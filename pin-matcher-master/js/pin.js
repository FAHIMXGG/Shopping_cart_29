function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random()*10000);
    return random;

}

document.getElementById('generate-pin').addEventListener('click', function (){
    const pin = getPin();
    //console.log(pin);
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if (number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        
        
        const newTypedNumber = previousTypedNumber + number
        typedNumberField.value = newTypedNumber;
    }
    
    console.log()
})

// document.getElementById('verify-pin').addEventListener('click', function () {
//     const displayPinField = document.getElementById('display-pin');
//     const currentPin = displayPinField.value;

//     const typedNumberField = document.getElementById('typed-numbers');
//     const typedNumber = typedNumberField.value;

//     const pinSuccessMessage = document.getElementById('pin-success');
//     const pinWrongMessage = document.getElementById('pin-wrong');

//     if(typedNumber === ''){
//         pinWrongMessage.style.display = 'block';
//         pinSuccessMessage.style.display = 'none';
//         setTimeout(function() {
//             pinWrongMessage.style.display = 'none';
//           }, 3000);
//     }

//     else if(typedNumber === currentPin){
        
//         pinSuccessMessage.style.display = 'block';
//         pinWrongMessage.style.display = 'none';
//         setTimeout(function() {
//             pinSuccessMessage.style.display = 'none';
//           }, 3000);
//     }
//     else{
        
//         pinWrongMessage.style.display = 'block';
//         pinSuccessMessage.style.display = 'none';
//         setTimeout(function() {
//             pinWrongMessage.style.display = 'none';
//           }, 3000);
//     }

// })


let wrongAttempts = 0;


const verifyButton = document.getElementById('verify-pin');
verifyButton.addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinWrongMessage = document.getElementById('pin-wrong');



    if (typedNumber === '') {
        pinWrongMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
        setTimeout(function() {
            pinWrongMessage.style.display = 'none';
        }, 3000);
        wrongAttempts++;
    } else if (typedNumber === currentPin) {
        pinSuccessMessage.style.display = 'block';
        pinWrongMessage.style.display = 'none';
        setTimeout(function() {
            pinSuccessMessage.style.display = 'none';
        }, 3000);
    } else {
        pinWrongMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
        setTimeout(function() {
            pinWrongMessage.style.display = 'none';
        }, 3000);
        wrongAttempts++;
    }

    if (wrongAttempts >= 3) {
        verifyButton.disabled = true;
    }
    
    const count = document.getElementById('count');
    count.innerText = 3 - wrongAttempts;
});
