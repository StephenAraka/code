/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const rotate = k % nums.length
    const rotated = nums.slice(-rotate).concat(nums.slice(0, -rotate))

    for (let i = 0; i < nums.length; i++) {
        nums[i] = rotated[i]
    }

    return nums
};