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
var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "\\", "^", "`", "{", "|", "}", "~"];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



// The function that generates the password
function generatePassword() {
  var characterTypes = 0;
  var possibleCharacters = [];
  var guaranteedCharacters = [];
  var result = [];
  //Ask for length of password
  var pwlength = prompt("How long would you like your password to be?");


  // Function to select random character from array
  function selectRandom(x) {
    let random = x[Math.floor(Math.random() * x.length)];
    return random;
  }

  // Check that length is between 8-128
  if (parseInt(pwlength) && pwlength < 129 && pwlength > 7) {
    var length = parseInt(pwlength);
    console.log(pwlength);
  } else if (parseInt(pwlength) < 8 || parseInt(pwlength) > 128) {
    console.log("Please enter a number higher than 8 and lower than 128");
    alert("Please enter a number higher than 8 and lower than 128");
    return;
  } else {
    console.log("You did not enter a number! Try Again!")
    alert("You did not enter a number! Try Again!")
    return;
  }



  // Ask for Special character inclusion, and add a random one to the guaranteed. Merge possible with special characters
  var special = confirm("Would you like to include special characters?")
  if (special) {
    characterTypes++;
    specialRandom = selectRandom(specialCharacters);
    console.log(specialRandom);
    guaranteedCharacters.push(specialRandom);
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    console.log(possibleCharacters);
  } else {
    console.log("No Special Characters will be included");
  }

  // Ask for number character inclusion, and add a random one to the guaranteed. Merge possible with number characters
  var number = confirm("Would you like to include Numbers?");
  if (number) {
    characterTypes++;
    numberRandom = selectRandom(numericCharacters);
    console.log(numberRandom);
    guaranteedCharacters.push(numberRandom);
    possibleCharacters = possibleCharacters.concat(numericCharacters);
  } else {
    console.log("No number Characters will be included");
  }

  // Ask for upper case character inclusion, and add a random one to the guaranteed. Merge possible with upper case characters
  var upper = confirm("Would you like to include uppercase characters?");
  if (upper) {
    characterTypes++;
    upperRandom = selectRandom(upperCasedCharacters);
    console.log(upperRandom);
    guaranteedCharacters.push(upperRandom);
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  } else {
    console.log("No uppercase Characters will be included");
  }

  // Ask for lowercase character inclusion, and add a random one to the guaranteed. Merge possible with lowercase characters
  var lower = confirm("Would you like to include lowercase characters?");
  if (lower) {
    characterTypes++;
    lowerRandom = selectRandom(lowerCasedCharacters);
    console.log(lowerRandom);
    guaranteedCharacters.push(lowerRandom);
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  } else {
    console.log("No lowercase Characters will be included");
  }

  // Ensure that atleast one of the types of characters was selected for inclusion
  if (!special && !number && !lower && !upper) {
    console.log("You have to select a special character, number, uppercase, or lowercase character, otherwise you wont have a password");
    alert("You have to select a special character, number, uppercase, or lowercase character, otherwise you wont have a password");
    return;
  } else {
    console.log("Generate Password");
    finalizePassword();
  }

  // Add characters to guaranteedCharacters[] until it reaches the desired length

  function finalizePassword() {
    guaranteedRandom = [];
    //Fill out the rest of the array
    for (i = characterTypes; i < length; i++) {
      guaranteedCharacters = guaranteedCharacters.concat(selectRandom(possibleCharacters));
    };
    //Rearrange the guaranteedCharacters array in random order for increased obscurity
    for (i = 0; i < guaranteedCharacters.length; i++) {
      guaranteedRandom = guaranteedRandom.concat(selectRandom(guaranteedCharacters));
    }
    //log the results to the console
    console.log("Randomly Generated Array: " + guaranteedRandom);
    result = guaranteedRandom.join("");
    result = result.toString();
    console.log("Final Password: " + result);
  }
  // Send final result to the writePassword() function to be displayed in the text box
  return result;
};
// Display all arrays for testing
console.log("Special Characters: " + specialCharacters);
console.log("Numeric Characters: " + numericCharacters);
console.log("Lower Cased Characters: " + lowerCasedCharacters);
console.log("Upper Cased Characters: " + upperCasedCharacters);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
