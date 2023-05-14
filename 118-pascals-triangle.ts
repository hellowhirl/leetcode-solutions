// 118. Pascal's Triangle

function generate(numRows: number): number[][] {
    if(numRows === 1) {
        return [[1]];
    }
    if(numRows === 2) {
        return [[1], [1, 1]];
    }
    
    const result = [[1], [1, 1]];
    numRows = numRows - 2;
    let currentRow = 2;
    
    while(numRows > 0) {
        const rowArr = [1];
        let pointer1 = 0;
        let pointer2 = 1;
        while(pointer2 < result[currentRow - 1].length) {
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
};