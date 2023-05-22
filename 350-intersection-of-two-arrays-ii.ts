// 350. Intersection of Two Arrays II

function intersect(nums1: number[], nums2: number[]): number[] {
    let map = {}
    const result: number[] = []

    // itterating through arrays: for of
    // create object where we keep track of quantity of each number
    for (let i of nums1) {
        if (!map[i]) {
            map[i] = 1
        }
        else map[i]++
    }

    // loop through second array set and add numbers follwed by popping off map from first loop
    for (let i of nums2) {
        if (map[i] > 0) {
            result.push(i)
            map[i]--
        }
    }

    return result
};

const nums1 = [1, 2, 2, 1]
const nums2 = [2, 2]

intersect(nums1, nums2)