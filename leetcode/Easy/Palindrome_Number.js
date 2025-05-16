/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    const strX = x.toString();
    for (let i = 0; Math.floor(i < strX.length / 2); i++) {
        const front = strX[i];
        const end = strX[strX.length - i - 1];
        if (front !== end) return false;
    }
    return true;
};

console.log(isPalindrome(121));
