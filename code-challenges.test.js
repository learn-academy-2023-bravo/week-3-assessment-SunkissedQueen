// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
// From Developer Felix

// a) Create a test with expect statements for each of the variables provided.

describe("fibonacci", () => {
  it("returns a an array of fibonacci numbers the same length of the input", () => {
    const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    
    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})


// b) Create the function that makes the test pass.
//Pseudocode:
//Input:A number that is greater than 2
//output:An array that is the same length of the input number.
//create a function called fibonnaci that takes in a number.
//create a variable in function with an empty array to hold numbers generated that starts a [1,1] like every fibonacci sequence.
//create a for loop that iterates through the newArray starting at the second index though the value of the number input in increments of 1.
//use .push to move the added two previous numbers into the newArray.

const fibonacci = (number) => {
  let newArray = [1, 1]
  for (let i = 2; newArray.length < number; i++) {
    newArray.push(newArray[i - 1] + newArray[i - 2])
    // console.log(newArray) //will show the build up of the array
  }
  return newArray
}



// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
// From Developer Greg
// a) Create a test with expect statements for each of the variables provided.

describe("lowToHigh",()=>{

  const studyMinutesWeek1 = {
    sunday: 90,
    monday: 30,
    tuesday: 20,
    wednesday: 15,
    thursday: 30,
    friday: 15,
    saturday: 60
  }
  const studyMinutesWeek2 = {
    sunday: 100,
    monday: 10,
    tuesday: 45,
    wednesday: 60,
    thursday: 20,
    friday: 15,
    saturday: 65
  }
     it("returns an array of the values from least to greatest", ()=> {

      expect(lowToHigh(studyMinutesWeek1)).toEqual ([15, 15, 20, 30, 30, 60, 90])
      expect(lowToHigh(studyMinutesWeek2)).toEqual ([10, 15, 20, 45, 60, 65, 100])

     })
    })

// b) Create the function that makes the test pass.
//pseudo:
//Input: object
//output: array of the values sorted from least to greatest.
//Create a function called lowToHigh. Then use the Object.values method to isolate the values from each object. Then we will use the .sort method to put those isolated values in order of least to greatest. We should expect to see [15, 15, 20, 30, 30, 60, 90] and [10, 15, 20, 45, 60, 65, 100] respectively.

const lowToHigh = (obj) => {
  return Object.values(obj).sort((a,b)=>a-b)
  }

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
// From Developer Evelyn
// a) Create a test with expect statements for each of the variables provided.
// Process: RED!

// function takes in an array and;
describe("accounting", () => { 
  it("returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    const accountTransactions1 = [100, -17, -23, -9]
    // Expected output: [100, 83, 60, 51]

    const accountTransactions2 = [250, -89, 100, -96]
    // Expected output: [250, 161, 261, 165]

    const accountTransactions3 = []
    // Expected output: []
    // expect statements will contain the function call to call the given functions and;
     // place test variable outputs inside the .toEqual() matcher parameter to compare the given outputs
    expect(accounting(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(accounting(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(accounting(accountTransactions3)).toEqual([])
  })
})


// b) Create the function that makes the test pass.
// Process: GREEN!

// PSEUDOCODE:
// Input: 3 arrays
// Output: An array of the accumulating sum. An empty array should return an empty array.

// Given outputs:
// Input: [100, -17, -23, -9]
// Output: [100, 83, 60, 51]

// Input: [250, -89, 100, -96]
// Output: [250, 161, 261, 165]

// Input: []
// Output: []

// Create a function named "accounting" that takes in an array with a parameter named "arraySum".
// Create a variable named "sum" to let the sum equal zero index(starting point).
// Return an array of the accumulating sum by using high order function .map() method to iterate over each element in the array and keep the original array length.
// Use a anonymous function syntax to invoke the index of zero to accumulate each number and to equal the given output by taking the zero index value and using math logic to take the sum of the next index value to equal a new sum(new index value) and it will use the math logic for each previous index sum in the array.
// An empty array should return an empty array.


const accounting = (arraySum) => {
  let sum = 0
  return arraySum.map((value) => sum += value)
}
