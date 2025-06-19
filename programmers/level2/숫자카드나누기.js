function solution(arrayA, arrayB) {
    const gcd = (a, b) => {
        while (b) {
            [a, b] = [b, a % b];
        }
        return a;
    };
    const getGCDFromArray = (arr) => {
        return arr.reduce((a, b) => gcd(a, b));
    };

    const gcdA = getGCDFromArray(arrayA);
    const gcdB = getGCDFromArray(arrayB);

    const isValid = (target, arr) => arr.every((num) => num % target !== 0);

    const candidateA = isValid(gcdA, arrayB) ? gcdA : 0;
    const candidateB = isValid(gcdB, arrayA) ? gcdB : 0;

    return Math.max(candidateA, candidateB);
}

const arrayA = [10, 20];
const arrayB = [5, 17];
console.log(solution(arrayA, arrayB));
