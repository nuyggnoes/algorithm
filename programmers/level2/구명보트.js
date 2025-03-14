function solution({ people, limit }) {
    let answer = 0;
    people.sort((a, b) => b - a);
    while (people.length) {
        if (people[0] + people[people.length - 1] > limit) {
            people.shift();
            answer++;
        } else {
            people.shift();
            people.pop();
            answer++;
        }
    }
    return answer;
}

const testcase1 = {
    people: [70, 50, 80, 50],
    limit: 100,
};
const testcase2 = {
    people: [70, 80, 50],
    limit: 100,
};

console.log(solution(testcase1));
