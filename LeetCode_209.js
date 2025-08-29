/*
209. Minimum Size Subarray Sum

Given an array of positive integers nums and a positive integer target, 
return the minimal length of a subarray whose sum is greater than or equal to target.
If there is no such subarray, return 0 instead.

Example 1:
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:
Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
*/



function minSubArrayLen(target, nums) {
    let start = 0;                                               // Left boundary of the window
    let sum = 0;                                                 // Current window sum
    let minLen = Infinity;                                       // Minimal length of subarray

    for (let end = 0; end < nums.length; ++end) {
        sum += nums[end];                                        // Expand the window from the right

                                                                 // Shrink the window from the left as long as the sum ≥ target
        while (sum >= target) {
            minLen = Math.min(minLen, end - start + 1);          // Update minimal length
            sum -= nums[start];                                  // Remove leftmost element
            ++start;                                             // Move window's start forward
        }
    }

    return minLen === Infinity ? 0 : minLen;                     // If no valid subarray, return 0
}


// Original examples
console.log(minSubArrayLen(7, [2,3,1,2,4,3]));            // Output: 2 ([4,3])
console.log(minSubArrayLen(4, [1,4,4]));                  // Output: 1 ([4])
console.log(minSubArrayLen(11, [1,2,3,4,5]));             // Output: 3 ([3,4,5])

// Additional examples

// 1. No subarray meets the target
console.log(minSubArrayLen(15, [1,2,3,4]));               // Output: 0

// 2. Single element meets the target
console.log(minSubArrayLen(5, [5,1,1,1]));                // Output: 1 ([5])

// 3. Whole array is needed
console.log(minSubArrayLen(10, [1,2,3,4]));               // Output: 4 ([1,2,3,4])

// 4. Multiple minimal subarrays, should return smallest length
console.log(minSubArrayLen(6, [1,2,3,1,1,2,4]));          // Output: 2 ([2,4] or [3,3])

// 5. Large numbers
console.log(minSubArrayLen(100, [10,20,30,40,50]));       // Output: 3 ([30,40,50])
