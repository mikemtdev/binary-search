// Author: Mike M.T Njovu
// Email: mikemnjovu@gmail.com
// Github: https://github.com/mikemtdev
// Twitter: https://twitter.com/mikemtdev
// Language: javascript

// inefficient way of searching through an algorithm doing things.
const search = (nums, val) => {
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === val) {
      return i;
    }
    console.log(i);
  }
  return -1;
};

// Binary Search
const binarySearch = (nums, target) => {
  let lower = 0;
  let upper = nums.length - 1;

  while (lower <= upper) {
    const middle = lower + Math.floor((upper - lower) / 2);
    // Finding out how many times the while is run before target value is found.
    console.log('====================================');
    console.log('run');
    console.log('====================================');
    // Checking if the middle value is the target value.
    if (target === nums[middle]) {
      return middle;
    }
    //  Checking if the target value is less than the middle value.
    if (target < numbers[middle]) {
      // if it is the upper value is set to the middle value. (focusing on the first half of the array)
      upper = middle - 1;
    } else {
      // if target is greater than the middle value the lower value is set to the middle value. (focusing on the other half of the array)
      lower = middle + 1;
    }
  }
  return -1;
};

// Our test variables.
const numbers = [-1, 0, 3, 5, 9, 12];
const target = 9;

// Calling the binary search function.
binarySearch(numbers, target);

// logging the result of the binary search function.
console.log(binarySearch(numbers, target));
//  checking the length of the array
console.log(numbers.length);
