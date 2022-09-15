import pytest
from filter_emails import filter_emails


@pytest.fixture
def emails():
    return [
        "johndoe@email.com",
        "johndoeemail.com",
        "johndoe@emailcom",
        "janedoe@gmail.com",
        "janedoe@__.ail.com",
    ]


def test_filter_emails(emails):
    assert filter_emails(emails) == ["johndoe@email.com", "janedoe@gmail.com"]
