import React from 'react'
import CalculadoraIMC from './components/Pages/Home/CalculadoraIMC'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Header/>
      <CalculadoraIMC/>
      <Footer/>
    </div>
  )
}
