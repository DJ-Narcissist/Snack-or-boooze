function unroll(squareArray) {
    const result = [];
    let top = 0;
    let left = 0;
    let buttom = squareArray.length -1; //last index in row 2
    let right = squareArray[0].length - 1; // last index in row 2

    while (top <= bottom && left <= right) {
        // Traverse from left to right
        for (let i = left; i <= right; i++) {
            result.push(squareArray[top][i]);
        }
        top++;

        // Traverse from bottom to top
        for (let i = top; i <= bottom; i++) {
            result.push(squareArray[i][right]);
        }
        right--;

        // Traverse form right to left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(squareArray[bottom][i]);
            }
            bottom--;
        }

        // Traverse from bottom to top
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(squareArray[left][i]);
            }
            left++;
        }
    }
    return result;
}

const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

module.exports = unroll;
