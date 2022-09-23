ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"


class Log:
    def dispara_log(self, message):
        return message


class LogSuccess:
    def __init__(self, log: Log):
        self.log = log

    def dispara_log(self, message):
        print(f"{VERDE}{self.log.dispara_log(message)}{RESET}")


class LogWarning:
    def __init__(self, log: Log):
        self.log = log

    def dispara_log(self, message):
        print(f"{LARANJA}{self.log.dispara_log(message)}{RESET}")


class LogError:
    def __init__(self, log: Log):
        self.log = log

    def dispara_log(self, message):
        print(f"{VERMELHO}{self.log.dispara_log(message)}{RESET}")


log = Log()

log_success = LogSuccess(log)
log_success.dispara_log("O sistema está funcionando")

log_warning = LogWarning(log)
log_warning.dispara_log("O sistema está lento")

log_error = LogError(log)
log_error.dispara_log("O sistema está com erros")
