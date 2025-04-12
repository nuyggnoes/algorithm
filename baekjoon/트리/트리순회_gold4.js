function solution(n, nodes) {
    let movementPath = [];
    const inOrderResult = [];
    let lastNode = 0;
    const leftChild = Array(n + 1).fill(-1);
    const rightChild = Array(n + 1).fill(-1);
    for (const [current, left, right] of nodes) {
        if (left !== -1) leftChild[current] = left;
        if (right !== -1) rightChild[current] = right;
    }
    const inOrder = (current) => {
        if (leftChild[current] !== -1) inOrder(leftChild[current]);
        inOrderResult.push(current);
        if (rightChild[current] !== -1) inOrder(rightChild[current]);
    };
    inOrder(1);

    lastNode = inOrderResult[n - 1];

    const likeInOrder = (current) => {
        movementPath.push(current);

        if (leftChild[current] !== -1) {
            likeInOrder(leftChild[current]);
            movementPath.push(current);
        }

        if (rightChild[current] !== -1) {
            likeInOrder(rightChild[current]);
            movementPath.push(current);
        }
    };
    likeInOrder(1);
    for (let i = movementPath.length - 1; i >= 0; i--) {
        if (movementPath[i] === lastNode) {
            movementPath = movementPath.slice(0, i + 1);
            break;
        }
    }
    return movementPath.length - 1;
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const NODES = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, NODES));
