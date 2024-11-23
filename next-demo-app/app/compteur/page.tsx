'use client'

import { useState } from 'react'

export default function Compteur() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Compteur</h1>
      <p className="text-4xl mb-4">{count}</p>
      <div className="space-x-4">
        <button onClick={() => setCount(count - 1)} className="px-4 py-2 bg-red-500 text-white rounded">-</button>
        <button onClick={() => setCount(count + 1)} className="px-4 py-2 bg-green-500 text-white rounded">+</button>
      </div>
    </div>
  )
}

