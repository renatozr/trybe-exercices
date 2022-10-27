def get_biggest_substring(string):
    substring = ""
    biggest_substring = ""
    appeared_chars = []

    for c in list(string):
        if c not in appeared_chars:
            substring += c
            appeared_chars.append(c)
        else:
            if len(substring) > len(biggest_substring):
                biggest_substring = substring

            substring = ""
            appeared_chars.clear()

            substring += c
            appeared_chars.append(c)

    return biggest_substring


if __name__ == "__main__":
    string_example = "serdevemuitolegalmasehprecisoestudarbastante"

    print(get_biggest_substring(string_example))
