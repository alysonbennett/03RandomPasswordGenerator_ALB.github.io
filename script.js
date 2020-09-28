// Starting fuctions when user clicks "Generate Password" button
document.querySelector("#generatePassword").addEventListener("click", writePassword);

// Define variables
// var confirmLetterLower;
// var confirmLetterUpper;
// var confirmNumber;
// var confirmsymbol;

var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var passwordLength;

// Ask user for password length, between 8-128 characters

function generatePassword() {
    var passwordLength = prompt("How many characters would you like your password to contain, between 8-128?");
    while (passwordLength <= 7 || passwordLength >= 129) {
        alert("Please select a number bewtween 8-128");
        var passwordLength = (prompt("How many characters would you like your password to contain, between 8-128?"));
    }

    // Ask user if they would like to include lower case letter, upper case letters, special characters, or numbers

    var confirmLetterLower = confirm("Click OK if you would like to include lowercase letters in your password");
    var confirmLetterUpper = confirm("Click OK if you would like to include uppercase letters in your password");
    var confirmNumber = confirm("Click OK if you would like to include numbers in your password");
    var confirmSymbol = confirm("Click OK if you would like to include special characters in your password");

    // If user replies no to all above questions, alert them to choose at least one
    while (confirmLetterLower === false && confirmLetterUpper === false && confirmNumber === false && confirmSymbol === false) {
        choices = alert("Please choose at least one category to include in your password");
    }



    // If user confirms all 4 choices

    var choices = [];

    if (confirmLetterLower && confirmLetterUpper && confirmNumber && confirmSymbol) {
        choices = letterLower.concat(letterUpper, number, symbol);
    }

    // If user confirms 3 choices
    else if (confirmLetterLower && confirmLetterUpper && confirmNumber) {
        choices = letterLower.concat(letterUpper, number);
    }

    else if (confirmLetterLower && confirmLetterUpper && confirmSymbol) {
        choices = letterLower.concat(letterUpper, symbol);
    }

    else if (confirmLetterLower && confirmNumber && confirmSymbol) {
        choices = letterLower.concat(number, symbol);
    }

    else if (confirmLetterUpper && confirmNumber && confirmSymbol) {
        choices = letterUpper.concat(number, symbol);
    }

    // If user confirms 2 choices
    else if (confirmLetterLower && confirmLetterUpper) {
        choices = letterLower.concat(letterUpper);
    }

    else if (confirmLetterLower && confirmNumber) {
        choices = letterLower.concat(number);
    }

    else if (confirmLetterLower && confirmSymbol) {
        choices = letterLower.concat(symbol);
    }

    else if (confirmLetterUpper && confirmNumber) {
        choices = letterUpper.concat(number);
    }

    else if (confirmLetterUpper && confirmSymbol) {
        choices = letterUpper.concat(symbol);
    }

    else if (confirmNumber && confirmSymbol) {
        choices = number.concat(symbol);
    }

    // If user confirms 1 choice

    else if (confirmLetterLower) {
        choices = letterLower;
    }

    else if (confirmLetterUpper) {
        choices = letterUpper;
    }

    else if (confirmNumber) {
        choices = number;
    }

    else if (confirmSymbol) {
        choices = symbol;
    }

    console.log(choices);



    var password = [];
   
    // Random selection for selected characters
    for (var i = 0; i < passwordLength; i++) {
        password = password + choices[Math.floor(Math.random() * choices.passwordLength)];
        console.log(password);
        }
    
    return password;
    
}
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#displaypassword");

//     passwordText.value = password;

// }
// Write password to the #password input
function writePassword() {
    password = generatePassword();
    var passwordText = document.querySelector("#displayPassword");
  
    passwordText.value = password;
}

// // Generate random password
// function randomPassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#displayPassword");
//     passwordText.value = password;

//     console.log(passwordText);
    // console.log(randomPassword);