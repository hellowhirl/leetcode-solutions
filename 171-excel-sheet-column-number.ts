// 171. Excel Sheet Column Number

function titleToNumber(columnTitle: string): number {
    debugger
    let positionIndex = columnTitle.length - 1;
    let columnNumber = 0;
    for (var i = 0; i < columnTitle.length; i++) {
        columnNumber += ((columnTitle.charCodeAt(positionIndex) - 64) * Math.pow(26, i));
        positionIndex--;
    }
    return columnNumber;
};

// - 64
// The opposite of this is String.fromCharCode(10)

// Input: columnTitle = "ZY"
// Output: 701

const test = "FXSHRXW"
titleToNumber(test)