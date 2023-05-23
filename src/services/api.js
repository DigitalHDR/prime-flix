import axios from 'axios'

// BASE DA URL
// https://api.themoviedb.org/3/

// URL DA API
// /movie/550?api_key=27445f9e3d02c2da7d94f4c8d25f985f&language=pt=BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
})


export default api