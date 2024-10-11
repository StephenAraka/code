/**
 * @param {string} s
 * @return {string}
 */
/* 
    1. Extract vowels into array
    2. Store indexes
    3. Reverse extracted vowels
    4. Use stored indexes with reversed vowels
 */
var reverseVowels = function(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let lettersArray = s.split('');
  let vowelsInArray = [];
  let vowelsIndexes = [];
  lettersArray.forEach((letter, index) => {
      if (vowels.includes(letter.toLowerCase())) {
          vowelsInArray.push(letter);
          vowelsIndexes.push(index);
      }
  });
  
  vowelsInArray = vowelsInArray.reverse();
  
  for(let i = 0; i < vowelsIndexes.length; i++) {
    lettersArray[vowelsIndexes[i]] = vowelsInArray[i]
  }

  return lettersArray.join('');

};