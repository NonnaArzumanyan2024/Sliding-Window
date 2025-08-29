/*
3. Longest Substring Without Repeating Characters - Medium

Given a string s, find the length of the longest substring without duplicate characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/



function lengthOfLongestSubstring(s) {
    let start = 0;                                              // Left boundary of the sliding window
    let maxLength = 0;                                          // Store the length of the longest substring
    const seen = new Set();                                     // Keep track of characters in current window

    for (let end = 0; end < s.length; ++end) {                  // Expand the window from the right
        while (seen.has(s[end])) {                              // Shrink window if duplicate found
            seen.delete(s[start]);                              // Remove leftmost character
            ++start;                                            // Move window start forward
        }

        seen.add(s[end]);                                       // Add current character to the window
        maxLength = Math.max(maxLength, end - start + 1);       // Update max length
    }

    return maxLength;                                           // Return length of longest substring
}


// Test Cases
console.log(lengthOfLongestSubstring("abcabcbb"));              // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));                 // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));                // Output: 3 ("wke")
console.log(lengthOfLongestSubstring(""));                      // Output: 0 (empty string)
console.log(lengthOfLongestSubstring("dvdf"));                  // Output: 3 ("vdf")