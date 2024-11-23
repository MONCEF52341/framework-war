import React, { useEffect, useState } from 'react';

const ApiCall = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération de la citation');
      }
      const data = await response.json();
      setQuote(data.content);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Citation aléatoire</h2>
      {isLoading ? (
        <p>Chargement...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <blockquote className="italic border-l-4 border-gray-400 pl-4 mb-4">"{quote}"</blockquote>
      )}
      <button
        onClick={fetchQuote}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Nouvelle citation
      </button>
    </div>
  );
};

export default ApiCall;