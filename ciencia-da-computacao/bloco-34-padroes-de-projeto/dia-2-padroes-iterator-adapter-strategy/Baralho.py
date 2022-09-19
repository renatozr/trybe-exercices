from collections.abc import Iterable, Iterator


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class IteradorDoBaralho(Iterator):
    def __init__(self, cartas):
        self.cartas = cartas
        self.indice = 0

    def __next__(self):
        try:
            carta = self.cartas[self.indice]
        except IndexError:
            raise StopIteration

        self.indice += 1

        return carta


class IteradorDoBaralhoInverso(Iterator):
    def __init__(self, cartas):
        self.cartas = cartas
        self.indice = len(cartas) - 1

    def __next__(self):
        try:
            carta = self.cartas[self.indice]
        except IndexError:
            raise StopIteration

        self.indice -= 1

        return carta


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return IteradorDoBaralho(self._cartas)


class BaralhoInverso(Baralho):
    def __init__(self):
        super().__init__()

    def __iter__(self):
        return IteradorDoBaralhoInverso(self._cartas)


for carta in BaralhoInverso():
    print(carta)
