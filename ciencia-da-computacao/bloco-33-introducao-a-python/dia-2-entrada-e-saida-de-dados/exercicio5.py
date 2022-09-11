import json
import random

with open("pokemons.json", mode="r") as file:
    pokemons = [pokemon["name"] for pokemon in json.load(file)["results"]]

chosen_pokemon = random.choice(pokemons)
chosen_pokemon_len = len(chosen_pokemon)
error_count = 0

print("Quem é esse pokemon?\n")

while error_count < chosen_pokemon_len:
    print(f"-- {chosen_pokemon[:error_count]}  --")

    answer = input("Insira seu palpite aqui: ")

    if answer == chosen_pokemon:
        print(f"\nAcertou! O pokemon era: {chosen_pokemon}")
        break

    error_count += 1

    print("\n\n")

if error_count == chosen_pokemon_len:
    print(f"\nNão foi desta vez! O pokemon era: {chosen_pokemon}")
