import random
import json

with open("words.json", mode="r") as file:
    words = json.load(file)

chosen_word = random.choice(words)
scrambled_word = "".join(random.sample(chosen_word, len(chosen_word)))
chances = 3
isAnswerCorrect = False
final_message = "\nSinto muito você perdeu..."

print("\n-- JOGO DA PALAVRA EMBARALHADA --\n")

print(f"Palavra embaralhada: {scrambled_word}\n")

while not isAnswerCorrect and chances > 0:
    print(f"Você tem {chances} chances para acertar qual é a palavra original")

    answer = input("Insira seu palpite aqui: ")

    if chances == 1:
        print("Cuidado esta é sua última chance! Pense bem...")

    if answer == chosen_word:
        isAnswerCorrect = True
        final_message = "\nMuito bem, você acertou!"
    else:
        chances -= 1

    print("\n\n\n")

print(final_message)
print("A palavra era -->", chosen_word)
