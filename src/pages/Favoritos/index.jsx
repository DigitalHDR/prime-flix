import React, { useState, useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Favoritos = () => {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    const minhaLista = localStorage.getItem('@primeflix')
    setFilmes(JSON.parse(minhaLista) || [])
    // JSON.parse converte de string para array
  }, [])

  return (
    <div className="meus-filmes">
      <h1>Meus filmes</h1>

      <ul>
        {filmes.map(item => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Favoritos
