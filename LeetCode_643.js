/*
643. Maximum Average Subarray I - Easy
--------------------------------------
Topic: Sliding Window, Array

Given an integer array nums and an integer k, find the contiguous subarray of length k 
that has the maximum average value and return this value rounded to 2 decimal places.

Examples:
1. Input: nums = [1,12,-5,-6,50,3], k = 4 -> Output: 12.75
2. Input: nums = [5],               k = 1 -> Output: 5.00

Time Complexity:  O(n)
Space Complexity: O(1)
*/



var findMaxAverage = function(nums, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {                           // Calculate the sum of the first k elements
        sum += nums[i];
    }

    let max = sum;                                          // Initialize max sum as the sum of the first window

    for (let i = k; i < nums.length; i++) {                 // Slide the window through the array
        sum += nums[i] - nums[i - k];                       // Update sum by adding new element and removing the first element of previous window
        max = Math.max(max, sum);                           // Update max if current window sum is larger

    }

    return +(max / k).toFixed(2);                           // Return the maximum average, rounded to 2 decimal places
};


// ---------------- Test Cases ----------------
console.log(findMaxAverage([1,12,-5,-6,50,3], 4));          // Output: 12.75
console.log(findMaxAverage([5], 1));                        // Output: 5.00
console.log(findMaxAverage([0,4,0,3,2], 1));                // Output: 4.00
console.log(findMaxAverage([1,2,3,4,5,6], 3));              // Output: 5.00
console.log(findMaxAverage([100,200,300,400], 2));          // Output: 350.00
