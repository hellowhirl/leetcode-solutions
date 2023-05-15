// 191. Number of 1 Bits

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let hWeight = 0

    for (let i = 0; i < 32; i++) {
        const result = n & 1 ? 1 : 0
        hWeight += result

        // unsigned right shift by 1 
        n = n >>> 1
    }

    return hWeight
};

const test1 = 00000000000000000000000000001011;
hammingWeight(test1)