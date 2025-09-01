/*
1456. Maximum Number of Vowels in a Substring of Given Length - Medium
----------------------------------------------------------------------
Topic: Sliding Window, String

Given a string s and an integer k, return the maximum number of vowels 
in any substring of s with length k.

Examples:
1. Input: s = "abciiidef", k = 3 -> Output: 3
2. Input: s = "aeiou",     k = 2 -> Output: 2
3. Input: s = "leetcode",  k = 3 -> Output: 2

Time Complexity:  O(n)
Space Complexity: O(1)
*/



var maxVowels = function(s, k) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);          // Set of vowels
    let count = 0;                                              // Count vowels in current window
    let max = 0;                                                // Max vowels found

    for (let i = 0; i < k; i++) {                               // Count vowels in the first window
        if (vowels.has(s[i].toLowerCase())) {
            count++;
        }
    }
    max = count;

    for (let i = k; i < s.length; ++i) {                        // Slide the window across the string
        if (vowels.has(s[i - k].toLowerCase())) {
            --count;                                            // Remove the vowel leaving the window
        }
        if (vowels.has(s[i].toLowerCase())) {
            ++count;                                            // Add the vowel entering the window
        }

        max = Math.max(max, count);                             // Update max
    }

    return max;
};


// ---------------- Test Cases ----------------
console.log(maxVowels("abciiidef", 3));                         // Output: 3
console.log(maxVowels("aeiou", 2));                             // Output: 2
console.log(maxVowels("leetcode", 3));                          // Output: 2
console.log(maxVowels("rhythms", 4));                           // Output: 0
console.log(maxVowels("tryhard", 2));                           // Output: 1
