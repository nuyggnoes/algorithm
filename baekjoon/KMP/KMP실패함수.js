const str = "ABABACABA";

function failure(s) {
    const f = Array(s.length).fill(0);
    let j = 0;
    for (let i = 1; i < s.length; i++) {
        while (j > 0 && s[i] !== s[j]) j = f[j - 1];
        if (s[i] === s[j]) f[i] = ++j;
    }
    return f;
}
const ff = failure(str);
console.log(ff);
