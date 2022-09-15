def convert_to_phonenumber(str):
    phonenumber_map = [
        ["ABC", "2"],
        ["DEF", "3"],
        ["GHI", "4"],
        ["JKL", "5"],
        ["MNO", "6"],
        ["PQRS", "7"],
        ["TUV", "8"],
        ["WXYZ", "9"],
    ]
    result = ""

    for char in str:
        if char.isalpha():
            for letters, num in phonenumber_map:
                if char in letters:
                    result += num
                    break
        else:
            result += char

    return result


print(convert_to_phonenumber("1-HOME-SWEET-HOME"))
