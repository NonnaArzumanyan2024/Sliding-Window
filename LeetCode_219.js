/*
219. Contains Duplicate II - Easy
---------------------------------
Topic: Hash Table, Sliding Window

Given an integer array nums and an integer k, 
return true if there are two distinct indices i and j in the array such that 
nums[i] == nums[j] and abs(i - j) <= k.

Examples:
1. Input: nums = [1,2,3,1],      k = 3 -> Output: true
2. Input: nums = [1,0,1,1],      k = 1 -> Output: true
3. Input: nums = [1,2,3,1,2,3],  k = 2 -> Output: false

Time Complexity:  O(n)
Space Complexity: O(k)
*/



var containsNearbyDuplicate = function(nums, k) {
    const seen = new Set();                                 // To keep track of elements in current window

    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {                            // If current number already exists in window, return true
            return true;
        }

        seen.add(nums[i]);                                  // Add current number to the window

        if (seen.size > k) {                                // Maintain window size k

            seen.delete(nums[i - k]);                       // Remove oldest number from window
        }
    }

    return false;                                           // No duplicates found within distance k
};


// ---------------- Test Cases ----------------
console.log(containsNearbyDuplicate([1,2,3,1], 3));         // Output: true
console.log(containsNearbyDuplicate([1,0,1,1], 1));         // Output: true
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));     // Output: false
console.log(containsNearbyDuplicate([99,99], 2));           // Output: true
console.log(containsNearbyDuplicate([1,2,3,4,5], 3));       // Output: false
