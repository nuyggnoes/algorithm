function solution({ k, dungeons }) {
    let answer = 0;
    let visited = Array(dungeons.length).fill(false);
    const dfs = (depth, remain) => {
        for (let i = 0; i < dungeons.length; i++) {
            const [need, consume] = dungeons[i];
            if (!visited[i] && need <= remain) {
                visited[i] = true;
                dfs(depth + 1, remain - consume);
                visited[i] = false;
            }
        }
        answer = Math.max(depth, answer);
    };
    dfs(0, k);
    return answer;
}
const testcase = {
    k: 80,
    dungeons: [
        [80, 20],
        [50, 40],
        [30, 10],
    ],
}; // 3

console.log(solution(testcase));
