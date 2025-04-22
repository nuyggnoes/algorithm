function solution(n, k) {
    let answer = 0;
    const isPrime = (n) => {
        if (n < 2) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i === 0) return false;
        }
        return true;
    };
    let kNum = n.toString(k).split("0").map(Number);
    for (const n of kNum) {
        if (isPrime(n)) answer++;
    }
    return answer;
}
const n = 437674;
const k = 3;
console.log(solution(n, k));
