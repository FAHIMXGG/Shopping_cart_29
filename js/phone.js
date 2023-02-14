//  document.getElementById('button-phone-plus').addEventListener('click', function(){

//  })




//my modify
function UpdatePhoneNumber(isIncrease) {
    const PhoneNumberField = document.getElementById('phone-number-field');
    const PhoneNumberString = PhoneNumberField.value;
    const previousPhoneNumber = parseInt(PhoneNumberString);
    let newPhoneNumber;
    if (isIncrease === true) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    PhoneNumberField.value = newPhoneNumber 
    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber) {

   const PhoneTotalPrice = newPhoneNumber * 1219;
   const PhoneTotalElement = document.getElementById('phone-total');
   PhoneTotalElement.innerText = PhoneTotalPrice;
}

//console.log('ggs')
document.getElementById('button-phone-plus').addEventListener('click', function(){
   const newPhoneNumber = UpdatePhoneNumber(true);
   updatePhoneTotalPrice(newPhoneNumber);
   //console.log(caseTotalPrice);
    //console.log(newCaseNumber);
})

document.getElementById('button-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = UpdatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
   //console.log(caseTotalPrice);
})