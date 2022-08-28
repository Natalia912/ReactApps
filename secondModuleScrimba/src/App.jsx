import React from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data";

function App() {

  const card = data.map( item => {
    return(
      <Card
      id = {item.id}
      item = {item}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <section className="card-list">
        {card}
      </section>
    </div>
  )
}

export default App
