
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var spChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

var cap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lwr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function generatePassword() {
  passwordLength = prompt("How long would you like your password to be? must be between 8-129");

  console.log(passwordLength);
  
  if (passwordLength <= 7) {
    alert("must be at least 8 characters");
  }
  else if (passwordLength >= 130) {
    alert("must be 129 characters or less");
  }
  else {

    passwordSp = confirm("would you like special characters");
    // console.log(passwordSp)
    passwordCap = confirm("would you like capital letters?");
    passwordLwr = confirm("would you like lower case letters?");
    passwordNum = confirm("would you like numbers?");

  }


}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
