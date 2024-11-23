'use client'

import { useState, useEffect } from 'react'

interface Pokemon {
  name: string;
  height: number;
  weight: number;
  types: Array<{ type: { name: string } }>;
}

export default function ApiDemo() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchPokemon = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/25');
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données Pokémon:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Démo API - Informations sur Pikachu</h1>
      {loading ? (
        <p>Chargement...</p>
      ) : pokemon ? (
        <div>
          <h2 className="text-xl mb-2">Nom: {pokemon.name}</h2>
          <p>Taille: {pokemon.height / 10} m</p>
          <p>Poids: {pokemon.weight / 10} kg</p>
          <p>Types: {pokemon.types.map(t => t.type.name).join(', ')}</p>
        </div>
      ) : (
        <p>Impossible de charger les données Pokémon.</p>
      )}
      <button onClick={fetchPokemon} className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded">
        Rafraîchir les données
      </button>
    </div>
  )
}

