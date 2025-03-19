function solution({ begin, target, words }) {
    const visited = Array(words.length).fill(false);

    const compareWords = (word1, word2) => {
        let count = 0;
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]) count++;
        }
        return count === 1 ? true : false;
    };

    const bfs = (word, depth) => {
        let queue = [[word, depth]];
        while (queue.length) {
            let [currentWord, currentDepth] = queue.shift();
            if (currentWord === target) return currentDepth;
            for (let i = 0; i < words.length; i++) {
                if (compareWords(words[i], currentWord) && !visited[i]) {
                    visited[i] = true;
                    queue.push([words[i], currentDepth + 1]);
                }
            }
        }
        return 0;
    };
    return bfs(begin, 0);
}

const testcase1 = {
    begin: "hit",
    target: "cog",
    words: ["hot", "dot", "dog", "lot", "log", "cog"],
};
const testcase2 = {
    begin: "hit",
    target: "cog",
    words: ["hot", "dot", "dog", "lot", "log"],
};

console.log(solution(testcase1));
