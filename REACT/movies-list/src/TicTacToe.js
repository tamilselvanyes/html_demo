import { useState } from 'react';

const INITIAL_STATES = [null, null, null, null, null, null, null, null, null]
export function TicTacToe() {
    const [board, setBoard] = useState(INITIAL_STATES);

    function decideWinner(board) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        let count_null = 0;
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
                return `won by ${board[a]}`;

            }
        }

        for(let j = 0; j < board.length; j++) {
            //Draw logic 
            if(board[j] !== null){
                    count_null = count_null + 1;
            }
            // when count is 9 that means the box is full but still no winner which means "DRAW"
            if(count_null === 9){
                return "DRAW";
            }
        }
        
        return null;
    }

    const winner = decideWinner(board);
    const [isXturn, setIsXturn] = useState(true);

    const handleClick = (index) => {
        if (winner === null && board[index] === null) {
            const boardCopy = [...board];
            boardCopy[index] = isXturn ? "X" : "O";
            setBoard(boardCopy);
            setIsXturn(!isXturn);
        }

    };
    return (
        <div className="full-game">
            <div className="board-info">
                <div className="board">
                    {board.map((val, index) => (
                        <Gamebox key={index} val={val} onPlayerClick={() => handleClick(index)} />))}
                </div>
                <div>
                    {isXturn ? <h4>X's Turn</h4> : <h4>O's Turn</h4>}
                </div>
            </div>
            {winner ? <h2 className="result">
                Match {winner} <button className="btn btn-primary" onClick = {()=>setBoard(INITIAL_STATES)} > Restart </button></h2> : ""}
        </div>
    );
}
function Gamebox({ val, onPlayerClick }) {

    var styles = {}
    if (val !== null) {
        styles = {
            backgroundColor: val === "X" ? "green" : "red"
        };
    } else {
        styles = {
            backgroundColor: "white"
        };
    }
    return (
        <div className="gamebox" style={styles} onClick={onPlayerClick}>{val}</div>
    );
}
