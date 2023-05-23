// 387. First Unique Character in a String

function firstUniqChar(s: string): number {
    const map = {}
    const set = new Set()
    let index = 0

    for (let letter of s) {
        if (!set.has(letter)) {
            set.add(letter)
            map[letter] = index
        }
        else {
            delete map[letter]
        }
        index++
    }

    if (Object.keys(map).length === 0) {
        return -1
    }

    let lowest = Infinity

    for (let i in map) {
        if (map[i] < lowest) {
            lowest = map[i]
        }
    }
    return lowest
};

const test1 = "leetcode"
const test2 = "leetcode"
firstUniqChar(test1)