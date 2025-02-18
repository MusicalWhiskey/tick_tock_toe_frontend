import react, { useState } from 'react'

import { Routes, Route } from 'react-router-dom'

import DonatePage from './pages/DonatePage.jsx'
import GamePage from './pages/GamePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import UserPage from './pages/UserPage.jsx'
import ScoresPage from './pages/ScoresPage.jsx'

import NavBar from './components/NavBar.jsx'
import './App.css'

export default function App() {
  const username = localStorage.getItem('username');
  return (
    <main className="app-container">
      <NavBar username={username} />
            <Routes>
                <Route path="/" element={<UserPage />} />
                <Route path="/game" element={<GamePage />} />
                <Route path="/scores" element={<ScoresPage />} />
                <Route path="/donate" element={<DonatePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>

    </main>
  );
}