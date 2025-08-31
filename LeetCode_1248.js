/*
1248. Count Number of Nice Subarrays - Medium
---------------------------------------------
Topic: Sliding Window, Array

Given an integer array nums and an integer k, a "nice" subarray is defined as a subarray containing exactly k odd numbers. 
Return the number of nice subarrays in nums.

Examples:
1. Input: nums = [1,1,2,1,1],            k = 3 -> Output: 2
2. Input: nums = [2,4,6],                k = 1 -> Output: 0
3. Input: nums = [2,2,2,1,2,2,1,2,2,2],  k = 2 -> Output: 16

Time Complexity:  O(n)
Space Complexity: O(1)
*/



var numberOfSubarrays = function(nums, k) {

    function atMost(k) {                                        // Helper function: count subarrays with at most k odd numbers
        let left = 0;                                           // Left pointer of window
        let count = 0;                                          // Total subarrays
        let oddCount = 0;                                       // Number of odd numbers in current window

        for (let right = 0; right < nums.length; ++right) {     // Increment oddCount if current element is odd
            if (nums[right] % 2 === 1) {
                ++oddCount;
            }

            while (oddCount > k) {                              // Shrink window if oddCount exceeds k
                if (nums[left] % 2 === 1) {
                    --oddCount;
                }
                ++left;
            }

            count += right - left + 1;                          // Add number of subarrays ending at right
        }

        return count;
    }

    return atMost(k) - atMost(k - 1);                           // Number of subarrays with exactly k odd numbers
};


// ---------------- Test Cases ----------------
console.log(numberOfSubarrays([1,1,2,1,1], 3));                 // Output: 2
console.log(numberOfSubarrays([2,4,6], 1));                     // Output: 0
console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2], 2));       // Output: 16
console.log(numberOfSubarrays([1,3,5,7,9], 1));                 // Output: 5
console.log(numberOfSubarrays([1,2,3,4,5,6], 2));               // Output: 6
