// Assignment code here
var length;
var includeLowercase;
var includeUpercase; 
var includeNumbers; 
var includeSpecialCharacters; 





 function generatePassword() {
  length = prompt("how many characters? (must be between 8 and 128 characters)");
  if (!length) {
    alert("must enter a value");
  } else if (length < 8) {
    alert("password must be at least 8 characters");
  } else if (length > 128) {
    alert("password must be less than 128 characters"); 
  } else {
    includeLowercase = confirm("do you want to include lowercase letters? (click OK for yes or cancel for no)"); 
    includeUppercase = confirm("do you want to include uppercase letters? (click OK for yes or cancel for no)"); 
    includeNumbers = confirm("do you want to include numbers? (click OK for yes or cancel for no)"); 
    includeSpecialCharacters = confirm("do you want to include special characters? (click OK for yes or cancel for no)");
  }

  if (!includeLowercase && !includeUpercase && !includeNumbers && !includeSpecialCharacters) {
    alert("you must choose to include at least one of these options: lowercase letters, uppercase letters, numbers, and/or special characters")
  }
}

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
