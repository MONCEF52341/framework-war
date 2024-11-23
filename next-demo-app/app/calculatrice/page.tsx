'use client'

import { useState } from 'react'

export default function Calculatrice() {
  const [display, setDisplay] = useState('0')
  const [operation, setOperation] = useState('')
  const [prevValue, setPrevValue] = useState('')

  const handleNumber = (num: string) => {
    setDisplay(display === '0' ? num : display + num)
  }

  const handleOperation = (op: string) => {
    setOperation(op)
    setPrevValue(display)
    setDisplay('0')
  }

  const handleEqual = () => {
    const current = parseFloat(display)
    const previous = parseFloat(prevValue)
    let result

    switch (operation) {
      case '+':
        result = previous + current
        break
      case '-':
        result = previous - current
        break
      case '*':
        result = previous * current
        break
      case '/':
        result = previous / current
        break
      default:
        return
    }

    setDisplay(result.toString())
    setOperation('')
    setPrevValue('')
  }

  const handleClear = () => {
    setDisplay('0')
    setOperation('')
    setPrevValue('')
  }

  return (
    <div className="w-64 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Calculatrice</h1>
      <div className="bg-gray-200 p-2 mb-2 text-right text-xl">{display}</div>
      <div className="grid grid-cols-4 gap-2">
        {['7', '8', '9', '/'].map(btn => (
          <button key={btn} onClick={() => isNaN(parseInt(btn)) ? handleOperation(btn) : handleNumber(btn)} className="bg-gray-300 p-2 text-center">{btn}</button>
        ))}
        {['4', '5', '6', '*'].map(btn => (
          <button key={btn} onClick={() => isNaN(parseInt(btn)) ? handleOperation(btn) : handleNumber(btn)} className="bg-gray-300 p-2 text-center">{btn}</button>
        ))}
        {['1', '2', '3', '-'].map(btn => (
          <button key={btn} onClick={() => isNaN(parseInt(btn)) ? handleOperation(btn) : handleNumber(btn)} className="bg-gray-300 p-2 text-center">{btn}</button>
        ))}
        {['0', '.', '=', '+'].map(btn => (
          <button key={btn} onClick={() => btn === '=' ? handleEqual() : isNaN(parseInt(btn)) && btn !== '.' ? handleOperation(btn) : handleNumber(btn)} className="bg-gray-300 p-2 text-center">{btn}</button>
        ))}
        <button onClick={handleClear} className="bg-red-500 text-white p-2 text-center col-span-4">Clear</button>
      </div>
    </div>
  )
}

