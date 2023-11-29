
// Spoonerize... with numbers... numberize?... numboonerize?... 
// noonerize? ...anyway! If you don't yet know what a spoonerism is 
// and haven't yet tried my spoonerism kata, please do check it out first.

// You will create a function which takes an array of 
// two positive integers, spoonerizes them, and returns the positive 
// difference between them as a single number or 0 if the numbers are equal:
// [123, 456] = 423 - 156 = 267

// Your code must test that all array items are numbers and 
// return "invalid array" if it finds that either item is not a number. 
// The provided array will always contain 2 elements.

// When the inputs are valid, they will always be integers, 
// no floats will be passed. However, you must take into account 
// that the numbers will be of varying magnitude, between and within 
// test cases.


function noonerize(numbers) {
  // Check if both elements in the array are numbers
  if (typeof numbers[0] === "number" && typeof numbers[1] === "number") {
    // Convert the numbers to strings for manipulation
    let firstNumber = numbers[0].toString();
    let secondNumber = numbers[1].toString();

    // Extract the first digit of each number
    let firstOfFirst = firstNumber.slice(0, 1);
    let firstOfSecond = secondNumber.slice(0, 1);

    // Create new numbers by swapping the first digits
    let newOne = `${firstOfFirst}` + secondNumber.slice(1, secondNumber.length);
    let newTwo = `${firstOfSecond}` + firstNumber.slice(1, firstNumber.length);

    // Calculate the absolute difference between the two new numbers and return the result
    return Math.abs(newOne - newTwo);
  } else {
    // Return an error message if the input array does not contain two numbers
    return 'invalid array';
  }
}
