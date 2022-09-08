def get_biggest_name(names):
    result = ""

    for name in names:
        if len(name) > len(result):
            result = name

    return result


print(
    get_biggest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
)
