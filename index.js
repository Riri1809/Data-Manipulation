// The initial numbers that must be verified.
const n1 = 15;
const n2 = 10;
const n3 = 15;
const n4 = 10;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50= (n1 + n2 + n3 + n4) == 50;
console.log(isSum50)



// Check two: Subtract the first number from the second number.
const allDivisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) ==0;
console.log(allDivisibleBy5)


// Multiply the result by the third number.
const constFirstLargerThanLast = n1 > n4;
console.log(constFirstLargerThanLast)



// Check four: Find the remainder of dividing the result by the fourth number.
const soustractMultiplyRemainder = ((n1-n2)*n3)%n4;
console.log(soustractMultiplyRemainder)



// Here, Change the way that isOver25 calculates so that 
//we do not need to use the NOT operator (!) in other 
//logic comparisons. Rename the variable as appropriate.
const isOver25 = soustractMultiplyRemainder<25;
console.log(isOver25)


// Finally, log the results.
console.log(isOver25);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const TheFourNumbersAreValidAccordingtoTheProvidedCriteria = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) ==0) && 
  (n1 > n4) && 
  (((n1-n2)*3)%n4) && !((((n1-n2)*3)%n4)>25);
  console.log(TheFourNumbersAreValidAccordingtoTheProvidedCriteria)

  console.log(1+2===3)
  