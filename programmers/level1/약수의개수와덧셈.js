function solution(left, right) {
    let answer = 0;
    const countDivisors = (n) => {
        let count = 0;
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) count++;
        }
        return count;
    };
    for (let i = left; i <= right; i++) {
        const numberOfDivisor = countDivisors(i);
        answer += numberOfDivisor % 2 === 0 ? i : -i;
    }
    return answer;
}
console.log(solution(13, 17));

// 제곱근이 정수면 약수의 갯수가 홀수이다.

function otherSolution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
