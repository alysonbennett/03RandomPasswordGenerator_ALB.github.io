// Defined variables for password characters

var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Connecting HTML index to JS script, starts below functions when user clicks "Generate Password" button
document.querySelector("#generatePassword").addEventListener("click", writePassword);

// Ask user for password length, between 8-128 characters
function generatePassword() {
    var passwordLength, confirmLetterLower, confirmLetterUpper, confirmNumber, confirmSymbol;
    var choices = [];
    var password = [];

    do {
        passwordLength = parseInt(prompt("How many characters would you like your password to contain, between 8-128?"));
    } while (!passwordLength || passwordLength < 8 || passwordLength > 128);

    // Ask user if they would like to include lower case letters, upper case letters, special characters, or numbers
    do {
        alert("Please choose at least one category to include in your password");
        confirmLetterLower = confirm("Click OK if you would like to include lowercase letters in your password");
        confirmLetterUpper = confirm("Click OK if you would like to include uppercase letters in your password");
        confirmNumber = confirm("Click OK if you would like to include numbers in your password");
        confirmSymbol = confirm("Click OK if you would like to include special characters in your password");

    // If user replies no to all above questions, go back to beginning and ask them to choose at least one
    } while (!(confirmLetterLower || confirmLetterUpper || confirmNumber || confirmSymbol))

    // Pushing user choices to below functions
    if (confirmLetterLower) {
        choices = choices.concat(letterLower)
        password.push(getRandomEl(letterLower))
    }
    if (confirmLetterUpper) {
        choices = choices.concat(letterUpper)
        password.push(getRandomEl(letterUpper))
    }
    if (confirmNumber) {
        choices = choices.concat(number)
        password.push(getRandomEl(number))
    }
    if (confirmSymbol) {
        choices = choices.concat(symbol)
        password.push(getRandomEl(symbol))
    }

    // Random selection for selected characters
    for (var i = password.length; i < passwordLength; i++) {
        var char = getRandomEl(choices)
        password.push(char);
        console.log(password);
    }

    return shuffle(password).join("");

}

// Function to ensure that all characters are shuffled
function shuffle(arr) {
    for (var i = 0; i < arr.length; i++) {
        var r = Math.floor(Math.random() * arr.length)

        var temp1 = arr[i]
        var temp2 = arr[r]

        arr[i] = temp2
        arr[r] = temp1
    }
    return arr;
}

// Function that passes the random characters into the shuffle function
function getRandomEl(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

// Writes password to the #password input
function writePassword() {
    document.querySelector("#displayPassword").value = generatePassword();
}
