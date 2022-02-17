import { useState } from 'react';
import Button from '@mui/material/Button';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti';
import React from 'react';

const INITIAL_STATES = [null, null, null, null, null, null, null, null, null]
export function TicTacToe() {
    const [board, setBoard] = useState(INITIAL_STATES);
    const winner = decideWinner(board);
    const [xwin, setXwin] = useState(0);
    const [owin, setOwin] = useState(0);
    const [draw, setDraw] = useState(0);
    const { width, height } = useWindowSize()

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
                console.log("Winner declared");
                return board[a];
            }
        }

        for (let j = 0; j < board.length; j++) {
            //Draw logic 
            if (board[j] !== null) {
                count_null = count_null + 1;
            }
            // when count is 9 that means the box is full but still no winner which means "DRAW"
            if (count_null === 9) {
                return "DRAW";
            }
        }

        return null;
    }


    const [isXturn, setIsXturn] = useState(true);
    var result = "";
    if (winner === "DRAW") {
        result = "DRAW";
    } else {
        result = `won by ${winner}`
    }




    const handleClick = (index) => {
        if (winner === null && board[index] === null) {
            const boardCopy = [...board];
            boardCopy[index] = isXturn ? "X" : "O";
            setBoard(boardCopy);
            if (decideWinner(boardCopy) === "X") {
                setXwin(xwin + 1);
            }
            if (decideWinner(boardCopy) === "O") {
                setOwin(owin + 1);
            }
            if (decideWinner(boardCopy) === "DRAW") {
                setDraw(draw + 1);
            }
            setIsXturn(!isXturn);
        }

    };


    return (
        <div className="full-game">
            {(winner && winner !== "DRAW") ? <Confetti
                width={width}
                height={height}
            />:""}
            <div className="board-info">
                <div className="scoreboard">
                    <h3>Score Card</h3>
                    <span>X's win:<b>{xwin}</b></span><br></br>
                    <span>O's win:<b>{owin}</b></span>
                    <p>Draw: {draw}</p>
                    <Button variant="outlined" onClick={() => {
                        setBoard(INITIAL_STATES)
                        setXwin(0);
                        setOwin(0)
                        setDraw(0)
                    }}>Restart Series</Button>
                </div>
                <div className="board">
                    {board.map((val, index) => (
                        <Gamebox key={index} val={val} onPlayerClick={() => handleClick(index)} />))}
                </div>
                <div className="turn-details">
                    {isXturn ? <h4>X's Turn</h4> : <h4>O's Turn</h4>}
                </div>
            </div>
            {winner ? <h2 className="result">
                Match {result} <Button variant="outlined" className="success" onClick={() => {setBoard(INITIAL_STATES)
                setIsXturn(true)}} > Restart </Button></h2> : ""}
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

