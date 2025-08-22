/**
 * @param {character[][]} grid
 * @return {number}
 */

const numIslands = function (grid) {
    const row = grid.length;
    const col = grid[0].length;
    let count = 0;
    const visited = Array.from({ length: row }, () => Array(col).fill(false));

    function findIsland(i, j) {
        if (
            i < 0 ||
            i >= row ||
            j < 0 ||
            j >= col ||
            grid[i][j] === '0' ||
            visited[i][j]
        ) {
            return;
        }

        visited[i][j] = true;

        findIsland(i + 1, j);
        findIsland(i - 1, j);
        findIsland(i, j + 1);
        findIsland(i, j - 1);
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === '1' && !visited[i][j]) {
                findIsland(i, j);
                count++;
            }
        }
    }
    return count;
};

const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
];

console.log(numIslands(grid));
