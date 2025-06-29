function solution(jobs) {
    let totalTime = 0;
    let time = 0;
    let idx = 0;
    let count = 0;

    jobs.sort((a, b) => a[0] - b[0]);

    const queue = [];

    while (count < jobs.length) {
        while (idx < jobs.length && jobs[idx][0] <= time) {
            queue.push(jobs[idx++]);
        }
        if (queue.length > 0) {
            queue.sort((a, b) => a[1] - b[1]);
            const [requestTime, duration] = queue.shift();
            time += duration;
            totalTime += time - requestTime;
            count++;
        } else {
            time = jobs[idx][0];
        }
    }
    return Math.floor(totalTime / jobs.length);
}

const jobs = [
    [0, 3],
    [1, 9],
    [3, 5],
];
console.log(solution(jobs));
