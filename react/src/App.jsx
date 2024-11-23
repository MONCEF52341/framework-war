// src/App.jsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ApiCall from './components/ApiCall';
import Calculator from './components/Calculator';
import Counter from './components/Counter';
import DynamicForm from './components/DynamicForm';
import Layout from './components/Layout';
import ThemeSelector from './components/ThemeSelector';
import TicTacToe from './components/TicTacToe';
import TodoList from './components/TodoList';
import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<h1 className="text-2xl font-bold">Bienvenue dans l'application de démonstration</h1>} />
            <Route path="counter" element={<Counter />} />
            <Route path="todo" element={<TodoList />} />
            <Route path="form" element={<DynamicForm />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="tictactoe" element={<TicTacToe />} />
            <Route path="api" element={<ApiCall />} />
            <Route path="theme" element={<ThemeSelector />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;