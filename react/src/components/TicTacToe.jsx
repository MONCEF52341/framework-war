import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i) => {
    if (calculateWinner(board) || board[i]) return;
    const newBoard = board.slice();
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => (
    <button className="w-16 h-16 border border-gray-400 text-2xl font-bold" onClick={() => handleClick(i)}>
      {board[i]}
    </button>
  );

  const winner = calculateWinner(board);
  const status = winner
    ? `Gagnant : ${winner}`
    : board.every(Boolean)
    ? 'Match nul'
    : `Joueur suivant : ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Morpion (Tic-Tac-Toe)</h2>
      <div className="mb-4">{status}</div>
      <div className="grid grid-cols-3 gap-0 w-48">
        {[...Array(9)].map((_, i) => renderSquare(i))}
      </div>
    </div>
  );
};

export default TicTacToe;