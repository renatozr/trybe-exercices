def get_paint_total_price(m2):
    liters = m2 / 3
    paintcan_qty = liters // 18 + 1
    total_price = paintcan_qty * 80

    return (f"{paintcan_qty} latas", f"R$ {total_price}")


print(get_paint_total_price(200))
