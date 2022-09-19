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
// the value if its true and use the else for odd numbers.lm