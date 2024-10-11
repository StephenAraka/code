/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = Math.max(...candies);
    let result = [];
    candies.forEach(candy => {
        if (candy + extraCandies >= maxCandies) result.push(true)
        else result.push(false);
    });

    return result;
};