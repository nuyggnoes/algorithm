function solution(record) {
    const answer = [];
    const user = [];
    record.forEach((element) => {
        const [status, id, name] = element.split(" ");
        if (status !== "Leave") user[id] = { name };
    });
    const msgFormat = (id, type) => {
        let msg = `${user[id].name}님이 `;
        let status = type === "Enter" ? "들어왔습니다." : "나갔습니다.";
        return msg + status;
    };
    for (let r of record) {
        const [status, id, name] = r.split(" ");
        if (status !== "Change") answer.push(msgFormat(id, status));
    }
    return answer;
}
