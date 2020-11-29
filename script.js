var generateBtn = document.querySelector("#generate");

const slider_value = document.querySelector("span")
const input_value = document.querySelector("input")
input_value.oninput = (() => {
  let value = input_value.value;
  slider_value.textContent = value;
});

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
