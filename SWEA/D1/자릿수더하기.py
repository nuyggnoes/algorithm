import sys

sys.stdin = open("input.txt", "r")

N = input()
n_list = list(N)
result = 0
for num in n_list:
    result += int(num)
print(result)
