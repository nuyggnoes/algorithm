function solution({ user_id, banned_id }) {
    let answer = 0;
    let visited = Array(user_id.length).fill(false);
    const regArr = banned_id.map((e) => new RegExp(`^${e.replaceAll("*", ".")}$`));
    const set = new Set();
    console.log(regArr);
    const dfs = (index = 0, arr = []) => {
        if (index === banned_id.length) {
            set.add(arr.sort().join(","));
        } else {
            for (let i = 0; i < user_id.length; i++) {
                if (visited[i]) {
                    continue;
                }
                if (user_id[i].match(regArr[index])) {
                    visited[i] = true;
                    dfs(index + 1, [...arr, user_id[i]]);
                    visited[i] = false;
                }
            }
        }
    };
    dfs();
    return answer;
}
const testcase1 = {
    user_id: ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    banned_id: ["fr*d*", "abc1**"],
};
const testcase2 = {
    user_id: ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    banned_id: ["*rodo", "*rodo", "******"],
};
const testcase3 = {
    user_id: ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    banned_id: ["fr*d*", "*rodo", "******", "******"],
};
console.log(solution(testcase1));
