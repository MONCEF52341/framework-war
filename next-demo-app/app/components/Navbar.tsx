'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [theme, setTheme] = useState('bg-blue-500')

  useEffect(() => {
    const savedTheme = localStorage.getItem('navTheme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme)
    localStorage.setItem('navTheme', newTheme)
  }

  return (
    <nav className={`${theme} p-4 text-white`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Demo App</Link>
        <div className="space-x-4">
          <Link href="/compteur">Compteur</Link>
          <Link href="/todo">Todo List</Link>
          <Link href="/formulaire">Formulaire</Link>
          <Link href="/calculatrice">Calculatrice</Link>
          <Link href="/morpion">Morpion</Link>
          <Link href="/api-demo">API Demo</Link>
        </div>
        <div className="space-x-2">
          <button onClick={() => changeTheme('bg-blue-500')} className="px-2 py-1 bg-blue-700 rounded">Bleu</button>
          <button onClick={() => changeTheme('bg-green-500')} className="px-2 py-1 bg-green-700 rounded">Vert</button>
          <button onClick={() => changeTheme('bg-red-500')} className="px-2 py-1 bg-red-700 rounded">Rouge</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

