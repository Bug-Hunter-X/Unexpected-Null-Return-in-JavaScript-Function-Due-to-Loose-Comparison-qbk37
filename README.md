# Unexpected Null Return in JavaScript Function

This repository demonstrates a subtle bug in a JavaScript function that involves type coercion and unexpected null returns. The function `foo` is intended to add two numbers.  However, due to the use of loose comparison (`===`), it returns null even if one of the inputs is zero.

## Bug Description

The function `foo` uses strict equality (`===`) to check for null values. This is a common practice; however, it causes unexpected behavior when the input is 0, which is loosely equal to false and not strictly equal to null.

## Solution

The solution involves using explicit checks for null and undefined to handle these cases separately from zero values.
