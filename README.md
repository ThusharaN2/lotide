# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ThusharaN2/lotide`

**Require it:**

`const _ = require('@ThusharaN2/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(Array1, Array2)`: function that evaluates if two arrays are equal.
* `assertEqual(actual, expected)`: function that checks if two values are equal.
* `assertObjectsEqual(actual, expected)`: function that checks if two objects are equal. 
* `countLetters(string)`: function that returns counts of each letter of a string.
* `countOnly(allItems,itemsToCount)`: ffunction that returns count of a specific subset of those items.
* `eqArrays(array1, array2)`: function that compares two arrays.
* `eqObjects(object1, object2)`: function that compares two objects.
* `findKey(object, callback)`: function that scans the object and returns the first key where the callback returns a truthy.
* `findKeyByValue(object, value)`: function that searches for a key on an object where it matches given object key.
* `head(array)`: function that returns first element of an array.
* `index(...)`: list of all the functions in an object.
* `letterPositions(sentence)`: fucntion that returns all characters of a string where every characted is found.
* `map(array, callback)`:  function that makes a new array with the results of the callback function.
* `middle(array)`: function that returns the middle element of the array.
* `tail(array)`: function that returns every element, except for the head.
* `takeUntil(array, callback)`: function that returns a slice of an array with elements taken from the beginning.
* `without(array1, array2)`: function that rids elements from an array.
