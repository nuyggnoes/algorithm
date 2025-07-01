function timeToMinute(time) {
    const [hour, min] = time.split(':').map(Number);
    return hour * 60 + min;
}

function solution(plans) {
    const sortedPlans = plans
        .map(([subject, time, count]) => [
            subject,
            timeToMinute(time),
            Number(count),
        ])
        .sort((a, b) => a[1] - b[1]);

    const stack = [];
    const result = [];

    for (let i = 0; i < sortedPlans.length - 1; i++) {
        const [curSubject, curTime, curDuration] = sortedPlans[i];
        const [nextSubject, nextTime, nextDuration] = sortedPlans[i + 1];

        let remainTime = nextTime - curTime;

        if (remainTime >= curDuration) {
            result.push(curSubject);
            remainTime -= curDuration;
            while (remainTime > 0 && stack.length) {
                const [pausedSubject, pausedDuration] = stack.pop();
                if (remainTime >= pausedDuration) {
                    result.push(pausedSubject);
                    remainTime -= pausedDuration;
                } else {
                    stack.push([pausedSubject, pausedDuration - remainTime]);
                    break;
                }
            }
        } else {
            stack.push([curSubject, curDuration - remainTime]);
        }
    }
    result.push(sortedPlans[sortedPlans.length - 1][0]);
    while (stack.length) {
        result.push(stack.pop()[0]);
    }
    return result;
}

const plans = [
    ['science', '12:40', '50'],
    ['music', '12:20', '40'],
    ['history', '14:00', '30'],
    ['computer', '12:30', '100'],
];

console.log(solution(plans));
