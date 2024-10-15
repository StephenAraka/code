/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let difference = [];
    let answer1 = [];
    let answer2 = [];
    
    // Difference 1
    nums1.forEach((num) => {
        if (!nums2.includes(num) && !answer1.includes(num)) answer1.push(num)
    })
    
    difference.push(answer1);
    
    // Difference 2
    nums2.forEach((num) => {
        if (!nums1.includes(num) && !answer2.includes(num)) answer2.push(num)
    })
    
    difference.push(answer2);
    
    return difference;
};