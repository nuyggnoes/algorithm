function solution(id_list, report, k) {
    const reportBoard = new Map();
    const count = new Map();
    const uniqueReports = new Set(report);
    for (const id of id_list) {
        reportBoard.set(id, new Set());
        count.set(id, 0);
    }
    for (const line of uniqueReports) {
        const [from, to] = line.split(" ");
        reportBoard.get(from).add(to);
        count.set(to, count.get(to) + 1);
    }
    const suspended = new Set();
    for (const [id, cnt] of count.entries()) {
        if (cnt >= k) suspended.add(id);
    }
    let answer = Array(id_list.length).fill(0);
    for (let i = 0; i < id_list.length; i++) {
        const reporter = id_list[i];
        const reportedSet = reportBoard.get(reporter);

        for (const user of reportedSet) {
            if (suspended.has(user)) {
                answer[i]++;
            }
        }
    }
    return answer;
}
const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
    "muzi frodo",
    "apeach frodo",
    "frodo neo",
    "muzi neo",
    "apeach muzi",
];
const k = 2;
console.log(solution(id_list, report, k)); // [2,1,1,0]
