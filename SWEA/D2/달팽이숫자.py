import sys

sys.stdin = open("input.txt", "r")

T = int(input())


def make_arr(n):
    arr = [[0] * n for _ in range(n)]
    dx = [0, 1, 0, -1]
    dy = [1, 0, -1, 0]
    x = 0
    y = 0
    d = 0
    for i in range(1, n * n + 1):
        arr[x][y] = i
        nx, ny = x + dx[d], y + dy[d]
        if nx < 0 or ny < 0 or nx >= n or ny >= n or arr[nx][ny] != 0:
            d = (d + 1) % 4
            nx, ny = x + dx[d], y + dy[d]
        x, y = nx, ny
    return arr


for test_case in range(1, T + 1):
    n = int(input())
    result = make_arr(n)
    print(f"#{test_case} ")
    for row in result:
        print(*row)
