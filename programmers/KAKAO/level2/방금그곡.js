function solution(m, musicinfos) {
    let answer = "(None)";
    let maxPlayTime = -1;
    const parseMelody = (melody) => {
        return melody
            .replace(/C#/g, "c")
            .replace(/D#/g, "d")
            .replace(/F#/g, "f")
            .replace(/G#/g, "g")
            .replace(/A#/g, "a")
            .replace(/B#/g, "b");
    };
    m = parseMelody(m);

    for (const info of musicinfos) {
        const [start, end, title, melody] = info.split(",");
        const [startHour, startMin] = start.split(":").map(Number);
        const [endHour, endMin] = end.split(":").map(Number);
        const playTime = endHour * 60 + endMin - (startHour * 60 + startMin);

        const parsedMelody = parseMelody(melody);
        const repeatedMelody = parsedMelody
            .repeat(Math.ceil(playTime / parsedMelody.length))
            .slice(0, playTime);
        if (repeatedMelody.includes(m)) {
            if (playTime > maxPlayTime) {
                maxPlayTime = playTime;
                answer = title;
            }
        }
    }
    return answer;
}
const m = "AB";
const musicinfos = [
    "12:00,12:14,HELLO,CDEFGAB",
    "13:00,13:30,WORLD,ABCDEF, ",
    "13:00,13:32,JS,ABCDEF",
];
console.log(solution(m, musicinfos));
