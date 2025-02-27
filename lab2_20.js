const matrix = [
    [3, -2, 8, 1, -6],
    [0, 5, -3, 7, 10],
    [-4, 2, 6, -1, 9],
    [12, -5, 4, 3, -7],
    [1, 2, 3, 4, 5]
];


function printElementsInRange(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] >= -5 && matrix[i][j] <= 7) {
                document.write(matrix[i][j], ' ');
            }
        }
    }
}


printElementsInRange(matrix);