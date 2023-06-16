from flask_cors import CORS
from flask import Flask, request, jsonify

app = Flask(__name__)
CORS(app)


def fen_to_piece_centric(fen):
    # Piece symbols in FEN and corresponding encoding values
    piece_dict = {'P': 1, 'N': 2, 'B': 3, 'R': 4, 'Q': 5, 'K': 6,
                  'p': -1, 'n': -2, 'b': -3, 'r': -4, 'q': -5, 'k': -6}
    
    # Split FEN into main parts
    fen_parts = fen.split(' ')
    
    # Get just the piece placement part of the FEN
    fen_board = fen_parts[0]
    
    # Split into ranks
    fen_ranks = fen_board.split('/')
    
    # Initialize the board
    piece_centric_board = []
    
    # Convert each rank
    for fen_rank in fen_ranks:
        rank = []
        for char in fen_rank:
            # If character is digit, add that many 0s to the rank
            if char.isdigit():
                rank += [0] * int(char)
            # Otherwise, convert piece symbol to encoding
            else:
                rank.append(piece_dict[char])
        # Add rank to the board
        piece_centric_board.append(rank)
        
    # Convert to a 1D array
    piece_centric_board = [item for sublist in piece_centric_board for item in sublist]
    
    return piece_centric_board

fen = ['rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1', 'r1bqkbnr/pppppppp/2n5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 1 2', 'r1bqkbnr/pppppppp/2n5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq - 0 2', 'r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3', 'r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 1 3', 'r1bqkb1r/pppp1ppp/2n2n2/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 2 4', 'r1bqkb1r/pppp1ppp/2n2n2/4P3/4P3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 4', 'r1bqkb1r/pppp1ppp/2n5/4P3/4n3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 5', 'r1bqkb1r/pppp1ppp/2n5/4P3/4n3/2N2N2/PPP2PPP/R1BQKB1R b KQkq - 1 5', 'r1bqkb1r/pppp1ppp/2n5/4P3/8/2n2N2/PPP2PPP/R1BQKB1R w KQkq - 0 6', 'r1bqkb1r/pppp1ppp/2n5/4P3/8/2P2N2/P1P2PPP/R1BQKB1R b KQkq - 0 6', 'r1bqkb1r/ppp2ppp/2n5/3pP3/8/2P2N2/P1P2PPP/R1BQKB1R w KQkq d6 0 7', 'r1bqkb1r/ppp2ppp/2n5/1B1pP3/8/2P2N2/P1P2PPP/R1BQK2R b KQkq - 1 7', 'r2qkb1r/pppb1ppp/2n5/1B1pP3/8/2P2N2/P1P2PPP/R1BQK2R w KQkq - 2 8', 'r2qkb1r/pppb1ppp/2n5/1B1QP3/8/2P2N2/P1P2PPP/R1B1K2R b KQkq - 0 8,']


@app.route('/', methods=['GET', 'POST'])
def handleRequest():
    if request.method == 'GET':
        return 'Chess Sensei Stockfish Server'
    elif request.method == 'POST':
        requestData = request.get_json()  # Get the data from the POST request
        fen = requestData['fen']
        pieceCenteric = fen_to_piece_centric(fen)
        return jsonify({"centeric": pieceCenteric})