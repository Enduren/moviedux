import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
import './styles.css'
function App() {


  return (
    <>
      <div className='App'>
        <div className='container'>
          <Header/>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
