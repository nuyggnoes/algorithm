function solution(s) {
    return s.map((str) => {
        const stack = [];
        let count110 = 0;

        for (let i = 0; i < str.length; i++) {
            stack.push(str[i]);

            if (stack.length >= 3) {
                const last = stack.slice(-3).join("");
                if (last === "110") {
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    count110++;
                }
            }
        }

        const remaining = stack.join("");
        const insert = "110".repeat(count110);

        const lastZeroIdx = remaining.lastIndexOf("0");
        if (lastZeroIdx === -1) {
            return insert + remaining;
        } else {
            return (
                remaining.slice(0, lastZeroIdx + 1) +
                insert +
                remaining.slice(lastZeroIdx + 1)
            );
        }
    });
}
const s = ["1110", "100111100", "0111111010"];
console.log(solution(s)); // ["1101","100110110","0110110111"]
