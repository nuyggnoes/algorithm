function solution(video_len, pos, op_start, op_end, commands) {
    const strToSeconds = (str) => {
        const [m, s] = str.split(":").map(Number);
        return m * 60 + s;
    };
    const secondsToStr = (time) => {
        const m = Math.floor(time / 60)
            .toString()
            .padStart(2, "0");
        const s = (time % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    };
    const videoTime = strToSeconds(video_len);
    const opStartTime = strToSeconds(op_start);
    const opEndTime = strToSeconds(op_end);

    const isOpening = (time) => {
        if (opStartTime <= time && time <= opEndTime) {
            return opEndTime;
        } else {
            return time;
        }
    };

    let posTime = strToSeconds(pos);
    commands.forEach((cmd) => {
        posTime = isOpening(posTime);
        if (cmd === "next") {
            posTime += 10;
            if (posTime > videoTime) {
                posTime = videoTime;
            }
        } else {
            posTime -= 10;
            if (posTime < 0) {
                posTime = 0;
            }
        }
        posTime = isOpening(posTime);
    });
    return secondsToStr(posTime);
}

const video_len = "07:22";
const pos = "04:05";
const op_start = "00:15";
const op_end = "04:07";
const commands = ["next"];
console.log(solution(video_len, pos, op_start, op_end, commands)); // "13:00"
