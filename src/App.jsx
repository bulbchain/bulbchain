import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { NavBar } from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <Skills/>
      <Footer/>
      {/* <Projects/> */}
    </>
  )
}

export default App
