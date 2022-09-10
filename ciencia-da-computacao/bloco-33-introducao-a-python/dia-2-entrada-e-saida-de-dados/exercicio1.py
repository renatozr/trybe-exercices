def wacky_print(name: str):
    i = len(name)
    while i >= 1:
        print(name[:i])
        i -= 1


wacky_print("RENATO")
