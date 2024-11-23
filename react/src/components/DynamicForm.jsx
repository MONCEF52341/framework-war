import React, { useState } from 'react';

const DynamicForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="p-4 flex">
      <div className="w-1/2 pr-4">
        <h2 className="text-2xl font-bold mb-4">Formulaire Dynamique</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Nom:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Âge:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Genre:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border p-2 w-full"
            >
              <option value="">Sélectionnez</option>
              <option value="male">Homme</option>
              <option value="female">Femme</option>
              <option value="other">Autre</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                className="mr-2"
              />
              S'abonner à la newsletter
            </label>
          </div>
        </form>
      </div>
      <div className="w-1/2 pl-4">
        <h3 className="text-xl font-bold mb-4">Résultats en temps réel:</h3>
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default DynamicForm;