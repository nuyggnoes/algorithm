function solution(s, skip, index) {
    const alphabet = [..."abcdefghijklmnopqrstuvwxyz"].filter(
        (c) => !skip.includes(c)
    );
    const map = new Map();
    for (let i = 0; i < alphabet.length; i++) {
        map.set(alphabet[i], alphabet[(i + index) % alphabet.length]);
    }
    return [...s].map((c) => map.get(c)).join("");
}

const s = "aukks";
const skip = "wbqd";
const index = 5;
console.log(solution(s, skip, index));
