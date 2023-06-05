from chessdotcom import *

def test():
    response = get_player_game_archives('pAstaTakesWs', 5)
    print(str(response).encode('utf-8', errors='replace'))

test()
