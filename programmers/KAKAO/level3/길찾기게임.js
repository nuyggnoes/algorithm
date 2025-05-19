class TreeNode {
    constructor(x, y, idx) {
        this.x = x;
        this.y = y;
        this.idx = idx;
        this.left = null;
        this.right = null;
    }

    insert(node) {
        if (node.x < this.x) {
            if (this.left) this.left.insert(node);
            else this.left = node;
        } else {
            if (this.right) this.right.insert(node);
            else this.right = node;
        }
    }
}

function solution(nodeinfo) {
    const answer = [];
    const nodeInfoWithIndex = nodeinfo.map(([x, y], idx) => ({
        x,
        y,
        idx: idx + 1,
    }));
    nodeInfoWithIndex.sort((a, b) => {
        if (a.y === b.y) return a.x - b.x;
        return b.y - a.y;
    });
    const rootNode = new TreeNode(
        nodeInfoWithIndex[0].x,
        nodeInfoWithIndex[0].y,
        nodeInfoWithIndex[0].idx
    );
    for (let i = 1; i < nodeInfoWithIndex.length; i++) {
        const { x, y, idx } = nodeInfoWithIndex[i];
        rootNode.insert(new TreeNode(x, y, idx));
    }
    const preOrder = [];
    const postOrder = [];
    function getPreOrder(node) {
        if (!node) return;
        preOrder.push(node.idx);
        getPreOrder(node.left);
        getPreOrder(node.right);
    }
    function getPostOrder(node) {
        if (!node) return;
        getPostOrder(node.left);
        getPostOrder(node.right);
        postOrder.push(node.idx);
    }
    getPreOrder(rootNode);
    getPostOrder(rootNode);
    answer.push(preOrder, postOrder);
    return answer;
}

const nodeinfo = [
    [5, 3],
    [11, 5],
    [13, 3],
    [3, 5],
    [6, 1],
    [1, 3],
    [8, 6],
    [7, 2],
    [2, 2],
];
console.log(solution(nodeinfo));
