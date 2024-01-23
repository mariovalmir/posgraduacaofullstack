import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AloMundo } from './components/AloMundo';
import { AloMundoColorido } from './components/AloMundoColorido';

function App() {
  return (
    <>
      <AloMundo/>
      <AloMundoColorido nome="Alexandre" cor="blue"/>
    </>
  );
}

export default App
