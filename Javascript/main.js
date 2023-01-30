// Abbeviate a 2 word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }

//   Create a new variable that takes in the original function and use the .split() to turn the string from the function into a
//    a new array. Now we have a new array with 2 elements (First Name and Last name). Return it using the [0][0] to use the first index of the first
//    element and then contactinate it with + "." to the second element of the array and it's first element.

// ----------------------------------------------------------------------------------------------------------------------

// You only need one - Begginer
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a,x){
    return a.includes(x);
  };

//   In JavaScript, includes() method determines whether a string contains the given characters within it or not. 
//   This method returns true if the string contains the characters, otherwise, it returns false.

// ----------------------------------------------------------------------------------------------------------------------

// Basic Training: Add item to Array

// Add the value "codewars" to the websites array.
// After your code executes the websites array should == ["codewars"]

// The websites array has already been defined for you using the following code:

// var websites = [];


var websites = [];
websites.push("codewars");

// The .push() method adds one element to the end of an Array.

// ----------------------------------------------------------------------------------------------------------------------


// Opposite Number

// DESCRIPTION:
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
return -number;
}

// This one is simple. Just return the number with the - operator before it.






// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.


function addLength(str) {
  let words = str.split(' ');
  let length = words.map(word => word.length);
  return words.map((word,index) => word + " " + length[index])  
  }

  // In this function, we first split the input sentence into words using the split() method and the separator " ". 
  // Then, we use the map() method to find the length of each word and store it in the lengths array. 
  // Finally, we use another call to map() to combine each word with its length, separated by a space.

  
//   Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(item=> !geese.includes(item))

  // In this function, we first define an array called geese which contains the strings that we want to remove.
  //  Then, we use the filter() method to create a new array that only contains elements from the original birds
  //   array that are not in the geese array.

  //   The filter() method takes a callback function as its argument, and returns a new array that only contains 
  //   elements for which the callback function returns true. In this case, the callback function is item => !geese.includes(item), 
  //   which takes a word as its argument and returns true if the word is not in the geese array.

  //   So, this line of code filters the birds array and returns a new array that only contains elements 
  //   that are not in the geese array.

//   Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function encourageAlex(n) {
  if (n >= 10) {
    return "Great, now move on to tricks";
  } else {
    return "Keep at it until you get it";
  }
}
// In this function, we use an if-else statement to check 
// if Alex has gotten 10 or more hoops. If n is greater
//  than or equal to 10, we return the string "Great, now move on to tricks".
//   Otherwise, we return the string "Keep at it until you get it".



// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return s.replace(/!/g, '')
  
}

// In this function, we use the replace() method to replace all occurrences of the exclamation mark !
//  with an empty string ''. We use the /!/g regular expression pattern to match all occurrences of !, 
//  where the g flag stands for global, meaning all matches should be replaced. 
-------------------------------------------

// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Let's look at a few examples:

// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

function nthPower(arr, n) {
  if (n >= arr.length) {
    return -1;
  } else {
    return Math.pow(arr[n], n);
  }
}

// In this function, we first check if the index n is outside of the array, i.e. if n is greater than or equal 
// to the length of the array arr. If so, we return -1 as specified in the problem. Otherwise, we use the Math.pow() 
// function to raise the element at index n in the array to the power of n, and return the result.
-----------------

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let count = 0
  let vowels = ['a','e','i','o','u']
  for(let i=0; i<str.length; i++)
    if(vowels.includes(str[i])){
      count++
    }
  return count
}
// In this function, we first define a variable count to keep track of the number of vowels found in the string.
//  We also define an array vowels containing the vowels we're interested in. We then loop through each character 
//  in the string using a for loop, and check if the character is a vowel using the includes() method of the vowels array.
//   If the character is a vowel, we increment the count variable. Finally, we return the count variable, which contains the 
//   total number of vowels found in the string.\
-----------

// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

function testEven(n) {
  if ( n % 2 === 0 ){
    return true;
  }
  else return false;
}

// Write a conditional to see if the n is even by using the modulus. Then have the function return 
// the value if its true and use the else for odd numbers.
// -------------
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor.
//  First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

function divisibleBy(numbers, divisor) {
  return numbers.filter(number => number % divisor === 0);
}

// In this function, we use the filter() method of the numbers array to create a new array 
// with only the elements that pass the test specified by the callback function. The callback 
// function takes a single argument number, and returns true if the number is divisible by the
//  divisor argument. To check for divisibility, we use the modulo operator %. If the remainder 
//  of number % divisor is 0, then number is divisible by divisor. The resulting array contains
//   all the numbers from the input array that are divisible by the divisor.
------------



// In this simple exercise, you will build a program that takes a value, integer , and returns a list
//  of its multiples up to another value, limit . If limit is a multiple of integer, it should be included 
//  as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit 
//  will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return 
// [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

function findMultiples(integer, limit) {
  let multiples = [];
  for(let i = integer; i<=limit; i+=integer){
    multiples.push(i)
  }
  return multiples;
}

// In this function, we first create an empty array multiples to store the multiples of integer. We then use a for loop 
// to iterate from integer up to limit, incrementing by integer at each step. Inside the loop, we push the current number
//  onto the multiples array. Finally, we return the multiples array containing all the multiples of integer up to limit.

---------------
// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: side will be an integer

var cubeChecker = function(volume, side){
  return volume===side*side*side&&volume>0;
 }


