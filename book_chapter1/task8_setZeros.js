/*
Task 8: If an element in an MxN matrix is zero, set its entire row and column to zero.
Finds zero rows/columns first, then zeros them out in a second pass.
*/

function setZeros(matrix) {
    if (!matrix || matrix.length === 0) return matrix;

    const rows = matrix.length;
    const cols = matrix[0].length;
    const zeroRows = new Set();
    const zeroCols = new Set();

    // First pass: find all zeros
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                zeroRows.add(i);
                zeroCols.add(j);
            }
        }
    }

    // Second pass: set rows and columns to zero
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (zeroRows.has(i) || zeroCols.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

window.setZeros = setZeros;

function task8() {
    const input = document.getElementById("inputMatrix").value;
    const matrix = input.split('\n').map(row => row.split(' ').map(Number));
    setZeros(matrix);
    const result = matrix.map(row => row.join(' ')).join('\n');
    document.getElementById("matrixOutput").textContent = result;
}