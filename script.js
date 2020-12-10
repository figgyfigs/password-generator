var generateBtn = document.querySelector("#generate");

const slider_value = document.querySelector("span")
const input_value = document.querySelector("input")

const alphabet = ["abcdefghijklmnopqrstuvwxyz"];
const numbers = ["0123456789"];
const symbols = ["!@#$%&*?<>"];

input_value.oninput = (() => {
  let value = input_value.value;
  slider_value.textContent = value;

  slider_value.style.left = (value * 1.99) + "%";
});

//Returns a lower case letter. 26 is the range we would like to choose from (number of letters in the alphabet) 
//and 97 is where we would like to start. 97 is where the lower case letters begin in the UTF-16 table.
function getLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
