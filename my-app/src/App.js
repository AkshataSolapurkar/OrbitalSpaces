import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Navbar } from './components/NavBar';
import './index.css';
import { HeroHead } from "./components/HeroHead"
import { Footer } from './components/Footer';
import { Getstarted } from "./components/Getstarted"

function App() {
  const [Signin,setSignin]= React.useState(true)
  return (
    <div className="App font-montserrat">
      <Navbar />
      <div className='bg-[#F9F4F4] h-[20px] relative'></div>
      {Signin ? <HeroHead Signin={Signin} setSignin={setSignin}/> : <Getstarted />}
      <Footer/>
    </div>
  );
}

export default App;
