// 118. Pascal's Triangle

function generate(numRows: number): number[][] {
    if(numRows === 1) {
        return [[1]];
    }
    
    const triangle = [[1]];
    let prevRowIndex = 0;
    
    while(numRows > 1) {
        const rowArr = [1];
        let pointer1 = 0;
        let pointer2 = 1;
        while(pointer2 < triangle[prevRowIndex].length) {
            rowArr.push(triangle[prevRowIndex][pointer1] + triangle[prevRowIndex][pointer2]);
            pointer1++;
            pointer2++;
        }
        rowArr.push(1);
        numRows--;
        prevRowIndex++;
        triangle.push(rowArr);
    }
    return triangle;
};