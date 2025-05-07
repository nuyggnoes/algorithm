function solution(w, h) {
    function gcd(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    const g = gcd(w, h);
    return w * h - (w + h - g);
}
const w = 8;
const h = 12;
console.log(solution(w, h));
