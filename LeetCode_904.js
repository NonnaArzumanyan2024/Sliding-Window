/*
904. Fruit Into Baskets - Medium

You are visiting a farm that has a single row of fruit trees arranged from left to right. 
The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.
You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. 
The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick. 

Example 1:
Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.

Example 2:
Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can pick from trees [1,2,2].
If we had started at the first tree, we would only pick from trees [0,1].

Example 3:
Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].

Time complexity: O(n)
Space complexity: O(1) (constant space, since basket can hold at most 2 keys)
*/


function totalFruit(fruits) {
    let start = 0;                                                            // Left boundary of sliding window
    let maxFruits = 0;                                                        // Maximum number of fruits collected
    const basket = new Map();                                                 // Map to store count of each fruit type in window

    for (let end = 0; end < fruits.length; ++end) {
        basket.set(fruits[end], (basket.get(fruits[end]) || 0) + 1);          // Add current fruit to basket or increment its count

        while (basket.size > 2) {                                             // Shrink window if we have more than 2 types of fruits
            basket.set(fruits[start], basket.get(fruits[start]) - 1);         // Remove one from left
            if (basket.get(fruits[start]) === 0) {
                basket.delete(fruits[start]);                                 // Remove fruit type if count is 0
            }
            ++start;                                                          // Move left boundary
        }

        maxFruits = Math.max(maxFruits, end - start + 1);                     // Update max fruits collected

    }

    return maxFruits;
}


// Example Usage & Test Cases
console.log(totalFruit([1,2,1]));                                             // Output: 3 ([1,2,1])
console.log(totalFruit([0,1,2,2]));                                           // Output: 3 ([1,2,2])
console.log(totalFruit([1,2,3,2,2]));                                         // Output: 4 ([2,3,2,2])
console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4]));                             // Output: 5 ([1,2,1,1,2])
console.log(totalFruit([1,1,1,1,1]));                                         // Output: 5 (whole array)