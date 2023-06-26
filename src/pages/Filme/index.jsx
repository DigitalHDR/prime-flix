import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './style.css'
import { toast } from 'react-toastify'

import api from '../../services/api'

const Filme = () => {
  const { id } = useParams()
  const navigate = useNavigate()

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
          // console.log(response.data);
          setLoading(false)
        })
        .catch(() => {
          console.log('Filme não encontrado')
          navigate('/', { replace: true })
          return
        })
    }

    loadFilme()

    return () => {
      console.log('COMPONENTE FOI DESMONTADO')
    }
  }, [navigate, id])
  // dentro do [] useEffect usa-se as dependencia que
  // estão sendo usadas fora dele que estão dentro dele

  function salvarFilme() {
    const minhasLista = localStorage.getItem('@primeflix')

    let filmesSalvos = JSON.parse(minhasLista) || []
    // JSON.parse para converter em string novamente pois vem em json

    // const hasFilme = filmesSalvos.find((filmesSalvo) => filmesSalvo.id === filme.id)
    const hasFilme = filmesSalvos.some(
      filmesSalvo => filmesSalvo.id === filme.id
    )

    if (hasFilme) {
      toast.warn('esse filme já está na lista')
      return
    }

    filmesSalvos.push(filme)
    localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos))
    toast.success('Filme salvo com sucesso!')
  }

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

      <div className="area-buttons">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.youtube.com/results?search_query=${filme.title} treiler`}
          >
            Treiler
          </a>
        </button>
      </div>
    </div>
  )
}

export default Filme
