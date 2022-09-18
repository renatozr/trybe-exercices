class Televisao:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    @property
    def volume(self):
        return self.__volume

    @property
    def canal(self):
        return self.__canal

    @property
    def tamanho(self):
        return self.__tamanho

    @property
    def ligada(self):
        return self.__ligada

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def modificar_canal(self, canal):
        if 1 <= canal <= 99:
            self.__canal = canal
        else:
            raise ValueError("Este canal não existe")

    def ligar_desligar(self):
        self.__ligada = not self.__ligada

    def __str__(self):
        return f"""Televisao
        - volume: {self.__volume}
        - canal: {self.__canal}
        - tamanho: {self.__tamanho}
        - ligada: {self.__ligada}"""


televisao1 = Televisao(100)

print(televisao1)

televisao1.ligar_desligar()

for i in range(20):
    televisao1.aumentar_volume()

for i in range(10):
    televisao1.diminuir_volume()

televisao1.modificar_canal(19)

print(televisao1)
