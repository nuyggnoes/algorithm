/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
    const stack = [];

    for (const p of path.split("/")) {
        if (p === "" || p === ".") continue;
        if (p === "..") stack.pop();
        else stack.push(p);
    }

    return "/" + stack.join("/");
};

const path = "/.../a/../b/c/../d/./";
console.log(simplifyPath(path));
