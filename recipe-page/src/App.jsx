import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeCategories from './components/RecipeCategories'
// import RecipeDetail from './components/RecipeDetail'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
 

  return (
    <div className="min-h-screen bg-[#cde212]">
      <RecipeCategories />
    </div>
  )
}

export default App
