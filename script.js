// Assignment code here
var length;
var includeLowercase;
var includeUpercase; 
var includeNumbers; 
var includeSpecialCharacters; 

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var spercialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];

var criteria = [];
var randomizeCriteria = []; 
var finalPassword = [];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  length = prompt("how many characters? (must be between 8 and 128 characters)");
  if (!length) {
    alert("must enter a value");
  } else if (length < 8) {
    alert("password must be at least 8 characters");
  } else if (length > 128) {
    alert("password must be less than 128 characters"); 
  } 
    includeLowercase = confirm("do you want to include lowercase letters? (click OK for yes or cancel for no)"); 
    includeUppercase = confirm("do you want to include uppercase letters? (click OK for yes or cancel for no)"); 
    includeNumbers = confirm("do you want to include numbers? (click OK for yes or cancel for no)"); 
    includeSpecialCharacters = confirm("do you want to include special characters? (click OK for yes or cancel for no)");
  

  if (includeLowercase && includeUpercase && includeNumbers && includeSpecialCharacters) {
    criteria = lowercase.concat(uppercase,numbers,spercialChars); 
  } else if (includeLowercase && includeUpercase && includeNumbers) {
    criteria = lowercase.concat(uppercase,numbers);
  }  else if (includeLowercase && includeUpercase && includeSpecialCharacters) {
    criteria = lowercase.concat(uppercase,spercialChars);
  }  else if (includeLowercase && includeUpercase) {
    criteria = lowercase.concat(uppercase);
  }  else if (includeLowercase && includeNumbers && includeSpecialCharacters) {
    criteria = lowercase.concat(numbers,spercialChars);
  }  else if (includeLowercase && includeNumbers) {
    criteria = lowercase.concat(numbers);
  }  else if (includeLowercase && includeSpecialCharacters) {
    criteria = lowercase.concat(spercialChars);
  }  else if (includeLowercase) {
    criteria = lowercase; 
  }  else if (includeUpercase && includeNumbers && includeSpecialCharacters) {
    criteria = uppercase.concat(numbers,spercialChars);
  }  else if  (includeUpercase && includeNumbers) {
    criteria = uppercase.concat(numbers);
  }  else if (includeUpercase && includeSpecialCharacters) {
    criteria = uppercase.concat(spercialChars);
  }  else if (includeUpercase) {
    criteria = uppercase;
  }  else if (includeNumbers && includeSpecialCharacters) {
    criteria = numbers.concat(spercialChars);
  }  else if (includeNumbers) {
    criteria = numbers;
  }  else if (includeSpecialCharacters) {
    criteria = spercialChars; 
  }  else {
    alert("you must choose to include at least one of these options: lowercase letters, uppercase letters, numbers, and/or special characters")
  }

  for (var i = 0; i < length; i++) {
    randomizeCriteria = criteria[Math.floor(Math.random() * criteria.length)];
    console.log(randomizeCriteria);
     finalPassword.push(randomizeCriteria); 
  }

  // password = finalPassword.join("");
  password = finalPassword.join("");
  console.log(password);
  return password;

}



// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
