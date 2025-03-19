function solution({ n, computers }) {
    let answer = 0;
    let visited = Array(n).fill(false);
    const dfs = (current) => {
        for (let i = 0; i < n; i++) {
            if (i === current) continue;
            if (!visited[i] && computers[current][i] === 1) {
                visited[i] = true;
                dfs(i);
            }
        }
    };
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            answer++;
        }
    }
    return answer;
}

const testcase1 = {
    n: 3,
    computers: [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
    ],
};

const testcase2 = {
    n: 3,
    computers: [
        [1, 1, 0],
        [1, 1, 1],
        [0, 1, 1],
    ],
};

console.log(solution(testcase1));
