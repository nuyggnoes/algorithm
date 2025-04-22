function solution(cacheSize, cities) {
    let answer = 0;
    const lowerCities = cities.map((e) => e.toLowerCase());
    const cache = [];
    lowerCities.forEach((city) => {
        if (!cache.includes(city)) {
            cache.push(city);
            if (cache.length > cacheSize) {
                cache.shift();
            }
            answer += 5;
        } else {
            const recentlyUsed = cache.splice(cache.indexOf(city), 1);
            cache.push(...recentlyUsed);
            answer++;
        }
    });
    return answer;
}

const cacheSize = 5;
const cities = [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
];

console.log(solution(cacheSize, cities));
