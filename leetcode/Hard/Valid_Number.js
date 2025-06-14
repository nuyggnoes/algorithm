/**
 * @param {string} s
 * @return {boolean}
 */
function isNumber(s) {
    s = s.trim();
    let seenDigit = false;
    let seenDot = false;
    let seenE = false;

    for (let i = 0; i < s.length; i++) {
        const c = s[i];

        if (isDigit(c)) {
            seenDigit = true;
        } else if (c === "+" || c === "-") {
            if (i !== 0 && s[i - 1].toLowerCase() !== "e") return false;
        } else if (c === ".") {
            if (seenDot || seenE) return false;
            seenDot = true;
        } else if (c.toLowerCase() === "e") {
            if (seenE || !seenDigit) return false;
            seenE = true;
            seenDigit = false;
        } else {
            return false;
        }
    }

    return seenDigit;
}

function isDigit(c) {
    return c >= "0" && c <= "9";
}
const s = "0e";
console.log(isNumber(s));
