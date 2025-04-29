import sys

sys.stdin = open("input.txt", "r")

T = int(input())

for test_case in range(1, T + 1):
    arr = list(map(int, input().split()))
    sum = 0
    for num in arr:
        if num % 2 == 1:
            sum += num
    print(f"#{test_case} {sum}")
