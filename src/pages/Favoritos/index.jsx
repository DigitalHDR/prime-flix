import React, { useState, useEffect } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Favoritos = () => {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    const minhaLista = localStorage.getItem('@primeflix')
    setFilmes(JSON.parse(minhaLista) || [])
    // JSON.parse converte de string para array
  }, [])

  function excluirFilme(id) {
    let filtroFilmes = filmes.filter(item => {
      return item.id !== id
    })

    setFilmes(filtroFilmes)
    localStorage.setItem('@primeflix', JSON.stringify(filtroFilmes))
    toast.success('Filme excluido com sucesso!')
  }

  return (
    <div className="meus-filmes">
      <h1>Meus filmes</h1>

      {filmes.length === 0 && <span>Você não tem nunhum filme salvo!</span>}

      <ul>
        {filmes.map(item => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Favoritos
