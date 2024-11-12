/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let number = x;
    let numberString = x.toString()
    let numberStringReversed = numberString.split('').reverse().join('');
    let reversedNumber = parseInt(numberStringReversed);

    
    return x === reversedNumber;
};