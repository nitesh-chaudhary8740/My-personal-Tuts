function findGCD(a, b) {
  // Ensure inputs are positive integers for GCD
  if (a <= 0 || b <= 0) {
    throw new Error("GCD is defined for positive integers only.");
  }

  // Keep looping until one of the numbers becomes 0
  while (b !== 0) {
    let temp = b;
    b = a % b; // Remainder of a divided by b
    a = temp;  // Update a to be the old b
  }

  // When b becomes 0, a is the GCD
  return a;
}

console.log("GCD (Euclidean): ", findGCD(27, 36)); // Output: GCD (Euclidean): 9
console.log("GCD (Euclidean): ", findGCD(16, 40)); // Output: GCD (Euclidean): 8
console.log("GCD (Euclidean): ", findGCD(10, 5));  // Output: GCD (Euclidean): 5
console.log("GCD (Euclidean): ", findGCD(7, 3));   // Output: GCD (Euclidean): 1