function reverse(word){
  return word.split("").reverse().join("")
}


function isPalindrome(word) {
  const reversedWord = reverse(word);
  return word === reversedWord
}

/* 
  Pseduocode

  reverse the input string

  if the input is the same as the reversed input
    return true
  else
    return false



*/

/*
  Add written explanation of your solution here
*/

/*
make a function that returns true if a word is a palindrome and false if not.
That means if the word is the same as the word in reverse, I should return true.

*/

/*
 mom === mom // true
 abc === cba // false


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("algorithm"));
}

module.exports = isPalindrome;
