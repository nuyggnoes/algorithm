function solution(routes) {
    let answer = 0;
    let camera = -30001;
    routes.sort((a, b) => a[1] - b[1]);
    routes.forEach((route) => {
        if (camera < route[0]) {
            camera = route[1];
            answer++;
        }
    });
    console.log(routes);
    return answer;
}

console.log(
    solution([
        [-20, -15],
        [-14, -5],
        [-18, -13],
        [-5, -3],
    ])
);
