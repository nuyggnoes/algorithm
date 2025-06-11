class TrieNode {
    constructor() {
        this.children = {};
        this.count = 0;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        node.count++;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
            node.count++;
        }
    }

    search(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) return 0;
            node = node.children[char];
        }
        return node.count;
    }
}

function solution(words, queries) {
    const trieByLength = {};
    const reversedTrieByLength = {};

    for (const word of words) {
        const len = word.length;
        if (!trieByLength[len]) trieByLength[len] = new Trie();
        if (!reversedTrieByLength[len]) reversedTrieByLength[len] = new Trie();

        trieByLength[len].insert(word);
        reversedTrieByLength[len].insert([...word].reverse().join(""));
    }

    const answer = [];

    for (const query of queries) {
        const len = query.length;

        if (!trieByLength[len]) {
            answer.push(0);
            continue;
        }

        if (query[0] !== "?") {
            const prefix = query.split("?")[0];
            answer.push(trieByLength[len].search(prefix));
        } else {
            const prefix = [...query].reverse().join("").split("?")[0];
            answer.push(reversedTrieByLength[len].search(prefix));
        }
    }
    return answer;
}
const words = ["frodo", "front", "frost", "frozen", "frame", "kakao"];
const queries = ["fro??", "????o", "fr???", "fro???", "pro?"];
console.log(solution(words, queries)); // [3,2,4,1,0]
