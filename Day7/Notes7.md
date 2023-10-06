
# Conditional Statements

--> Sometimes we might have to execute a vlock of code based off some condition.
--> In Javascript we have 3 forms of if statement :-

1. If Statement
2. If...else statement
3. If...else if...else statement

## If Statement

--> The if statement in javascript looks like this :

if (condition) {
    // execute this code
}

--> The if statement evaluates the condition inside the ().
--> If the condition is evaluated to true, the code inside the body of if is executed else the code is not executed.

## If - else Statement

--> The if statement can have an optional else clause.
--> The synatax looks something like this 

if (condition) {
    // block of code if condition false
}

--> If the condition is true, code inside executed else code inside else block.

## If - else If statement

--> Sometimes we might want to keep rechecking a set of conditions one by one until one matches. We use if else if for achieving this.

--> Syntax of if...else if looks like this 

if (age>0) {
    console.log("A valid age");
}
else if (age>10 && age<15>) {
    dconsole.log("but you are a kid");
}
else if (age>18) {
    console.log("not a kid");
}
else {
    console.log("invalid age")
}

## Javascript Ternary Operator

Evalutaes a condition and executes a block of code based on the condition 

condition ? exp1 : exp 2
example :-
(marks >10) ? 'yes' : 'no'

## Switch

--> The switch statement evaluates an expression, matching the expression's value against a series of case clauses,
 and executes statements after the first case clause with a matching value, until a break statement is encountered.

--> The default clause of a switch statement will be jumped to if no case matches the expression's value.

--> Syntax :- 

switch (expression) {
  case value1:
    statements
  case value2:
    statements
  // …
  case valueN:
    statements
  default:
    statements
}
