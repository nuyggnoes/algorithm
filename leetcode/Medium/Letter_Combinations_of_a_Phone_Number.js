/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits.length) return [];

    const map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    };
    const result = [];
    const dfs = (index, path) => {
        if (index === digits.length) {
            result.push(path);
            return;
        }
        for (const char of map[digits[index]]) {
            dfs(index + 1, path + char);
        }
    };
    dfs(0, "");

    return result;
};

const digits = "23";

console.log(letterCombinations(digits));
