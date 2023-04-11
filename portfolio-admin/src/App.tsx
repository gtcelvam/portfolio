import { useEffect } from 'react'
import './assets/css/App.css'
import Layout from './components/layout'
import.meta.env.VITE_BACKEND_URL

function App() {
  return (
    <div className="App">
      <Layout/>
    </div>
  )
}

export default App
