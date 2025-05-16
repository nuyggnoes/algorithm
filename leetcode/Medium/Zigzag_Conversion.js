/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    const rows = Array.from({ length: numRows }, () => "");

    let currentRow = 0;
    let moveRow = false;
    for (const char of s) {
        rows[currentRow] += char;
        if (currentRow === 0 || currentRow === numRows - 1) {
            moveRow = !moveRow;
        }
        currentRow += moveRow ? 1 : -1;
    }
    return rows.join("");
};
const s = "PAYPALISHIRING";
const numRows = 3;
console.log(convert(s, numRows));
