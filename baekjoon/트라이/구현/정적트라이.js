// JS에서는 아주 비효율적인 트라이 구현
// JS에서는 동적 객체 기반 트라이로 바꾸는 게 훨씬 효율적
const ROOT = 1;
let unused = 2;
const MX = 20; //
const chk = Array(MX).fill(false);
const nxt = Array.from({ length: MX }, () => Array(26).fill(-1));

const c2i = (c) => c.charCodeAt() - 65;

function insert(s) {
    let cur = ROOT;
    for (const c of s) {
        if (nxt[cur][c2i(c)] === -1) {
            nxt[cur][c2i(c)] = unused++;
        }
        cur = nxt[cur][c2i(c)];
    }
    chk[cur] = true;
}
function find(s) {
    let cur = ROOT;
    for (const c of s) {
        if (nxt[cur][c2i(c)] === -1) return false;
        cur = nxt[cur][c2i(c)];
    }
    return chk[cur];
}
function erase(s) {
    let cur = ROOT;
    for (const c of s) {
        if (nxt[cur][c2i(c)] === -1) return;
        cur = nxt[cur][c2i(c)];
    }
    chk[cur] = false;
}
insert("APPLE");
insert("APPLY");
insert("BANANA");
insert("ZOO");
console.log(chk);
console.log(nxt);
