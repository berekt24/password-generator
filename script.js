// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var number = ["0","1","2","3","4","5","6","7","8","9"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var confirmLength = "";
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

function password() {
   confirmLength = (prompt("How many characters do you want your password to have?"));

  while(parseInt(confirmLength) <= 7 || parseInt(confirmLength) >= 129) {
    alert("Password length must be between 8-128 characters try again");
  }

  alert(`Your password will have ${confirmLength} characters`);

  var confirmNumericCharacter = confirm("Click OK to confirm if you would like to have numbers");
  var confirmLowerCase = confirm("Click OK if you would like to have lowercase letters");
  var confirmUpperCase = confirm("Click OK if you would like to have uppercase letters");

  while(confirmUpperCase === false && confirmLowerCase === false && confirmNumericCharacter === false) {
    alert("You must choose at least one parameter");

  var confirmNumericCharacter = confirm("Click OK to confirm if you would like to have numbers");
  var confirmLowerCase = confirm("Click OK if you would like to have lowercase letters");
  var confirmUpperCase = confirm("Click OK if you would like to have uppercase letters");
  }
  
 

 
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

password();