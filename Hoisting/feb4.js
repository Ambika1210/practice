function isPalindrome(str) {
  const rev = str.split('').reverse().join('');
  return str === rev;
}
console.log(isPalindrome("madam")); // true
