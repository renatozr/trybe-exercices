import json
import csv

with open("books.json", mode="r") as file:
    books = json.load(file)

books_qty = len(books)
group_by_category = {}

for book in books:
    for category in book["categories"]:
        if category not in group_by_category:
            group_by_category[category] = 0
        group_by_category[category] += 1

with open("books_category_analysis.csv", mode="w") as file:
    writer = csv.writer(file)

    headers = ["categoria", "porcentagem"]

    writer.writerow(headers)

    for category, qty in group_by_category.items():
        percentage = qty / books_qty

        row = [category, percentage]

        writer.writerow(row)
