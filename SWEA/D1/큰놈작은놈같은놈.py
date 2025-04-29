import sys

sys.stdin = open("input.txt", "r")

N = int(input())
num_list = list(map(int, input().split()))
num_list.sort()
print(num_list[N // 2])
