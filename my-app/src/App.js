
import React from 'react';
import './App.css';
import { Navbar } from './components/NavBar';
import './index.css';
import { HeroHead } from "./components/HeroHead"
import { Footer } from './components/Footer';
import { Getstarted } from './components/Getstarted'
import { Signin } from './components/Signin';

function App() {
  const[clicked,setClicked]=React.useState(true)
   const logout =() =>{
     setClicked(false)
   }
  return (

    <div className="App font-montserrat">
      {clicked ? <HeroHead logout={logout}/>  : <Getstarted />}
      <div className='bg-[#F9F4F4] h-[20px] relative'></div>
      <Footer/>
      
    </div>
    
  );
}

export default App;
