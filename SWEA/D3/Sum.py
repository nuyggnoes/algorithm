import sys

sys.stdin = open("input.txt", "r")

for _ in range(1, 11):
    test_case = int(input())
    arr = []
    for i in range(100):
        row = list(map(int, input().split()))
        arr.append(row)
    max_val = 0
    diagonal_left = 0
    diagonal_right = 0
    for i in range(100):
        row = 0
        col = 0
        for j in range(100):
            row += arr[i][j]
            col += arr[j][i]
        diagonal_right += arr[i][i]
        diagonal_left += arr[i][100 - 1 - i]
        max_val = max(row, col, max_val)
    max_val = max(max_val, diagonal_left, diagonal_right)
    print(f"#{test_case} {max_val}")
