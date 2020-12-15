//this is a test comment

//calling slider function
slider();

//Getting all DOM elements needed
const generateBtn = document.getElementById("generate");
const lengthElement = document.querySelector(".slider");
const uppercaseElement = document.getElementById("uppercase");
const lowercaseElement = document.getElementById("lowercase");
const numberElement = document.getElementById("number");
const symbolElement = document.getElementById("symbol");



// Object cointaining the checkboxes options the user can choose from
characters = {
  uppercase: getUpperCase,
  lowecase: getLowerCase,
  number: getNumber,
  symbol: getSymbol
};


//Returns a lower case letter. 26 is the range we would like to choose from (number of letters in the alphabet)
//and 97 is where we would like to start. 97 is where the lower case letters begin in the UTF-16 table.
function getLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getSymbol() {
  const symbols = '~@=$%&+-*>?!#<';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Write password to the #password input
function writePassword() {
  // checked is a boolean. Returns true if the checkbox is checked. False if is unchecked. 
  const length = lengthElement.value;
  const includeUpper = uppercaseElement.checked;
  const includeLower = lowercaseElement.checked;
  const includeNumber = numberElement.checked;
  const includeSymbol = symbolElement.checked;

  var password = generatePassword(length);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword(length) {
  return "Password " + length;
}

function slider() {
  const slider_value = document.querySelector("span")
  const input_value = document.querySelector("input")

  input_value.oninput = (() => {
    let value = input_value.value;
    slider_value.textContent = value;

    slider_value.style.left = (value * 1.99) + "%";
  });
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
