from stockfish import Stockfish
from flask_cors import CORS
from flask import Flask, request, jsonify

app = Flask(__name__)
CORS(app)


try:
    stockfish = Stockfish(r"C:\Users\aliva\Desktop\stockfish_15.1_win_x64_avx2\stockfish_15.1_win_x64_avx2\stockfish-windows-2022-x86-64-avx2.exe")
except Exception as e:
    print(f"Failed to initialize Stockfish: {e}")

@app.route('/', methods=['GET', 'POST'])
def handleRequest():
    if request.method == 'GET':
        return 'Chess Sensei Stockfish Server'
    elif request.method == 'POST':
        requestData = request.get_json()  # Get the data from the POST request
        fen = requestData['fen']
        bestMoves = getBestMove(fen)
        bestSeq = getBestSequence(fen)
        return jsonify({"move": bestMoves}, {"sequence": bestSeq})
        
def getBestMove(fen):
    stockfish.set_fen_position(fen)
    best_move = stockfish.get_best_move()
    return best_move

def getBestSequence(fen):
    stockfish.set_fen_position(fen)
    top_moves = stockfish.get_top_moves(5)
    return top_moves

if __name__ == "__main__":
    app.run(debug=True)