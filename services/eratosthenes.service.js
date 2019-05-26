/**
 * @param {Number} [n]
 * @return {Array} - median of prime numbers less than given n
 */
exports.getMedianPrimes = (n) => {
  const numbers = [];
  const upperLimit = Math.sqrt(n);
  const primes = [];

  // Make an array from 2 to (n - 1)
  for (let i = 0; i < n; i++) {
    numbers.push(true);
  }

  // Remove multiples of primes
  for (let i = 2; i <= upperLimit; i++) {
    if (numbers[i]) {
      for (let j = i * i; j < n; j += i) {
        numbers[j] = false;
      }
    }
  }

  // Add all indexes with true value from numbers to primes
  for (let i = 2; i < n; i++) {
    if (numbers[i]) {
      primes.push(i);
    }
  }

  // Dividing length of found prime numbers in half
  const mid = Math.floor(primes.length / 2);

  return primes.length % 2 !== 0 ? [primes[mid]] : [primes[mid - 1], primes[mid]];
};
