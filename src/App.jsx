import { useState } from 'react'  
import {db} from './db.js'

import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  const [guitarras, setGuitarras] = useState(db)

  return (
    <>
      <Header />
      <Body guitarras={guitarras} />
      <Footer />
    </>
  )
}

export default App
