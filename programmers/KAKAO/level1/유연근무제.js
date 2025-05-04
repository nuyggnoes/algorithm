function solution(schedules, timelogs, startday) {
    let answer = 0;
    startday--;
    for (let i = 0; i < schedules.length; i++) {
        let hour = Math.floor(schedules[i] / 100);
        let minute = schedules[i] % 100;
        minute += 10;
        if (minute >= 60) {
            hour += Math.floor(minute / 60);
            minute %= 60;
        }
        const target = hour * 100 + minute;
        let flag = true;
        for (let j = 0; j < timelogs[i].length; j++) {
            const holiday = (j + startday) % 7;
            if (holiday === 5 || holiday === 6) continue;
            if (target < timelogs[i][j]) {
                flag = false;
                break;
            }
        }
        if (flag) answer++;
    }

    return answer;
}

const schedules = [730, 855, 700, 720]; // 출근 희망 시각
const timelogs = [
    [710, 700, 650, 735, 700, 931, 912],
    [908, 901, 805, 815, 800, 831, 835],
    [705, 701, 702, 705, 710, 710, 711],
    [707, 731, 859, 913, 934, 931, 905],
]; // 일주일 동안 출근한 시각
const startday = 1; // 요일, 1: 월요일 ~ 7: 일요일
console.log(solution(schedules, timelogs, startday)); // 3
