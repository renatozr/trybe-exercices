def sum_sequence(n):
    result = 0

    while n > 0:
        result += n
        n -= 1

    return result


print(sum_sequence(4))
