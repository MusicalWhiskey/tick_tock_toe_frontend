import react from 'react'

import { Routes, Route } from 'react-router-dom'

import CoffeePage from './pages/SupportPage.jsx'
import GamePage from './pages/GamePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import UserPage from './pages/UserPage.jsx'
import ScoresPage from './pages/ScoresPage.jsx'

import NavBar from './components/NavBar.jsx'

import './App.css'
import SupportPage from './pages/SupportPage.jsx'

export default function App() {
  return (
    <main>
      <NavBar />
            <Routes>
                <Route path="/" element={<UserPage />} />
                <Route path="/game" element={<GamePage />} />
                <Route path="/scores" element={<ScoresPage />} />
                <Route path="/support" element={<SupportPage />} />

                <Route path="*" element={<NotFoundPage />} />
                
            </Routes>

    </main>
  );
}