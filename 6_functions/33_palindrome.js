
function isPalindrome (word){

  let lowerWord = word.toLowerCase();

  let reversedWord = lowerWord.split('').reverse().join('');

  return lowerWord === reversedWord;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("moonlight"));
console.log(isPalindrome("aviary"));
