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

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a,x){
    return a.includes(x);
  };

//   In JavaScript, includes() method determines whether a string contains the given characters within it or not. 
//   This method returns true if the string contains the characters, otherwise, it returns false.

// ----------------------------------------------------------------------------------------------------------------------


// Add the value "codewars" to the websites array.
// After your code executes the websites array should == ["codewars"]

// The websites array has already been defined for you using the following code:

// var websites = [];


var websites = [];
websites.push("codewars");

// The .push() method adds one element to the end of an Array.

// ----------------------------------------------------------------------------------------------------------------------