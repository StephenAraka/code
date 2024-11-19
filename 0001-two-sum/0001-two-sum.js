/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map(); // To store the number and its index
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the number we need to find
        
        if (map.has(complement)) {
            // If complement exists in the map, return its index and the current index
            return [map.get(complement), i];
        }
        
        // Otherwise, store the current number and its index in the map
        map.set(nums[i], i);
    }
};