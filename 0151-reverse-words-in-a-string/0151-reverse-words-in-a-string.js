/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.trim().split(' ');
    let trimmedWords = [];
    words.forEach(word => {
            if(word.trim().length) trimmedWords.push(word.trim())
        }
    )
    return trimmedWords.reverse().join(' ');
};