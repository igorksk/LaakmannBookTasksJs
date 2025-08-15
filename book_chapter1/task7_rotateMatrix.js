function rotateMatrix(matrix) {
    const n = matrix.length;
    for (let layer = 0; layer < n / 2; layer++) {
        const first = layer;
        const last = n - 1 - layer;
        for (let i = first; i < last; i++) {
            const offset = i - first;
            // Save top
            const top = matrix[first][i];
            // Left to top
            matrix[first][i] = matrix[last - offset][first];
            // Bottom to left
            matrix[last - offset][first] = matrix[last][last - offset];
            // Right to bottom
            matrix[last][last - offset] = matrix[i][last];
            // Top to right
            matrix[i][last] = top;
        }
    }
}

function task7() {
    const input = document.getElementById("inputMatrix").value;
    const matrix = input.split('\n').map(row => row.split(' ').map(Number));
    rotateMatrix(matrix);
    const result = matrix.map(row => row.join(' ')).join('\n');
    document.getElementById("matrixOutput").textContent = result;
}