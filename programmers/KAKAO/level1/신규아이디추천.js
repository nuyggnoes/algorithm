function solution(new_id) {
    new_id = new_id
        .toLowerCase() // 1단계
        .replace(/[^a-z0-9-_.]/g, "") // 2단계
        .replace(/\.{2,}/g, ".") // 3단계
        .replace(/^\.|\.$/g, ""); // 4단계

    if (new_id === "") new_id = "a"; // 5단계
    new_id = new_id.slice(0, 15).replace(/\.$/, ""); // 6단계
    while (new_id.length < 3) new_id += new_id[new_id.length - 1]; // 7단계

    return new_id;
}

const new_id = "abcdefghijklmn.p";
new_id.toLowerCase();
console.log(solution(new_id));
