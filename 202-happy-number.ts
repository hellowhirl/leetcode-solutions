// 202. Happy Number

function isHappy(n: number): boolean {
    const seen = new Set()

    while (n !== 1) {
        let sum = 0
        // loop until we get to final digit in this set of digits that are squared
        while (n > 0) {
            sum += (n % 10) * (n % 10) // get the last digit in the number and swuare it
            n = Math.floor(n / 10) // replace n with remaining digit(s) after last digit was squared 
        }
        if(seen.has(sum)) {
            return false // if we see the same set again, it means we are looping and will never reach 1
        } else {
            seen.add(sum)
            n = sum // resets n as the new digits that were squared
        }
    }

    return true
}

// n = 19