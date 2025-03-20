function solution(genres, plays) {
    let totalDic = {};
    genres.forEach((genre, index) => {
        totalDic[genre] = totalDic[genre] ? totalDic[genre] + plays[index] : plays[index];
    });
    let countDic = {};
    return genres
        .map((genre, index) => ({ genre, count: plays[index], index }))
        .sort((a, b) => {
            if (a.genre !== b.genre) return totalDic[b.genre] - totalDic[a.genre];
            if (a.count !== b.count) return b.count - a.count;
            return a.index - b.index;
        })
        .filter((obj) => {
            if (countDic[obj.genre] >= 2) return false;
            countDic[obj.genre] = countDic[obj.genre] ? countDic[obj.genre] + 1 : 1;
            return true;
        })
        .map((obj) => obj.index);
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]));
