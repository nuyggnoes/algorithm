import sys

sys.stdin = open("input.txt", "r")

T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    farm = [list(map(int, input().strip())) for _ in range(N)]

    total = 0
    mid = N // 2

    for i in range(N):
        if i <= mid:
            start = mid - i
            end = mid + i
        else:
            start = mid - (N - 1 - i)
            end = mid + (N - 1 - i)

        for j in range(start, end + 1):
            total += farm[i][j]

    print(f"#{test_case} {total}")
