function solution(n, command) {
    const stack = [];
    const output = [];

    command.forEach((c) => {
        switch (c[0]) {
            case 1:
                stack.push(c[1]);
                break;
            case 2:
                output.push(stack.length > 0 ? stack.pop() : -1);
                break;
            case 3:
                output.push(stack.length);
                break;
            case 4:
                output.push(stack.length === 0 ? 1 : 0);
                break;
            case 5:
                output.push(stack.length > 0 ? stack.at(-1) : -1);
                break;
        }
    });

    console.log(output.join("\n"));
}

let input = require("fs").readFileSync("example.txt").toString().trim().split("\n");
const N = Number(input.shift());
const COMMAND = input.map((e) => e.split(" ").map(Number));
solution(N, COMMAND);
