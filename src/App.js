import React from 'react'

import { Code, Chart } from './components'

import './App.module.css'

function App() {
  return (
    
    <div className="container">
      <header>
        <h1>Fellipe's Challenge</h1>
      </header>
      <main>
        <Code/>
        <Chart/>
      </main>
    </div>
  );
}

export default App
