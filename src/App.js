import './App.css';
import { checkEmail, checkPhoneNumber, checkDate, checkLowercase, checkMinOneDigit, checkMinOneSpecialChar, checkThreeVowels, checkTwoDigits, checkCat, checkHttpOrHttps, checkFileExtension, checkFiveLetters, checkAppleOrBanana, checkRepeatedWord, checkNumberWithSuffix, checkFooBar, checkDigitNotPrecededByLetter, checkPassword, checkPalindrome, checkBalancedParentheses } from './AllFunctions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h3>Basic matching:</h3>
          a. Write a regular expression to match valid email addresses:
        </p>
        <form>
          Email validation:
          <input type="text" id="email" placeholder="Enter an email address" />
          <button onClick={checkEmail}>Validate</button>
        </form>
        <p>
          <br />
          b.  Write a regular expression to match phone numbers in the format (XXX) XXX-XXXX:
        </p>
        <form>
          Phone number validation:
          <input type="text" id="phone" placeholder="(123) 456-7890" />
          <button onClick={checkPhoneNumber}>Validate</button>
        </form>
        <p>
          <br />
          c.  To match dates in the format MM/DD/YYYY, you can use the following regular expression:
        </p>
        <form>
          Date validation:
          <input type="text" id="date" placeholder="MM/DD/YYYY" />
          <button onClick={checkDate}>Validate</button>
        </form>
        <br />
        <p>
          <h3>Character classes:</h3>
          a. Write a regular expression to match strings containing
          only lowercase letters:
        </p>
        <form>
          Lowercase validation:
          <input type="text" id="lowercase" placeholder="only lowercase letters" />
          <button onClick={checkLowercase}>Validate</button>
        </form>
        <p>
          <br />
          b.  Write a regular expression to match strings
          containing at least one digit:
        </p>
        <form>
          At least 1 digit validation:
          <input type="text" id="oneDigit" placeholder="string w/ a number" />
          <button onClick={checkMinOneDigit}>Validate</button>
        </form>
        <p>
          <br />
          c. Write a regular expression to match strings
          with at least one special character (e.g., !@#$%^&*):
        </p>
        <form>
          At least 1 special character validation:
          <input type="text" id="oneSpecialChar" placeholder="string w/ a special character" />
          <button onClick={checkMinOneSpecialChar}>Validate</button>
        </form>
        <p>
          <h3>Quantifiers:</h3>
          a. Write a regular expression to match strings
          containing exactly three consecutive vowels:
        </p>
        <form>
          Exactly 3 consecutive vowels validation:
          <input type="text" id="threeVowels" placeholder="string w/ 3 consec vowels" />
          <button onClick={checkThreeVowels}>Validate</button>
        </form>
        <p>
          <br />
          b. Write a regular expression to match strings
          containing at least two or more digits followed by a space:
        </p>
        <form>
          At least 2 digits followed by a space validation:
          <input type="text" id="twoDigits" placeholder="string w/ 2 digits + space" />
          <button onClick={checkTwoDigits}>Validate</button>
        </form>
        <p>
          <br />
          c. Write a regular expression to match strings
          containing at least one or more occurrences of the word "cat":
        </p>
        <form>
          At least 1 occurrence of "cat" validation:
          <input type="text" id="cat" placeholder="string w/ cat" />
          <button onClick={checkCat}>Validate</button>
        </form>
        <br />
        <p>
          <h3>Anchors:</h3>
          a. Write a regular expression to match strings
          starting with "http://" or "https://":
        </p>
        <form>
          Starts with "http://" or "https://" validation:
          <input type="text" id="httpOrHttps" placeholder="starts w/ http:// or https://" />
          <button onClick={checkHttpOrHttps}>Validate</button>
        </form>
        <p>
          <br />
          b. Write a regular expression to match strings
          ending with a file extension (e.g., .pdf, .jpg, .gif):
        </p>
        <form>
          Ends with a file extension validation:
          <input type="text" id="fileExtension" placeholder="file ending .pdf, .jpg, .gif" />
          <button onClick={checkFileExtension}>Validate</button>
        </form>
        <p>
          <br />
          c. Write a regular expression to match strings
          containing a word with exactly five letters:
        </p>
        <form>
          Contains a word with exactly 5 letters validation:
          <input type="text" id="fiveLetters" placeholder="string w/ 5 letters" />
          <button onClick={checkFiveLetters}>Validate</button>
        </form>
        <br />
        <p>
          <h3>Grouping and Alternation:</h3>
          a. Write a regular expression to match strings
          contains either "apple" or "banana":
        </p>
        <form>
          Contains either "apple" or "banana" validation:
          <input type="text" id="appleOrBanana" placeholder="string w/ apple or banana" />
          <button onClick={checkAppleOrBanana}>Validate</button>
        </form>
        <p>
          <br />
          b. Write a regular expression to match strings
          contain a repeated word (e.g., "the the" or "dog dog"):
        </p>
        <form>
          Contains a repeated word validation:
          <input type="text" id="repeatedWord" placeholder="string w/ repeated word" />
          <button onClick={checkRepeatedWord}>Validate</button>
        </form>
        <p>
          <br />
          c. Write a regular expression to match strings
          contain a number followed by either "st", "nd", "rd", or "th":
        </p>
        <form>
          Contains a number followed by "st", "nd", "rd", or "th" validation:
          <input type="text" id="numberWithSuffix" placeholder="string w/ number + st, nd, rd, or th" />
          <button onClick={checkNumberWithSuffix}>Validate</button>
        </form>
        <br />
        <p>
          <h3>Lookahead and Lookbehind Assertions:</h3>
          a. Write a regular expression to match strings
          contain "foo" followed by "bar" but not "foobar":
        </p>
        <form>
          Contains "foo" followed by "bar" but not "foobar" validation:
          <input type="text" id="fooBar" placeholder="string w/ foo + bar but not foobar" />
          <button onClick={checkFooBar}>Validate</button>
        </form>
        <p>
          <br />
          b. Write a regular expression to match strings
          containing a digit, but only if it is not preceded by a letter:
        </p>
        <form>
          Contains a digit, but only if it is not preceded by a letter validation:
          <input type="text" id="digitNotPrecededByLetter" placeholder="string w/ digit not preceded by letter" />
          <button onClick={checkDigitNotPrecededByLetter}>Validate</button>
        </form>
        <p>
          <br />
          c. Write a regular expression to match strings
          containing the word "password" followed by a
          string of at least 8 characters, including at least one digit,
          one uppercase letter, and one lowercase letter:
        </p>
        <form>
          Contains "password" followed by a string of at least 8 characters, including at least one digit, one uppercase letter, and one lowercase letter validation:
          <input type="text" id="password" placeholder="string w/ password + 8 chars, 1 digit, 1 uppercase, 1 lowercase" />
          <button onClick={checkPassword}>Validate</button>
        </form>
        <br />
        <p>
          <h3>Regular Expression Puzzles (because why not):</h3>
          a. Write a regular expression to match strings
          that are palindromes (i.e., the string is the same forwards and backwards):
        </p>
        <form>
          Palindrome validation:
          <input type="text" id="palindrome" placeholder="string that is the same forwards and backwards" />
          <button onClick={checkPalindrome}>Validate</button>
        </form>
        <p>
          <br />
          b. Write a regular expression to match strings
          containing a balanced set of parentheses:
        </p>
        <form>
          Balanced set of parentheses validation:
          <input type="text" id="balancedParentheses" placeholder="string w/ balanced parentheses" />
          <button onClick={checkBalancedParentheses}>Validate</button>
        </form>
        <p>
          <br />
          c. Write a regular expression to match strings
          containing a valid IPv4 address:
        </p>
        <form>
          Valid IPv4 address validation:
          <input type="text" id="ipv4" placeholder="string w/ valid IPv4 address" />
          <button onClick={checkBalancedParentheses}>Validate</button>
        </form>
        <br />
        <h1>FIN <br /> 🥵</h1>
      </header>
    </div>
  );
}

export default App;
