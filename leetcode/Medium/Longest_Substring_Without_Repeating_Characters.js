/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    let left = 0;
    let maxLen = 0;
    const map = new Map();

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        if (map.has(char) && map.get(char) >= left) {
            left = map.get(char) + 1;
        }
        map.set(char, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
