function hasTargetSum(array, target) {
  // Initialize an empty set to keep track of numbers we have seen so far.
  const seenNumbers = new Set();

  // Loop through each number in the array
  for (const number of array) {
    // Calculate the complement by subtracting the current number from the target
    const complement = target - number;

    // Check if the complement exists in the set
    if (seenNumbers.has(complement)) {
      // If it does, return true
      return true;
    }

    // If it does not, add the current number to the set
    seenNumbers.add(number);
  }

  // If no pairs add up to the target, return false
  return false;
}

/* 
  Time Complexity: O(n), where n is the length of the array. 
  We only need to iterate through the array once.

  Space Complexity: O(n), because we store each number in a set, which in the worst case can contain all n elements of the array.
*/

/* 
  Pseudocode:
  1. Initialize an empty set to keep track of numbers we have seen so far.
  2. Loop through each number in the array:
     a. Calculate the complement by subtracting the current number from the target.
     b. Check if the complement exists in the set.
     c. If it does, return true.
     d. If it does not, add the current number to the set.
  3. If no pairs add up to the target, return false.
*/

/*
  Explanation:
  The function checks if there are two distinct numbers in the array that add up to the target.
  It uses a set to keep track of numbers we have seen so far.
  For each number in the array, it calculates the complement (target - current number).
  If the complement is already in the set, it means we have found two numbers that add up to the target, so we return true.
  Otherwise, we add the current number to the set and continue.
  If we finish the loop without finding such a pair, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  // Additional custom test cases
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 1, 1, 1], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 1));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([10], 10));
}

module.exports = hasTargetSum;
