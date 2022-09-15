def fizz_buzz(numbers):
    try:
        result = []

        for num in numbers:
            str = ""

            if num % 3 == 0:
                str += "Fizz"
            if num % 5 == 0:
                str += "Buzz"

            result.append(str if str else num)

        return result
    except TypeError:
        raise ValueError("Argumento 'numbers' deve ser uma lista de números")
