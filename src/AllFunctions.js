
export function printResponse(result) {
    return result;
}
    
////////////////////////////// BASIC MATCHING //////////////////////////////

// Function that checks if input is email
export function checkEmail() {
    // Get input from form
    var input = document.getElementById("email")?.value;
    // Regex for email
    const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    // Test input against regex
    if (regex.test(input) && input !== "") {
        alert("Valid 🥳");
    } else {
        alert("Invalid 😐");
    }
}

// Function that checks if input is US phone number
export function checkPhoneNumber() {
    // Get input from form
    var input = document.getElementById("phone")?.value;
    // Regex for phone number
    const regex = /^\(\d{3}\) \d{3}-\d{4}$/;
    // Test input against regex
    if (regex.test(input) && input !== "") {
        alert("Valid 🥳");
    } else {
        alert("Invalid 😐");
    }
}

// Function that checks if input is US date
export function checkDate() {
    // Get input from form
    var input = document.getElementById("date")?.value;
    // Regex for US date
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    // Test input against regex
    if (regex.test(input) && input !== "") {
        alert("Valid 🥳");
    } else {
        alert("Invalid 😐");
    }
}


////////////////////////////// CHARACTER CLASSES //////////////////////////////

// Function that checks if input is lowercase
export function checkLowercase() {
    // Get input from form
    var input = document.getElementById("lowercase")?.value;
    // Regex for lowercase
    const regex = /^[a-z ]+$/;
    // Test input against regex
    if (regex.test(input) && input !== "") {
        alert("Valid 🥳");
    } else {
        alert("Invalid 😐");
    }
}

// Function that checks if string contains at least one digit
export function checkMinOneDigit() {
    // Get input from form
    var input = document.getElementById("oneDigit")?.value;
    // Regex for string with at least one digit
    const regex = /.*\d.*/;
    // Test input against regex
    if (regex.test(input) && input !== "") {
        alert("Valid 🥳");
    } else {
        alert("Invalid 😐");
    }
}

