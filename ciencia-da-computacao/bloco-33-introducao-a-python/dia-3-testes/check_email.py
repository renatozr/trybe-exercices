import re


def check_email(email):
    if re.fullmatch(
        r"([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+",
        email,
    ):
        return True
    return False
