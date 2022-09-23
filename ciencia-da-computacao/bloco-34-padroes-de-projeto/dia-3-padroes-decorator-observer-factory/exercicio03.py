from abc import ABC, abstractmethod


class Sistema(ABC):
    @abstractmethod
    def acessar(self):
        raise NotImplementedError


class SistemaVendas(Sistema):
    def acessar(self):
        print("Acesso ao sistema de vendas sucedido")


class SistemaFinanceiro(Sistema):
    def acessar(self):
        print("Acesso ao sistema de financeiro sucedido")


class SistemaSuporte(Sistema):
    def acessar(self):
        print("Acesso ao sistema de suporte sucedido")


class Conta(ABC):
    def __init__(self):
        self.sistemas = []
        self.adicionar_sistemas()

    def adicionar_sistema(self, sistema):
        self.sistemas.append(sistema)

    @abstractmethod
    def adicionar_sistemas(self):
        raise NotImplementedError

    def acessar_sistemas(self):
        for sistema in self.sistemas:
            sistema.acessar()


class ContaDeSuporte(Conta):
    def adicionar_sistemas(self):
        self.adicionar_sistema(SistemaSuporte())


class ContaDeSuporteEVendas(Conta):
    def adicionar_sistemas(self):
        self.adicionar_sistema(SistemaSuporte())
        self.adicionar_sistema(SistemaVendas())


class ContaDeGerente(Conta):
    def adicionar_sistemas(self):
        self.adicionar_sistema(SistemaSuporte())
        self.adicionar_sistema(SistemaVendas())
        self.adicionar_sistema(SistemaFinanceiro())


conta_de_suporte = ContaDeSuporte()
conta_de_suporte_e_vendas = ContaDeSuporteEVendas()
conta_de_gerente = ContaDeGerente()

print("\nUsar conta de suporte")
conta_de_suporte.acessar_sistemas()

print("\nUsar conta de suporte e vendas")
conta_de_suporte_e_vendas.acessar_sistemas()

print("\nUsar conta de gerente")
conta_de_gerente.acessar_sistemas()
