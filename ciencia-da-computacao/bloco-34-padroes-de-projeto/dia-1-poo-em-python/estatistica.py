class Estatistica:
    def __init__(self, numbers):
        self.__numbers = numbers
        self.__numbers_len = len(numbers)

    def media(self):
        return sum(self.__numbers) / self.__numbers_len

    def mediana(self):
        numbers_copy = self.__numbers.copy()
        numbers_copy.sort()
        numbers_len_half = self.__numbers_len // 2

        if self.__numbers_len % 2 == 1:
            return numbers_copy[numbers_len_half]
        else:
            return (
                numbers_copy[numbers_len_half - 1]
                + numbers_copy[numbers_len_half]
            ) / 2

    def moda(self):
        return max(set(self.__numbers), key=self.__numbers.count)
