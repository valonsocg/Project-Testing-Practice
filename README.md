# JavaScript Functions and Testing

This project involves implementing several JavaScript functions and writing tests to ensure they work correctly. The main objective is to validate the functionality of each function with various test cases. Below is a description of the required functions and their expected behavior.

## Functions

### 1. **capitalize**

A function that takes a string and returns the string with the first character capitalized.

### 2. **reverseString**

A function that takes a string and returns it reversed.

### 3. **calculator**

An object that contains basic arithmetic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct result.

### 4. **caesarCipher**

A function that takes a string and a shift factor and returns the string with each character "shifted" by the shift factor. It should handle:

- Wrapping of letters from 'z' to 'a' and from 'Z' to 'A'.
- Preservation of letter case (uppercase remains uppercase, and lowercase remains lowercase).
- Ensuring that punctuation, spaces, and other non-alphabetical characters remain unchanged.

### 5. **analyzeArray**

A function that takes an array of numbers and returns an object with the following properties:

- `average`: The average value of the numbers in the array.
- `min`: The smallest number in the array.
- `max`: The largest number in the array.
- `length`: The total number of elements in the array.

The function should also validate that the input is an array and handle edge cases such as empty arrays.

## Tests

Tests need to be written for each of the functions to verify their correctness. These tests should cover various use cases, including normal inputs and edge cases.

## Conclusion

This project aims to demonstrate the implementation of several key JavaScript functions and the importance of writing tests to ensure the correctness of these functions. The tests should cover a variety of edge cases to verify that the functions work under different scenarios.
