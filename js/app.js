function getPin() {
  const pin = generatePin();
  const pinStrig = pin + "";

  if (pinStrig.length === 4) {
    return pin;
  } else {
    // console.log('it is not 4 digit pin',pin);
    return getPin();
  }
}
function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();
  // console.log(pin);

  const displayPinField = document.getElementById("display-pin");
  displayPinField.value = pin;
});
document
  .getElementById("calculator")
  .addEventListener("click", function (awolad) {
    const number = awolad.target.innerText;
    
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;

    if (isNaN(number)) {
      // jodi number nah hoi tahole oita print ta print koro er way
      // console.log(number);

      if(number ==='C')
      {
        typedNumberField.value = '';
      }
      else if(number ==='<'){
        // console.log(previousTypedNumber);
        const digits = previousTypedNumber.split('');
        digits.pop();
        const remaningDegits = digits.join('');
        typedNumberField.value = remaningDegits;
      }

    }
    else{
      const newTypeNumber =  previousTypedNumber + number;
      typedNumberField.value = newTypeNumber;

    }
  });

  document.getElementById('verify-pin').addEventListener('click',function()
  {
    const displayPinField = document.getElementById('display-pin');
    const currentPin  = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailuerMessage = document.getElementById('pin-failure');
    
    if(typedNumber === currentPin)
    {
      pinSuccessMessage.style.display ='block';
      pinFailuerMessage.style.display = 'none';
    }
    else
    {
      pinFailuerMessage.style.display = 'block';
      pinSuccessMessage.style.display ='none';
    }



  })