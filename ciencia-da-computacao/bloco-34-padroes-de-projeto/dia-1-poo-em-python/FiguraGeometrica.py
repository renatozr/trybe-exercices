from abc import ABC, abstractmethod
from math import pi


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimetro(self):
        raise NotImplementedError


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado**2

    def perimetro(self):
        return self.lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return self.base * 2 + self.altura * 2


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return pi * self.raio**2

    def perimetro(self):
        return 2 * pi * self.raio


quadrado = Quadrado(2)

print("quadrado")
print("Área:", quadrado.area(), "Perímetro:", quadrado.perimetro())

retangulo = Retangulo(4, 3)

print("retangulo")
print("Área:", retangulo.area(), "Perímetro:", retangulo.perimetro())

circulo = Circulo(5)

print("circulo")
print("Área:", circulo.area(), "Perímetro:", circulo.perimetro())
