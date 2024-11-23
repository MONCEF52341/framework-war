import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Bienvenue dans l&apos;App de Démo Next.js</h1>
      <p className="mb-4">Choisissez une démo à explorer :</p>
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        <Link href="/compteur" className="p-4 bg-blue-500 text-white rounded hover:bg-blue-600">Compteur</Link>
        <Link href="/todo" className="p-4 bg-green-500 text-white rounded hover:bg-green-600">Todo List</Link>
        <Link href="/formulaire" className="p-4 bg-yellow-500 text-white rounded hover:bg-yellow-600">Formulaire Dynamique</Link>
        <Link href="/calculatrice" className="p-4 bg-red-500 text-white rounded hover:bg-red-600">Calculatrice</Link>
        <Link href="/morpion" className="p-4 bg-purple-500 text-white rounded hover:bg-purple-600">Morpion</Link>
        <Link href="/api-demo" className="p-4 bg-indigo-500 text-white rounded hover:bg-indigo-600">Démo API</Link>
      </div>
    </div>
  )
}

