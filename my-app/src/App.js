
import React from 'react';
import './App.css';
import { Navbar } from './components/NavBar';
import './index.css';
import { HeroHead } from "./components/HeroHead"
import { Footer } from './components/Footer';

function App() {
 
  return (

    <div className="App font-montserrat">
      <Navbar />
      <div className='bg-[#F9F4F4] h-[20px] relative'></div>
      <HeroHead/>
      <Footer/>
    </div>
    
  );
}

export default App;
