def bluff_game(bluffs):
    player1_not_picked_nums = bluffs[0][1].difference(bluffs[1][1])
    player1_score = max(player1_not_picked_nums) - min(player1_not_picked_nums)

    player2_not_picked_nums = bluffs[1][1].difference(bluffs[0][1])
    player2_score = max(player2_not_picked_nums) - min(player2_not_picked_nums)

    if player1_score > player2_score:
        return bluffs[0][0]
    elif player2_score > player1_score:
        return bluffs[1][0]
    else:
        return "Empate"


if __name__ == "__main__":
    bluffs = [("Clara", {0, 1, 5, 9, 10}), ("Marco", {0, 2, 8, 9, 10})]

    bluff_game_result = bluff_game(bluffs)

    print(bluff_game_result)
