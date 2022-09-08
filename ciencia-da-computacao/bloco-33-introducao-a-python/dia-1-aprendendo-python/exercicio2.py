def arithmetic_mean(numbers):
    sum, qty = 0, len(numbers)

    for number in numbers:
        sum += number

    return sum / qty


print(arithmetic_mean([1, 2, 3]))
