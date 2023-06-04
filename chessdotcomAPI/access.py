from chessdotcom import *

def test():
    response = get_player_game_archives('pAstaTakesWs', 5)
    #response = get_leaderboards(1)
    #data = response.json()
    print(str(response).encode('utf-8', errors='replace'))

test()
