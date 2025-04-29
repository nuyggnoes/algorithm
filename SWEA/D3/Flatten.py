import sys, heapq

sys.stdin = open("input.txt", "r")

for test_case in range(1, 11):
    n = int(input())
    box_list = list(map(int, input().split()))
    for _ in range(n):
        max_idx = box_list.index(max(box_list))
        min_idx = box_list.index(min(box_list))

        if box_list[max_idx] - box_list[min_idx] <= 1:
            break
        box_list[max_idx] -= 1
        box_list[min_idx] += 1
    result = max(box_list) - min(box_list)
    print(f"#{test_case} {result}")
