function solution(n, t, m, timetable) {
    function timeStr(time) {
        const h = Math.floor(time / 60)
            .toString()
            .padStart(2, "0");
        const m = (time % 60).toString().padStart(2, "0");
        return `${h}:${m}`;
    }
    function strTime(str) {
        const [h, m] = str.split(":").map(Number);
        return h * 60 + m;
    }
    const busTimetable = [];
    for (let i = 0; i < n; i++) {
        const start = "09:00";
        busTimetable.push(strTime(start) + i * t);
    }
    const crew = timetable.map((e) => strTime(e)).sort((a, b) => a - b);
    let idx = 0;
    for (let i = 0; i < busTimetable.length; i++) {
        const busTime = busTimetable[i];
        let count = 0;

        while (count < m && idx < crew.length && crew[idx] <= busTime) {
            count++;
            idx++;
        }

        if (i === busTimetable.length - 1) {
            if (count < m) {
                return timeStr(busTime);
            } else {
                return timeStr(crew[idx - 1] - 1);
            }
        }
    }
}
const n = 10;
const t = 60;
const m = 45;
const timetable = [
    "23:59",
    "23:59",
    "23:59",
    "23:59",
    "23:59",
    "23:59",
    "23:59",
    "23:59",
    "23:59",
    "23:59",
    "23:59",
    "23:59",
    "23:59",
    "23:59",
    "23:59",
    "23:59",
];
console.log(solution(n, t, m, timetable));
