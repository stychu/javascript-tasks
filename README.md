# Basic JavaScipt Part II

## Summary
JS Assessment tests for basic JavaScript knowledge. Each exercise consist of a few simple tasks. You have been provided with the function
 name and purpose, your job is to implement them.
 
Write your solutions inside `app/exercise2.js` file. 

## Goals

### reverseNumber function

Modify **reverseNumber** function where:

-   **num** - is a Number 

Given correct parameter the function should return reverse number. Otherwise the function should return false.  

## squareOrCube function

Modify **squareOrCube** function where:

-   **array** - is an Array
    
The function should square every even number and cube every odd number. They should be returned as an array of numbers.

## replaceString function

Modify **replaceString** function that replace the indicated string in the list of string:

-   **list** - is an Array of Strings
-   **searchString** - is a String to replaced
-   **newString** - is a String which replace **searchString**

**searchString** parameter should be replaced with the **newString** string inside of the provided array. When achieved the requirements you are supposed to 
return the corrected array. If the **searchString** doesn't exist return false.

## maxArray function

Modify **maxArray** function where:

-   **array** - is an Array of Numbers
    
**maxArray** function should find and return maximum number from the Number type elements contained in the **array**.

## getObject function

Modify **getObject** function where:

-   **list** - parameter should be an Array of objects
-   **name** - parameter should be a String

Every object has **name** property defined as String. The function should return the object that has the same value contained in **name** property as
the function second parameter. If there are no such object on the list, it should return boolean false value.

## Before you start...

JavaScript basic functions:

    http://www.w3schools.com/jsref/
    
Javascript EcmaScript5 tutorials and more:

    https://developer.mozilla.org/en-US/docs/Web/JavaScript

## Setup

### To install dependencies

    npm install

### JShint

To run verify jshint:

    grunt jshint:default

### Run tests

To start developing unit tests

    grunt test:dev
 
To run tests and static analysis

    npm test

Good luck!
 
