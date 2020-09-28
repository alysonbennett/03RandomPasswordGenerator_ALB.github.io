// Defined variables for password characters

var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Starting fuctions when user clicks "Generate Password" button
document.querySelector("#generatePassword").addEventListener("click", writePassword);

// Ask user for password length, between 8-128 characters
function generatePassword() {
    var passwordLength, confirmLetterLower, confirmLetterUpper, confirmNumber, confirmSymbol;
    var choices = [];
    var password = [];

    do {
        passwordLength = parseInt(prompt("How many characters would you like your password to contain, between 8-128?"));
    } while (!passwordLength || passwordLength < 8 || passwordLength > 128);

    // Ask user if they would like to include lower case letter, upper case letters, special characters, or numbers


    // If user replies no to all above questions, alert them to choose at least one
    // while (!confirmLetterLower && !confirmLetterUpper && !confirmNumber && !confirmSymbol) {
    do {
        alert("Please choose at least one category to include in your password");
        confirmLetterLower = confirm("Click OK if you would like to include lowercase letters in your password");
        confirmLetterUpper = confirm("Click OK if you would like to include uppercase letters in your password");
        confirmNumber = confirm("Click OK if you would like to include numbers in your password");
        confirmSymbol = confirm("Click OK if you would like to include special characters in your password");
    } while (!(confirmLetterLower || confirmLetterUpper || confirmNumber || confirmSymbol))

    //  If user confirms all 4 choices
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


    // if (confirmLetterLower && confirmLetterUpper && confirmNumber && confirmSymbol) {
    //     choices = choices.concat(letterLower, letterUpper, number, symbol);
    // }

    // // If user confirms 3 choices
    // else if (confirmLetterLower && confirmLetterUpper && confirmNumber) {
    //     choices = letterLower.concat(letterUpper, number);
    // }

    // else if (confirmLetterLower && confirmLetterUpper && confirmSymbol) {
    //     choices = letterLower.concat(letterUpper, symbol);
    // }

    // else if (confirmLetterLower && confirmNumber && confirmSymbol) {
    //     choices = letterLower.concat(number, symbol);
    // }

    // else if (confirmLetterUpper && confirmNumber && confirmSymbol) {
    //     choices = letterUpper.concat(number, symbol);
    // }

    // // If user confirms 2 choices
    // else if (confirmLetterLower && confirmLetterUpper) {
    //     choices = letterLower.concat(letterUpper);
    // }

    // else if (confirmLetterLower && confirmNumber) {
    //     choices = letterLower.concat(number);
    // }

    // else if (confirmLetterLower && confirmSymbol) {
    //     choices = letterLower.concat(symbol);
    // }

    // else if (confirmLetterUpper && confirmNumber) {
    //     choices = letterUpper.concat(number);
    // }

    // else if (confirmLetterUpper && confirmSymbol) {
    //     choices = letterUpper.concat(symbol);
    // }

    // else if (confirmNumber && confirmSymbol) {
    //     choices = number.concat(symbol);
    // }

    // // If user confirms 1 choice

    // else if (confirmLetterLower) {
    //     choices = letterLower;
    // }

    // else if (confirmLetterUpper) {
    //     choices = letterUpper;
    // }

    // else if (confirmNumber) {
    //     choices = number;
    // }

    // else if (confirmSymbol) {
    //     choices = symbol;
    // }

    // console.log(choices);


    // Random selection for selected characters
    for (var i = password.length; i < passwordLength; i++) {
        var char = getRandomEl(choices)
        password.push(char);
        console.log(password);
    }

    return shuffle(password).join("");

}

function shuffle(arr) {
    // [0,1,2,3,4]
    // i:0, arr[i]: 0, r:3, arr[r]:3 <==> [3,1,2,0,4]
    // i:1, arr[i]: 1, r:4, arr[r]:4 <==> [3,4,2,0,1]
    // i:2, arr[i]: 2, r:4, arr[r]:2 <==> [3,4,2,0,1]
    // i:3, arr[i]: 0, r:1, arr[r]:4 <==> [3,4,0,2,1]
    // i:4, arr[i]: 1, r:2, arr[r]:0 <==> [3,4,1,2,0]
    for (var i = 0; i < arr.length; i++) {
        var r = Math.floor(Math.random() * arr.length)

        var temp1 = arr[i]
        var temp2 = arr[r]

        arr[i] = temp2
        arr[r] = temp1
    }
    return arr;
}

function getRandomEl(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

// Write password to the #password input
function writePassword() {
    document.querySelector("#displayPassword").value = generatePassword();
}
