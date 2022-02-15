function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    console.log("get 3 digit pin", pin);
    return getPin();
  }
}

function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}

document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const clacInput = document.getElementById("typed-numbers");
  if (isNaN(number)) {
    if (number == "C") {
      clacInput.value = "";
    }
  } else {
    const previousNumber = clacInput.value;
    const newNumber = previousNumber + number;
    clacInput.value = newNumber;
  }
});
function verify() {
  const pin = document.getElementById("display-pin").value;
  const typedNumbers = document.getElementById("typed-numbers").value;
  const pinMatched = document.getElementById("notify-success");
  const failError = document.getElementById("notify-fail");

  if (pin == typedNumbers) {
    failError.style.display = "none";
    pinMatched.style.display = "block";
  } else {
    pinMatched.style.display = "none";
    failError.style.display = "block";
  }
}
