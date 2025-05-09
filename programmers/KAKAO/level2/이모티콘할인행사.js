function solution(users, emoticons) {
    let answer = [0, 0];
    const discount = [10, 20, 30, 40];
    function getP() {
        const result = [];
        const dfs = (depth, path) => {
            if (depth === emoticons.length) {
                result.push([...path]);
                return;
            }
            for (let i = 0; i < discount.length; i++) {
                path.push(discount[i]);
                dfs(depth + 1, path);
                path.pop();
            }
        };
        dfs(0, []);
        return result;
    }
    const sales = getP();
    for (let i = 0; i < sales.length; i++) {
        const saleEmoticonsPrice = [];
        for (let j = 0; j < sales[i].length; j++) {
            saleEmoticonsPrice.push(
                emoticons[j] - (emoticons[j] * sales[i][j]) / 100
            );
        }
        let plusJoin = 0;
        let totalPrice = 0;
        for (let k = 0; k < users.length; k++) {
            const [limitSale, limitPrice] = users[k];
            let userSum = 0;
            for (let l = 0; l < saleEmoticonsPrice.length; l++) {
                if (sales[i][l] >= limitSale) {
                    userSum += saleEmoticonsPrice[l];
                }
            }
            if (userSum >= limitPrice) {
                plusJoin++;
            } else {
                totalPrice += userSum;
            }
        }
        if (
            answer[0] < plusJoin ||
            (answer[0] === plusJoin && answer[1] < totalPrice)
        ) {
            answer = [plusJoin, totalPrice];
        }
    }
    return answer;
}

const users = [
    [40, 10000],
    [25, 10000],
];
const emoticons = [7000, 9000];
console.log(solution(users, emoticons)); // [1,5400]
