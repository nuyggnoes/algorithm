// 힌트를 참고한 문제
/*
    트리의 지름 구하기
    1. 아무 노드를 정해서 해당 노드에서 가장 먼 노드를 구한다.
    2. 1.에서 구한 노드를 기준으로 가장 먼 노드를 구한다.
    3. 2.에서 구한 가장 먼 노드가 트리의 지름이 된다.
*/
// 첫 풀이는 모든 노드를 다 탐색하며 최대거리를 구함.(시간초과)

function solution(n, nodeInfo) {
    const tree = Array.from({ length: n + 1 }, () => []);
    nodeInfo.forEach((element) => {
        const [n, ...info] = element;
        let i = 0;
        while (info[i] !== -1) {
            const [to, distance] = [info[i], info[i + 1]];
            tree[n].push([to, distance]);
            i += 2;
        }
    });

    const dfs = (start) => {
        const visited = Array(n + 1).fill(false);
        const stack = [[start, 0]];
        let max = 0;
        let maxNode = start;
        while (stack.length) {
            const [current, sum] = stack.pop();
            visited[current] = true;
            if (sum > max) {
                max = sum;
                maxNode = current;
            }
            for (const [next, distance] of tree[current]) {
                if (!visited[next]) {
                    stack.push([next, sum + distance]);
                }
            }
        }
        return [maxNode, max];
    };

    const [firstMaxNode] = dfs(1);
    const [_, maxDistance] = dfs(firstMaxNode);
    return maxDistance;
}

const input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const NODE_INFO = input.map((e) => e.split(" ").map(Number));
console.log(solution(N, NODE_INFO));
