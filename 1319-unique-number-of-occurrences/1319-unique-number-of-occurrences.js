/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    // Step 1: Count occurrences of each number
    const countMap = new Map();
    for (let num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    // Step 2: Check if occurrences are unique
    const occurrences = new Set();
    for (let count of countMap.values()) {
        if (occurrences.has(count)) {
            return false;
        }
        occurrences.add(count);
    }

    return true;
};