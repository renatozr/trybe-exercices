from check_email import check_email


def test_verify_email():
    assert check_email("joedoe@email.com") is True

    assert check_email("") is False

    assert check_email("joedoeemail.com") is False

    assert check_email("joedoe@emailcom") is False
