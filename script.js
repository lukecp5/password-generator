// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return;
}
// Arrays containing the characters that will be used to generate passwords
var specialCharacters = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","\\","^","`","{","|","}","~"];
var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"];
var lowerCasedCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



// The function that generates the password
function generatePassword(){
  var possibleCharacters = [];
  var guaranteedCharacters = [];
  var result = [];
  //Ask for length of password
  var pwlength = prompt("How long would you like your password to be?");
 
 
  // Function to select random character from array
  function selectRandom(x){
    let random = x[Math.floor(Math.random() * x.length)];
    return random;
  }
}

// Display all arrays for testing
console.log("Special Characters: " + specialCharacters);
console.log("Numeric Characters: " + numericCharacters);
console.log("Lower Cased Characters: " + lowerCasedCharacters);
console.log("Upper Cased Characters: " + upperCasedCharacters);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
