from check_email import check_email


def filter_emails(emails):
    return [email for email in emails if check_email(email)]
