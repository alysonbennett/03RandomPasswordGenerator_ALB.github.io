// Define variables

var letterLower = 'abcdefghijklmnopqrstuvwxyz';
var letterUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '1234567890';
var symbol = '!@#$^&%*()+=-[]{}|:<>?,.';

// var passwordLength = "";
// var confirmLetterLower;
// var confirmLetterUpper;
// var confirmNumber;
// var confirmsymbol;

var choices;


// Starting fuctions when user clicks "Generate Password" button
document.querySelector("#generatePassword").addEventListener("click", randomPassword);

// Ask user for password length, between 8-128 characters

function generatePassword() {
    var passwordLength = parseInt(prompt("How many characters would you like your password to contain, between 8-128?"));
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
    if (confirmLetterLower === false && confirmLetterUpper === false && confirmNumber === false && confirmSymbol === false) {
       choices = alert("Please choose at least one category to include in your password");
        
        //                                   Below not needed?
        // var confirmLetterLower = confirm("Click OK if you would like to include lowercase letters in your password");
        // var confirmLetterUpper = confirm("Click OK if you would like to include uppercase letters in your password");
        // var confirmNumber = confirm("Click OK if you would like to include numbers in your password");
        // var confirmsymbol = confirm("Click OK if you would like to include special characters in your password");
    }



    // If user confirms all 4 choices
    else if (confirmLetterLower && confirmLetterUpper && confirmNumber && confirmSymbol) {
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
        choices = confirmNumber.concat(symbol);
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

    // Empty array for password characters
    var randomPassword = [];

    // Random selection for selected characters
    for (var i = 0; i < passwordLength; i++) {
    var userChoices = choices[Math.floor(Math.random() * choices.passwordLength)];
    randomPassword.push(userChoices)
 
    }
    // return randomPassword;
       console.log(randomPassword);

}







// Generate random password
function randomPassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#displayPassword");
    passwordText.value = password;

    console.log(passwordText)
    console.log(randomPassword)
}