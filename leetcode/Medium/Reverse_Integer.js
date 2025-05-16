/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const sign = x < 0 ? -1 : 1;
    const reversed =
        parseInt(Math.abs(x).toString().split("").reverse().join("")) * sign;

    if (reversed < -(2 ** 31) || reversed > 2 ** 31 - 1) {
        return 0;
    }
    return reversed;
};
