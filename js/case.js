function UpdateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const CaseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(CaseNumberString);
    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber 
    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber) {

   const caseTotalPrice = newCaseNumber * 59;
   const caseTotalElement = document.getElementById('case-total');
   caseTotalElement.innerText = caseTotalPrice;
}

//console.log('ggs')
document.getElementById('button-case-plus').addEventListener('click', function(){
   const newCaseNumber = UpdateCaseNumber(true);
   updateCaseTotalPrice(newCaseNumber);
   //console.log(caseTotalPrice);
    //console.log(newCaseNumber);
})

document.getElementById('button-case-minus').addEventListener('click', function(){
    const newCaseNumber = UpdateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
   //console.log(caseTotalPrice);
})