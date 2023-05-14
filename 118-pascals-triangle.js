// // 118. Pascal's Triangle
// function generate(numRows) {
//     if (numRows === 1) {
//         return [[1]];
//     }
//     var triangle = [[1]];
//     var prevRowIndex = 0;
//     while (numRows > 1) {
//         var rowArr = [1];
//         var pointer1 = 0;
//         var pointer2 = 1;
//         while (pointer2 < triangle[prevRowIndex].length) {
//             rowArr.push(triangle[prevRowIndex][pointer1] + triangle[prevRowIndex][pointer2]);
//             pointer1++;
//             pointer2++;
//         }
//         rowArr.push(1);
//         numRows--;
//         prevRowIndex++;
//         triangle.push(rowArr);
//     }
//     return triangle;
// }
// ;
