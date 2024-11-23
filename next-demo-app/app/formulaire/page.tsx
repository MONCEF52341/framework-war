'use client'

import { useState } from 'react'

export default function FormulaireDynamique() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    age: '',
    genre: '',
    newsletter: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    })
  }

  return (
    <div className="flex">
      <div className="w-1/2 pr-4">
        <h1 className="text-2xl font-bold mb-4">Formulaire Dynamique</h1>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Nom:</label>
            <input type="text" name="nom" value={formData.nom} onChange={handleChange} className="border p-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Âge:</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} className="border p-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Genre:</label>
            <select name="genre" value={formData.genre} onChange={handleChange} className="border p-2 w-full">
              <option value="">Sélectionnez</option>
              <option value="homme">Homme</option>
              <option value="femme">Femme</option>
              <option value="autre">Autre</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleChange} className="mr-2" />
              S'abonner à la newsletter
            </label>
          </div>
        </form>
      </div>
      <div className="w-1/2 pl-4">
        <h2 className="text-xl font-bold mb-4">Résultats en temps réel</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  )
}

