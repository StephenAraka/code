To solve this problem without using division and in O(n) time, we can break the task into two passes:

Pass 1 (Prefix Product): Traverse the array from the left and calculate the product of all elements before each index i. Store these prefix products in the result array.
Pass 2 (Suffix Product): Traverse the array from the right and calculate the product of all elements after each index i. Multiply this suffix product with the corresponding prefix product stored in the result array.
Step-by-step breakdown:
Initialize the result array: Start by creating an empty array answer where answer[i] will hold the product of all the elements except nums[i].
First Pass: Traverse from left to right. For each element i, compute the product of all elements before i (this is called the prefix product).
Second Pass: Traverse from right to left. For each element i, compute the product of all elements after i (this is called the suffix product). Multiply the prefix and suffix products to get the final result.

Example Walkthrough:
For the input: nums = [1, 2, 3, 4]

Prefix Product Calculation:

answer[0] = 1 (initial prefix)
answer[1] = 1 (1 is the product before index 1)
answer[2] = 1 * 2 = 2 (product of elements before index 2)
answer[3] = 1 * 2 * 3 = 6 (product of elements before index 3)
Now, answer = [1, 1, 2, 6]

Suffix Product Calculation:

Start from the right:
answer[3] *= 1 = 6 (no elements after index 3)
answer[2] *= 4 = 8 (4 is the product after index 2)
answer[1] *= 4 * 3 = 12 (product of elements after index 1)
answer[0] *= 4 * 3 * 2 = 24 (product of elements after index 0)
Final answer = [24, 12, 8, 6]

Time Complexity:
O(n): We traverse the array twice (once for the prefix and once for the suffix), so the overall time complexity is linear.
Space Complexity:
O(1) (excluding the output array): We are not using any additional arrays except for the answer array that we return. All calculations are done in place.
