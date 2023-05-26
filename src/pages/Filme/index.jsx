import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './style.css'

import api from '../../services/api'

const Filme = () => {
  const { id } = useParams()
  const [filme, setFilme] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: '27445f9e3d02c2da7d94f4c8d25f985f',
            language: 'pt-BR',
          },
        })
        .then(response => {
          setFilme(response.data)
          setLoading(false)
        })
        .catch(() => {
          console.log('Filme não encontrado')
        })
    }

    loadFilme()

    return () => {
      console.log('COMPONENTE FOI DESMONTADO')
    }
  }, [])

  if (loading) {
    return (
      <div className="filme-info">
        <h2>Carregando Detalhes do Filme...</h2>
      </div>
    )
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average}</strong>

      <div className='area-buttons'>
        <button>Salvar</button>
        <button>
          <a href="#">
            Treiler
          </a>
        </button>
      </div>
    </div>
  )
}

export default Filme
