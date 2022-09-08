def print_asterisks_right_triangle(n):
    right_triangle = ""

    for i in range(1, n + 1):
        row = ("*" * i) + (" " * (i - n)) + "\n"
        right_triangle += row

    print(right_triangle)


# def print_asterisks_right_triangle(n):
#     right_triangle, i = "", 1

#     while i <= n:
#         row = f'{"*" * i}{" " * (i - n)}\n'
#         right_triangle += row
#         i += 1

#     print(right_triangle)


print_asterisks_right_triangle(5)
