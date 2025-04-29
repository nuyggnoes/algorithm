import sys

sys.stdin = open("input.txt", "r")

T = int(input())


def max_profit(prices):
    max_price = 0
    profit = 0
    for price in reversed(prices):
        if price > max_price:
            max_price = price
        profit += max_price - price
    return profit


for test_case in range(1, T + 1):
    n = int(input())
    prices = list(map(int, input().split()))
    profit = max_profit(prices)

    print(f"#{test_case} {profit}")
