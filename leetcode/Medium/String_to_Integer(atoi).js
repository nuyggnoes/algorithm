/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    s = s.trim();

    if (s.length === 0) return 0;

    let sign = 1;
    let i = 0;
    if (s[i] === "+" || s[i] === "-") {
        sign = s[i] === "-" ? -1 : 1;
        i++;
    }

    let result = 0;
    while (i < s.length && s[i] >= "0" && s[i] <= "9") {
        result = result * 10 + (s[i].charCodeAt(0) - "0".charCodeAt(0));
        i++;
    }

    result *= sign;

    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    if (result < INT_MIN) return INT_MIN;
    if (result > INT_MAX) return INT_MAX;

    return result;
};
const s = "+1";

console.log(myAtoi(s));
