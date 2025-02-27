function sumRows(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        const maxInRow = Math.max(...matrix[i]);
        sum += maxInRow;
    }
    return sum;
}

function minColumns(matrix) {
    let product = 1;
    for (let j = 0; j < matrix[0].length; j++) {
        let minInCol = matrix[0][j]; 
        for (let i = 1; i < matrix.length; i++) {
            if (matrix[i][j] < minInCol) {
                minInCol = matrix[i][j]; 
            }
        }
        product *= minInCol;
    }
    return product;
}

const matrix = [
    [3, 5, 2],
    [1, 8, 4],
    [7, 6, 9]
];

matrix.forEach(row => document.write(row, '<br>'));

const sumMax = sumRows(matrix);
document.write(sumMax, '<br>');

const minCol = minColumns(matrix);
document.write(minCol);