from abc import ABC, abstractmethod
from datetime import datetime


class ManipuladorDeLog(ABC):
    @abstractmethod
    def log(self):
        raise NotImplementedError


class LogEmArquivo(ManipuladorDeLog):
    def log(self, msg):
        with open("arquivo.txt", mode="a") as arquivo:
            print(msg, file=arquivo)


class LogEmTela(ManipuladorDeLog):
    def log(self, msg):
        print(msg)


class Log:
    def __init__(self, manipuladores):
        self.__manipuladores = set(manipuladores)

    def adicionar_manipulador(self, manipulador):
        self.__manipuladores.add(manipulador)

    def info(self, msg):
        self.__log("INFO", msg)

    def alerta(self, msg):
        self.__log("ALERTA", msg)

    def erro(self, msg):
        self.__log("ERRO", msg)

    def debug(self, msg):
        self.__log("DEBUG", msg)

    def __log(self, nivel, msg):
        for manipulador in self.__manipuladores:
            manipulador.log(self.__formatar(nivel, msg))

    def __formatar(self, nivel, msg):
        data = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
        return f"[{nivel} - {data}]: {msg}"


log = Log([LogEmArquivo(), LogEmTela()])

log.info("O Token irá expirar até 2 dias")
log.alerta("Token expirou!")
log.erro("Token expirado.")
log.debug("Token: 'aoij2-f09ovnq90-049' Status: 'Expirado'")
