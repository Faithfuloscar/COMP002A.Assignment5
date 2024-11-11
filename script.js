// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.
// Example output:
// console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function for ranges start and end i is the start and will keep adding 1 until end is reached.
// function also calculates the range.
function range(start, end) {
    let result = [];
    for (let i = start; i <= end; i++)
        {
            result.push(i);
        }  
    return result;
}

// console log used to demonstrate function works
console.log(range(9, 25));

// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.
// Example output:
// console.log(sum(range(1, 10))); // returns 55

// function to sum an array of numbers
function sum(numbers) {
    return numbers.reduce((total, numbers) => total + numbers, 0);
}

// checks to ensure code runs and outputs (55)
console.log(sum(range(1,10)));

// 3. Arrays have a reverse method that changes the array by inverting the order in which
// its elements appear. For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, takes an array as an argument and
// produces a new array that has the same elements in the inverse order. The second,
// reverseArrayInPlace, does what the built-in reverse method does: it modifies the array
// given as an argument by reversing its elements. Neither may use the standard reverse
// method.

// function to create a reverse array
function reverseArray(array) {
    let reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}
// Example output for reverseArray:
// console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"];
console.log(reverseArray(["A", "B", "C"]));


// Function for reverse array in place
function reverseArrayInPlace(array){
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        [array[left], array[right]] = [array[right], array[left]];

        left++;
        right--;
    }
    return array;
}


// Example output for reverseArrayInPlace:
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue); // outputs [5, 4, 3, 2, 1]
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue)
console.log(arrayValue);
