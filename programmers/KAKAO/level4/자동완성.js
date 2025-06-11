// Trie
class TrieNode {
    constructor() {
        this.children = {};
        this.count = 0;
        // this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
            node.count++;
        }
    }
    getMinInputCount(word) {
        let node = this.root;
        let inputLength = 0;
        for (let char of word) {
            node = node.children[char];
            inputLength++;
            if (node.count === 1) break;
        }
        return inputLength;
    }
}

function solution(words) {
    const trie = new Trie();
    for (const word of words) {
        trie.insert(word);
    }

    let total = 0;
    for (const word of words) {
        total += trie.getMinInputCount(word);
    }
    return total;
}
const words = ["go", "gone", "guild"];
console.log(solution(words));
