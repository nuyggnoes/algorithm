function solution(n, m, dict, target) {
    class TrieNode {
        constructor() {
            this.children = new Map();
        }
    }

    const root = new TrieNode();

    function insert(word) {
        let node = root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
    }

    function find(prefix) {
        let node = root;
        for (const char of prefix) {
            if (!node.children.has(char)) return false;
            node = node.children.get(char);
        }
        return true;
    }

    dict.forEach(insert);
    let count = 0;
    for (const word of target) {
        if (find(word)) count++;
    }
    return count;
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const DICT = input.slice(1, 1 + N);
const TARGET = input.slice(1 + N);
console.log(solution(N, M, DICT, TARGET));