// Function that checks if string contains at least one special character
export function checkMinOneSpecialChar() {
    // Get input from form
    var input = document.getElementById("oneSpecialChar")?.value;
    // Regex for string with at least one digit
    const regex = /(?=.*[!@#$%^&+=]).*$/;
    // Test input against regex
    if (regex.test(input) && input !== "") {
        alert("Valid 🥳");
    } else {
        alert("Invalid 😐");
    }
}

////////////////////////////// QUANTIFIERS //////////////////////////////

// Function that checks if string contains exactly three consecutive vowels
export function checkThreeVowels() {
    // Get input from form
    var input = document.getElementById("threeVowels")?.value;
    // Regex for string with exactly three consecutive vowels
    const regex = /[aeiouæøå]{3}/;
    // Test input against regex
    if (regex.test(input) && input !== "") {
        alert("Valid 🥳");
    } else {
        alert("Invalid 😐");
    }
}

// Function that checks if string contains two or more consecutive digits followed by a space
export function checkTwoDigits() {
    // Get input from form
    var input = document.getElementById("twoDigits")?.value;
    // Regex for string with two or more consecutive digits followed by a space
    const regex = /\d{2,}\s/;
    // Test input against regex
    if (regex.test(input) && input !== "") {
        alert("Valid 🥳");
    } else {
        alert("Invalid 😐");
    }
}

//  Function that checks if string contains one or more occurrences of the word "cat."
export function checkCat() {
    // Get input from form
    var input = document.getElementById("cat")?.value;
    // Regex for string with one or more occurrences of the word "cat"
    const regex = /cat+/;
    // Test input against regex
    if (regex.test(input) && input !== "") {
        alert("Valid 🥳");
    } else {
        alert("Invalid 😐");
    }
}


////////////////////////////// ANCHORS //////////////////////////////

// Function that checks if string starts with "http://" or "https://"
export function checkHttpOrHttps() {
    // Get input from form
    var input = document.getElementById("httpOrHttps")?.value;
    // Regex for string starting with "http://" or "https://"
    const regex = /^https?:\/\//;
    // Test input against regex
    if (regex.test(input) && input !== "") {
        alert("Valid 🥳");
    } else {
        alert("Invalid 😐");
    }
}

// Function that checks if string ends with a file extension, such as ".txt" or ".pdf"
export function checkFileExtension() {
    // Get input from form
    var input = document.getElementById("fileExtension")?.value;
    // Regex for string ending with a file extension
    const regex = /.*\.(jpg|JPG|gif|GIF|doc|DOC|pdf|PDF)$/;
    // Test input against regex
    if (regex.test(input)) {
        alert("Valid 🥳");
    } else {
        alert("Invalid 😐");
    }
}

// Function that checks if string contains a word with exactly five letters
export function checkFiveLetters() {
    // Get input from form
    var input = document.getElementById("fiveLetters")?.value;
    // Regex for string containing a word with exactly five letters
    const regex = /\b\w{5}\b/;
    // Test input against regex
    if (regex.test(input)) {
        alert("Valid 🥳");
    } else {
        alert("Invalid 😐");
    }
}


////////////////////////////// GROUPING AND ALTERNATION //////////////////////////////

// Function that checks if string contains either "apple" or "banana."
export function checkAppleOrBanana() {
    // Get input from form
    var input = document.getElementById("appleOrBanana")?.value;
    // Regex for string containing either "apple" or "banana"
    const regex = /apple|banana/;
    // Test input against regex
    if (regex.test(input)) {
        alert("Valid 🥳");
    } else {
        alert("Invalid 😐");
    }
}

// Function that checks if strings contain a repeated word (e.g., "the the" or "dog dog")
export function checkRepeatedWord() {
    // Get input from form
    var input = document.getElementById("repeatedWord")?.value;
    // Regex for string containing a repeated word
    const regex = /\b(\w+)\s+\1\b/;
    // Test input against regex
    if (regex.test(input)) {
        alert("Valid 🥳");
    } else {
        alert("Invalid 😐");
    }
}

// Function that checks if strings contain a number followed by either "st," "nd," "rd," or "th" (e.g., "1st," "22nd," "53rd")
export function checkNumberWithSuffix() {
    // Get input from form
    var input = document.getElementById("numberWithSuffix")?.value;
    // Regex for string containing a number followed by either "st," "nd," "rd," or "th"
    const regex = /\d+(st|nd|rd|th)/;
    // Test input against regex
    if (regex.test(input)) {
        alert("Valid 🥳");
    } else {
        alert("Invalid 😐");
    }
}


////////////////////////////// LOOKAHEAD AND LOOKBEHIND ASSERTIONS //////////////////////////////

// Function that checks if strings contain "foo" followed by "bar" but not "foobar" directly
export function checkFooBar() {
    // Get input from form
    var input = document.getElementById("fooBar")?.value;
    // Regex for string containing "foo" followed by "bar" but not "foobar" directly
    const regex = /foo(?=bar)/;
    // Test input against regex
    if (regex.test(input)) {
        alert("Valid 🥳");
    } else {
        alert("Invalid 😐");
    }
}

// Function that checks if strings contain a digit, but only if it is not preceded by a letter.
export function checkDigitNotPrecededByLetter() {
    // Get input from form
    var input = document.getElementById("digitNotPrecededByLetter")?.value;
    // Regex for string containing a digit, but only if it is not preceded by a letter
    const regex = /(?<![a-zA-Z])\d/;
    // Test input against regex
    if (regex.test(input)) {
        alert("Valid 🥳");
    } else {
        alert("Invalid 😐");
    }
}

// Function that checks if strings contain the word "password" followed by a string of at least eight characters, including at least one digit, one uppercase letter, and one lowercase letter
export function checkPassword() {
    // Get input from form
    var input = document.getElementById("password")?.value;
    // Regex for string containing the word "password" followed by a string of at least eight characters, including at least one digit, one uppercase letter, and one lowercase letter
    const regex = /password(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    // Test input against regex
    if (regex.test(input)) {
        alert("Valid 🥳");
    } else {
        alert("Invalid 😐");
    }
}


////////////////////////////// REGULAR EXPRESSION PUZZLES //////////////////////////////

// Function that checks if strings can be read the same forwards and backwards
export function checkPalindrome() {
    // Get input from form
    var input = document.getElementById("palindrome")?.value;
    // Regex for string that can be read the same forwards and backwards
    const regex = /(\w+)\s+\1/;
    // Test input against regex
    if (regex.test(input)) {
        alert("Valid 🥳");
    } else {
        alert("Invalid 😐");
    }
}

// Function that checks if strings contain a balanced set of parentheses
export function checkBalancedParentheses() {
    // Get input from form
    var input = document.getElementById("balancedParentheses")?.value;
    // Regex for string containing a balanced set of parentheses
    const regex = /\(([^)]+)\)/;
    // Test input against regex
    if (regex.test(input)) {
        alert("Valid 🥳");
    } else {
        alert("Invalid 😐");
    }
}

// Function that checks if strings contain a valid IPv4 address
export function checkIPv4() {
    // Get input from form
    var input = document.getElementById("ipv4")?.value;
    // Regex for string containing a valid IPv4 address
    const regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}/;
    // Test input against regex
    if (regex.test(input)) {
        alert("Valid 🥳");
    } else {
        alert("Invalid 😐");
    }
}


