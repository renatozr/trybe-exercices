from abc import ABC, abstractmethod


class Alarme:
    def __init__(self):
        self.rotinas = []

    def adicionar_rotina(self, rotina):
        self.rotinas.append(rotina)

    def remover_rotina(self, rotina):
        self.rotinas.remove(rotina)

    def despertar(self):
        for rotina in self.rotinas:
            rotina.acionar()


class Rotina(ABC):
    @abstractmethod
    def acionar(self):
        raise NotImplementedError


class AcenderAsLuzes(Rotina):
    def acionar(self):
        print("Acender as luzes")


class PrepararOCafe(Rotina):
    def acionar(self):
        print("Preparar o café")


class LigarOComputador(Rotina):
    def acionar(self):
        print("Ligar o computador")


alarme = Alarme()

acender_as_luzes = AcenderAsLuzes()
preparar_o_cafe = PrepararOCafe()
ligar_o_computador = LigarOComputador()

alarme.adicionar_rotina(acender_as_luzes)
alarme.adicionar_rotina(preparar_o_cafe)
alarme.adicionar_rotina(ligar_o_computador)

alarme.despertar()

alarme.remover_rotina(preparar_o_cafe)

alarme.despertar()
