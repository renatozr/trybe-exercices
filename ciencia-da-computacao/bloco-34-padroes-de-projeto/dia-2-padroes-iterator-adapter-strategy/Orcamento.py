from abc import ABC, abstractmethod


class OrcamentoStrategy(ABC):
    @staticmethod
    @abstractmethod
    def calcular_imposto(valor):
        raise NotImplementedError


class IssStrategy(OrcamentoStrategy):
    @staticmethod
    def calcular_imposto(valor):
        return valor * 0.1


class IcmsStrategy(OrcamentoStrategy):
    @staticmethod
    def calcular_imposto(valor):
        return valor * 0.06


class PisStrategy(OrcamentoStrategy):
    @staticmethod
    def calcular_imposto(valor):
        return valor * 0.0065


class CofinsStrategy(OrcamentoStrategy):
    @staticmethod
    def calcular_imposto(valor):
        return valor * 0.03


class Orcamento:
    def __init__(self, valor, orcamento_strategy):
        self.valor = valor
        self.orcamento_strategy = orcamento_strategy

    def calcular_imposto(self):
        return self.orcamento_strategy.calcular_imposto(self.valor)


orcamento_iss = Orcamento(1000, IssStrategy)
orcamento_icms = Orcamento(1000, IcmsStrategy)
orcamento_pis = Orcamento(1000, PisStrategy)
orcamento_cofins = Orcamento(1000, CofinsStrategy)
print(f"ISS: {orcamento_iss.calcular_imposto()}")
print(f"ICMS: {orcamento_icms.calcular_imposto()}")
print(f"PIS: {orcamento_pis.calcular_imposto()}")
print(f"COFINS: {orcamento_cofins.calcular_imposto()}")
