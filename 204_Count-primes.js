// 204. Count Primes

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
// 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20
// divisers: 2, 3, 5

var countPrimes = function (n) {
  let count = 0;
  if (n < 3) return 0;
  if (n === 3) return 1;

  for (let i = 2; i <= n - 1; i++) {
    if (i === 2 || i === 3) {
      count++;
      continue;
    }
    if (i % 2 !== 0 && i % 3 === 0) count++;
  }
  return count;
};

countPrimes(5);
