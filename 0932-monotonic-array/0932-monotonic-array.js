/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let i = 1;
    let increasing = true
    let decreasing = true

    if (nums.length < 2) return true 

    while (i < nums.length) {
        if (nums[i] > nums[i - 1]) decreasing = false
        if (nums[i] < nums[i - 1]) increasing = false
        i ++
    }

    return increasing || decreasing
};