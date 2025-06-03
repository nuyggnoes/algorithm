/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    const stack = [];
    const pair = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    for (let char of s) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else {
            if (stack.pop() !== pair[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

const s = "()";
console.log(isValid(s));
