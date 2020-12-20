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
  lowercase: getLowerCase,
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
  // checked is a boolean. Returns true if the checkbox is checked. False if it is unchecked. 
  const length = lengthElement.value;
  const includeUpper = uppercaseElement.checked;
  const includeLower = lowercaseElement.checked;
  const includeNumber = numberElement.checked;
  const includeSymbol = symbolElement.checked;
  var password = generatePassword(length, includeUpper, includeLower, includeNumber,includeNumber, includeSymbol);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword(length, uppercase, lowercase, number, symbol) {
  let userPassword = "";
  const charArray = [{uppercase}, {lowercase}, {number}, {symbol}];
  var sum = 0;
  charArray.forEach(function(type) {
    sum += Object.values(type)[0];
    // trueArray contains all the fields that are true. 
    // i.e. whtat chars the user wants in his password
    trueArray = charArray.filter(type => Object.values(type)[0]);
  });

  if(sum === 0) {
    return "";
  }

  // looping over trueArray so we can generate random characters for each true value
  // this generates a long string that we will need to be sliced
  for(let i = 0; i < length; i++) {
    trueArray.forEach(type => {
      const generateChars = Object.keys(type)[0];
      userPassword += characters[generateChars]();
    });
  }
  //console.log(userPassword.split("").slice(0, length).sort(() => Math.random() - 0.5).join(""));
  userPassword = userPassword.split("").slice(0, length);
  let shuffledArray = shuffle(userPassword);
  return shuffledArray.join("");
  //console.log(userPassword.split("").slice(0, length));
}

function shuffle(array) {
  //const currIndex, length, temp;
  let currIndex = array.length;
  let tempValue;
  let randomIndex;

  while(currIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currIndex);
    currIndex -= 1;

    tempValue = array[currIndex];
    array[currIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
  }

  return array;
}

function slider() {
  const slider_value = document.querySelector("span")
  const input_value = document.querySelector("input")

  input_value.oninput = (() => {
    let value = input_value.value;
    slider_value.textContent = value;

    slider_value.style.left = (value * 3.5) + "%";
  });
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
