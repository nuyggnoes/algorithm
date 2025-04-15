// 접두사 찾기
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
