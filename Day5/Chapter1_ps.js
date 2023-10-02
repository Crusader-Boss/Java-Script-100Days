/*
// 1. Create a variable of type string and try to add a number to it

let n = "ravi"
console.log(n)

let b = n + 64
console.log(b)

// 2. use type of operator to find the datatype of the string in the last question.

console.log(typeof(b))

// 3. Create a const object in javascript.Can you change it to hold a number later ?

const p = "nilesh";
// Let p = 64
// p = 64
// var p = 64
console.log(p)
// Ans: since it is a constant we cant change it to hold a number later.

// 4. Try to add a new key to the const object in problem 3. were you able to do it ?

p = p + 69
console.log(p)

// Ans: Nope cant do it 

// 5. Write a js program to create a word meaning dictionary of 5 words

correct Ans
 */

// Chapter 1 - Q1
let a = "Harry"
let b = 6
console.log(a + b)

// Chapter 1 - Q2
console.log(typeof (a+b))

// Chapter 1 - Q3
const a1 = {
  name: "Harry",
  section: 1,
  isPrincipal: false
}
// a1 = 45
// a1 = {}

// Chapter 1 - Q4
a1['friend'] = "Shubham"  
a1['name'] = "Lovish"  
console.log(a1)

// Chapter 1 - Q5
const dict = {
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work.",
  profligate: "recklessly extravagant.",
  interlocutor: "a person who takes part in a conversation or dialogue."
}

console.log(dict['yakka'])
console.log(dict.profligate)