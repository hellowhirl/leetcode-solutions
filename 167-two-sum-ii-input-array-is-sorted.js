// 167. Two Sum II - Input Array Is Sorted

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let pointer1 = 0;
  let pointer2 = numbers.length - 1;

  while (pointer1 < numbers.length && pointer2 > 0) {
    let leftNumber = numbers[pointer1];
    let rightNumber = numbers[pointer2];

    if (leftNumber + rightNumber === target) {
      break;
    } else if (leftNumber + rightNumber < target) {
      pointer1++;
    } else {
      pointer2--;
    }
  }

  return [pointer1 + 1, pointer2 + 1];
};

const numbers = [2, 7, 11, 15];
const target = 9;

twoSum(numbers, target);
