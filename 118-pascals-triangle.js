function generate(numRows) {
    if (numRows === 1) {
        return [[1]];
    }
    if (numRows === 2) {
        return [[1], [1, 1]];
    }
    var result = [[1], [1, 1]];
    numRows = numRows - 2;
    var currentRow = 2;
    while (numRows > 0) {
        var rowArr = [1];
        var pointer1 = 0;
        var pointer2 = 1;
        while (pointer2 <= result[currentRow - 1].length) {
            rowArr.push(result[currentRow - 1][pointer1] + result[currentRow - 1][pointer2]);
            pointer1++;
            pointer2++;
        }
        rowArr.push(1);
        numRows--;
        currentRow++;
        result.push(rowArr);
    }
    return result;
}
;
