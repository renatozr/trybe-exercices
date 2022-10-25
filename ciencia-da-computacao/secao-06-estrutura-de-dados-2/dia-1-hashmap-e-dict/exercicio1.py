def matched_words_len(words, chars):
    matched_words_str = ""

    for word in words:
        chars_list = list(chars)
        is_match = True

        for char in list(word):
            if char in chars_list:
                chars_list.remove(char)
            else:
                is_match = False

        if is_match:
            matched_words_str += word

    return len(matched_words_str)


if __name__ == "__main__":
    words = ["hello", "world", "students"]
    chars = "welldonehoneyr"

    print(matched_words_len(words, chars))

    words = ["cat", "bt", "hat", "tree"]
    chars = "atach"

    print(matched_words_len(words, chars))
