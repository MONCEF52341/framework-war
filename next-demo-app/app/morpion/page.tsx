'use client'

import { useState } from 'react'

type SquareValue = 'X' | 'O' | null

const calculateWinner = (squares: SquareValue[]): SquareValue => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export default function Morpion() {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    const newSquares = squares.slice()
    newSquares[i] = xIsNext ? 'X' : 'O'
    setSquares(newSquares)
    setXIsNext(!xIsNext)
  }

  const renderSquare = (i: number) => (
    <button className="w-20 h-20 border border-gray-400 text-4xl font-bold" onClick={() => handleClick(i)}>
      {squares[i]}
    </button>
  )

  const winner = calculateWinner(squares)
  let status
  if (winner) {
    status = `Gagnant : ${winner}`
  } else if (squares.every(Boolean)) {
    status = 'Match nul'
  } else {
    status = `Prochain joueur : ${xIsNext ? 'X' : 'O'}`
  }

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Morpion</h1>
      <div className="mb-4">{status}</div>
      <div className="grid grid-cols-3 gap-2 w-64 mx-auto">
        {Array(9).fill(null).map((_, i) => (
          <div key={i}>{renderSquare(i)}</div>
))}
      </div>
    </div>
  )
}

