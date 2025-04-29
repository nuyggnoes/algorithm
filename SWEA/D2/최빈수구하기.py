import sys

sys.stdin = open("input.txt", "r")

T = int(input())

for test_case in range(1, T + 1):
    case_num = int(input())
    num_list = list(map(int, input().split()))
    num_dict = {}
    for num in num_list:
        if num in num_dict:
            num_dict[num] += 1
        else:
            num_dict[num] = 1
    max_count = max(num_dict.values())
    mode_nums = [num for num, count in num_dict.items() if count == max_count]
    answer = max(mode_nums)
    print(f"#{test_case} {answer}")
