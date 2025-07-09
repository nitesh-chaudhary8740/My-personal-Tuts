/**
 * @fileoverview This file demonstrates the implementation of a custom API_Error
 * using the prototypal inheritance model (constructor function and prototype chain).
 */

/**
 * API_Error Constructor Function
 * Mimics the behavior of the class-based API_Error for custom API errors.
 *
 * @param {number} statusCode - The HTTP status code (e.g., 400, 404, 500).
 * @param {string} [message="something went wrong"] - The user-friendly error message.
 * @param {Array<string>} [errors=[]] - An array of specific validation errors or details.
 * @param {string} [stack=""] - Optional stack trace string.
 */
function API_Error(statusCode, message = "something went wrong", errors = [], stack = "") {
    // 1. Call the parent (Error) constructor
    // In prototypal inheritance, you call the parent constructor directly
    // and then manually set `this` context to the current instance.
    Error.call(this, message);

    // 2. Set custom properties on the instance
    this.statusCode = statusCode;
    this.data = null; // As in your class-based example
    this.message = message; // Redundant but harmless, set by Error.call
    this.success = false;
    this.errors = errors;

    // 3. Ensure proper stack trace
    // This part is identical to the class-based approach because it's a static method of Error.
    if (stack) {
        this.stack = stack;
    } else {
        Error.captureStackTrace(this, this.constructor);
    }
}

// 4. Establish the prototype chain
// This is the crucial step for prototypal inheritance.
// It makes API_Error's prototype inherit from Error's prototype.
// This is equivalent to `extends Error` in class syntax.
Object.setPrototypeOf(API_Error.prototype, Error.prototype);

// 5. Ensure `instanceof` works correctly (optional but good practice)
// This ensures that `instanceof API_Error` returns true,
// and `instanceof Error` also returns true, as expected.
API_Error.prototype.constructor = API_Error;


// --- DEMONSTRATION OF USAGE ---

// Example 1: Basic usage
try {
    throw new API_Error(400, "Invalid input received");
} catch (error) {
    if (error instanceof API_Error) {
        console.log("--- Caught API_Error (Prototypal) ---");
        console.log("Status Code:", error.statusCode); // 400
        console.log("Message:", error.message);       // Invalid input received
        console.log("Success:", error.success);       // false
        console.log("Is instance of API_Error?", error instanceof API_Error); // true
        console.log("Is instance of Error?", error instanceof Error);       // true
        console.log("Stack:", error.stack.split('\n')[0], "..."); // Stack trace will be generated
    } else {
        console.log("Caught a non-API_Error:", error);
    }
}

console.log("\n--- Another Example ---");
// Example 2: With custom errors array
try {
    const username = null;
    const email = "invalid-email";
    if (!username || !email.includes('@')) {
        throw new API_Error(
            400,
            "Validation failed",
            [!username && "Username is required", !email.includes('@') && "Email is invalid"].filter(Boolean)
        );
    }
} catch (error) {
    if (error instanceof API_Error) {
        console.log("--- Caught API_Error (Prototypal) with details ---");
        console.log("Status Code:", error.statusCode); // 400
        console.log("Message:", error.message);       // Validation failed
        console.log("Errors:", error.errors);         // [ 'Username is required', 'Email is invalid' ]
    }
}