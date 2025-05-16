/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) return "";

    strs.sort();
    const first = strs[0];
    const last = strs[strs.length - 1];
    let i = 0;
    while (i < first.length && first[i] === last[i]) {
        i++;
    }
    return first.slice(0, i);
};
const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
