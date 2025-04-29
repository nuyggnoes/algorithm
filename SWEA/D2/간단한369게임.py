import sys

sys.stdin = open("input.txt", "r")

n = int(input())
num_list = [str(i) for i in range(1, n + 1)]
for i in range(len(num_list)):
    numbers = list(num_list[i])
    dash = ""
    is_exist = False
    for sep_num in numbers:
        if int(sep_num) != 0 and int(sep_num) % 3 == 0:
            dash += "-"
            is_exist = True
    if is_exist:
        num_list[i] = dash

print(*num_list)
