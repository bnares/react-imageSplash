import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './components/Gallery'
import SearchForm from './components/SearchForm'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Unsplash Images Starter</h1>
      <ThemeToggle />
      <SearchForm />
      <Gallery/>
      
      
    </main>
  )
}

export default App
