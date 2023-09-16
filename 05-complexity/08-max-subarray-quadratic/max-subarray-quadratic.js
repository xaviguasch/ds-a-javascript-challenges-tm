function maxSubarraySum(arr, k) {
  // Initialize maxSum to the smallest possible number
  let maxSum = Number.NEGATIVE_INFINITY

  // Iterate through the array
  for (let i = 0; i <= arr.length - k; i++) {
    let currentSum = 0

    // Calculate the sum of the subarray of length k starting at index i
    for (let j = i; j < i + k; j++) {
      currentSum += arr[j]
    }

    // Update maxSum to the maximum value
    maxSum = Math.max(maxSum, currentSum)
  }

  return maxSum
}

module.exports = maxSubarraySum
