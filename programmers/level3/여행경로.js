function solution(tickets) {
    let answer = ["ICN"];
    let n = tickets.length;
    const visited = Array(n).fill(false);
    tickets.sort();
    const dfs = (str, depth) => {
        if (depth === n) return true;
        for (let i = 0; i < n; i++) {
            if (!visited[i] && tickets[i][0] === str) {
                visited[i] = true;
                answer.push(tickets[i][1]);
                if (dfs(tickets[i][1], depth + 1)) return true;
                visited[i] = false;
            }
        }
    };
    dfs("ICN", 0);
    return answer;
}
const testcase1 = [
    ["ICN", "JFK"],
    ["HND", "IAD"],
    ["JFK", "HND"],
];
const testcase2 = [
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
];

console.log(solution(testcase1));
