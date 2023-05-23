import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Erro = () => {
    return (
        <div className='not-found'>
            <h1>404</h1>
            <h2>Página não encrontrada!</h2>
            <Link to='/'>Veja todos os filmes!</Link>
        </div>
    )
}

export default Erro