//  you can simplify the logic in the function by directly checking if the given volume is equal to the cube 
//  of the given side, and whether both the volume and the side are positive. Here's an updated version of the 
//  function that uses this simplified logic:

 function isCube(volume, side) {
  return volume === side * side * side && volume > 0 && side > 0;
}

// This function returns true if the volume is equal to the cube of the side and both the volume and the side are 
// positive. Otherwise, it returns false. This is a simpler and more concise way to check if the cuboid has equal sides.

------------------


// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

// You can create a function that takes a 2D array as input and returns its CSV representation 
// as a string by following these steps:

// Use the map() method to map each inner array to a string representation of its elements joined by commas.
// Join the resulting strings with newline characters to form the final CSV string.
// Here's the implementation of the function in JavaScript:

function toCsvText(array) {
  return array.map(row => row.join(',')).join('\n');
}

//   This function takes a 2D array arr as input and returns its CSV representation as a string. 
//   The map() method is used to convert each inner array row to a string representation by joining 
//   its elements with commas using the join() method. The resulting strings are then joined with 
//   newline characters using the join() method again to form the final CSV string.

// Here's an example usage of the function:

// const arr = [[1, 2, 3], [4, 5, 6]];
// const csv = toCsvText(arr);
// console.log(csv); // Output: "1,2,3\n4,5,6"
---------------------------------
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function multiplyByEightOrNine(num) {
  if (num % 2 === 0) {
    return num * 8;
  } else {
    return num * 9;
  }
}

// This function takes a number num as input and returns its result after multiplying by 8 if it's even,
//  and by 9 otherwise. The % operator is used to check whether num is even or odd, and the conditional 
//  statement (if-else) is used to perform the multiplication accordingly.
--------------
// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock

function sayHello(name) {
  return `Hello, ${name}`
}

// The code appears to be trying to concatenate the string "Hello" with the name parameter passed to the 
// function, but there is no space between them, which can cause the output to look incorrect. To fix this,
//  we can add a space after "Hello" using the string concatenation operator +: or use the `${}` 
------------------


// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]


function digitize(n) {
  return (n + '').split('').map(Number).reverse()
}

// (n + '') converts the number n to a string by concatenating it with an empty string. 
// This is a common trick to convert a number to a string in JavaScript.
// .split('') splits the resulting string into an array of individual characters.
// .map(Number) maps each character in the array to a number using the Number() constructor function. 
// This is a concise way of converting an array of strings to an array of numbers.
// .reverse() reverses the resulting array of numbers.
// So the final result is an array of the digits of n in reverse order.
--------------------

// Classy Extensions
// Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing extends keyword.
//  You will be preloaded with the Animal class, so you should only edit the Cat class.
// Task
// Your task is to complete the Cat class which Extends Animal and replace the speak method to return 
// the cats name + meows. e.g. 'Mr Whiskers meows.'
// The name attribute is passed with this.name (JS)


class Cat extends Animal {
  speak(){
    return this.name + ' meows.'
  }
}

// In this solution, just create a function/method that returns the this.name property with the 'meows'
// at the end. (you can also write it this way: `${this.name} meows.`)
--------------------------------

// Your task is to make two functions, max and min (maximum and minimum in PHP) 
// that take a(n) array/vector of integers list as input and outputs, respectively, 
// the largest and lowest number in that array/vector.
// #Examples
// max([4,6,2,1,9,63,-134,566]) returns 566
// min([-52, 56, 30, 29, -54, 0, -110]) returns -110
// max([5]) returns 5
// min([42, 54, 65, 87, 0]) returns 0

function max(numbers) {
  let currentMax = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > currentMax) {
      currentMax = numbers[i];
    }
  }
  return currentMax;
}

function min(numbers) {
  let currentMin = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < currentMin) {
      currentMin = numbers[i];
    }
  }
  return currentMin;
}

// These functions take an array of integers as input and iterate through the array,
//  comparing each number to a variable that holds the current maximum or minimum value found so far.
//   If a number is found that is greater than the current maximum, or less than the current minimum, 
//   the variable is updated to reflect the new value. The functions then return the final maximum or
//    minimum value found.

// Here's an example of how you could use these functions:

// const numbers = [3, 7, 2, 9, 1];
// const maximum = max(numbers); // returns 9
// const minimum = min(numbers); // returns 1
------------------------------

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements.
//  I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  //   return arr1 + arr2; //something went wrong
    const sumArray = arr1.map((value,index) => value + arr2[index]).reduce((acc,curr) => acc + curr, 0)
    return sumArray
  }

//   const array1 = [1, 2, 3, 4, 5];
//   const array2 = [6, 7, 8, 9, 10];

//   const sumArray = array1.map((value, index) => value + array2[index]).reduce((acc, curr) => acc + curr, 0);

// console.log(sumArray); // Output: 66

// In this example, we first define two arrays, array1 and array2, with five elements each.
//  We then use the map() method to iterate over the elements of array1 and add the corresponding 
//  element of array2 to each element of array1.

// Next, we use the reduce() method to calculate the sum of all the elements in the resulting array. 
// The reduce() method takes two arguments: a callback function that performs the calculation and an 
// initial value for the accumulator, which in this case is set to 0.

// Finally, we log the sum of the two arrays to the console. In this example, the output is 66, 
// which is the sum of all the elements in the new array created by map()..cas












