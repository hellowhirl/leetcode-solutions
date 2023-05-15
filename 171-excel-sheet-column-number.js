// // 171. Excel Sheet Column Number
// function titleToNumber(columnTitle) {
//     debugger;
//     var positionIndex = columnTitle.length - 1;
//     var columnNumber = 0;
//     for (var i = 0; i < columnTitle.length; i++) {
//         columnNumber += ((columnTitle.charCodeAt(positionIndex) - 64) * Math.pow(26, i));
//         positionIndex--;
//     }
//     return columnNumber;
// }
// ;
// // - 64
// // The opposite of this is String.fromCharCode(10)
// // Input: columnTitle = "ZY"
// // Output: 701
// var test = "FXSHRXW";
// titleToNumber(test);
