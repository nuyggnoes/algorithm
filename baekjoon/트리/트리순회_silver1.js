function solution(n, nodes) {
    const leftChild = Array(30).fill(null);
    const rightChild = Array(30).fill(null);
    const preAnswer = [];
    const inAnswer = [];
    const postAnswer = [];
    for (const [current, left, right] of nodes) {
        if (left !== ".") leftChild[current.charCodeAt() - 65] = left.charCodeAt() - 65;
        if (right !== ".") rightChild[current.charCodeAt() - 65] = right.charCodeAt() - 65;
    }
    const preOrder = (current) => {
        preAnswer.push(String.fromCharCode(current + 65));
        if (leftChild[current]) preOrder(leftChild[current]);
        if (rightChild[current]) preOrder(rightChild[current]);
    };
    const inOrder = (current) => {
        if (leftChild[current]) inOrder(leftChild[current]);
        inAnswer.push(String.fromCharCode(current + 65));
        if (rightChild[current]) inOrder(rightChild[current]);
    };
    const postOrder = (current) => {
        if (leftChild[current]) postOrder(leftChild[current]);
        if (rightChild[current]) postOrder(rightChild[current]);
        postAnswer.push(String.fromCharCode(current + 65));
    };
    preOrder(0);
    inOrder(0);
    postOrder(0);
    return [preAnswer, inAnswer, postAnswer].map((e) => e.join("")).join("\n");
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const NODES = input.map((e) => e.split(" "));
console.log(solution(N, NODES));
