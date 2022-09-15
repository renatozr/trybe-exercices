import pytest
from fizz_buzz import fizz_buzz


def test_fizz_buzz():
    fizz_buzz_result = [1, 2, "Fizz", 4, "Buzz", 14, "FizzBuzz"]

    assert fizz_buzz([1, 2, 3, 4, 5, 14, 15]) == fizz_buzz_result

    with pytest.raises(ValueError, match="Argumento 'numbers' deve ser uma lista de números"):
        fizz_buzz(1)

    with pytest.raises(ValueError, match="Argumento 'numbers' deve ser uma lista de números"):
        fizz_buzz(["a", "b"])
