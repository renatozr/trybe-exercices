def get_fuel_total_price(liters, type):
    price_map = {"A": 1.9, "G": 2.5}
    discount_map = {"A": (0.97, 0.95), "G": (0.96, 0.94)}
    discount_type = 0 if liters <= 20 else 1

    return liters * price_map[type] * discount_map[type][discount_type]


print(get_fuel_total_price(10, "A"))
print(get_fuel_total_price(10, "G"))
print(get_fuel_total_price(25, "A"))
print(get_fuel_total_price(25, "G"))
