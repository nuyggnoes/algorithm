import sys

sys.stdin = open("input.txt", "r")

T = int(input())


def isValid(num_list):
    if len(num_list) == 0:
        return True
    num_dict = {}
    for i in range(9):
        if num_list[i] in num_dict:
            return False
        else:
            num_dict[num_list[i]] = 1
    return True


for test_case in range(1, T + 1):
    board = []
    for _ in range(9):
        row = list(map(int, input().split()))
        board.append(row)
    flag = True
    for i in range(9):
        row = []
        col = []
        square_list = []
        for j in range(9):
            row.append(board[i][j])
            col.append(board[j][i])
        for k in range(i, i + 3):
            if i % 3 != 0:
                break
            for z in range(3):
                square_list.append(board[k][z])
        if not isValid(row) or not isValid(col) or not isValid(square_list):
            flag = False
            break
    if flag:
        print(f"#{test_case} 1")
    else:
        print(f"#{test_case} 0")
