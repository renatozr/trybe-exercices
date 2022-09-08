def get_arithmetic_mean(numbers):
    sum, qty = 0, len(numbers)

    for number in numbers:
        sum += number

    return sum / qty


print(get_arithmetic_mean([1, 2, 3]))
