import sys

sys.stdin = open("input.txt", "r")

T = int(input())
for test_case in range(1, T + 1):
    n, m = map(int, input().split())
    board = [list(map(int, input().split())) for _ in range(n)]

    max_flies = 0
    for i in range(n - m + 1):
        for j in range(n - m + 1):
            total = 0
            for x in range(i, i + m):
                for y in range(j, j + m):
                    total += board[x][y]
            max_flies = max(max_flies, total)

    print(f"#{test_case} {max_flies}")
