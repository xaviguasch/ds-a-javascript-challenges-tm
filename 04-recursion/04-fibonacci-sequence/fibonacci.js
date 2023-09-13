function fibonacci(idx) {
  if (idx < 2) {
    return idx
  }

  return fibonacci(idx - 1) + fibonacci(idx - 2)
}

// Check  "Recursion for Beginners - Fibonacci Numbers" in Youtube, by NeetCode.
// Explanation with graphics

module.exports = fibonacci
