
export const API_BASE = process.env.REACT_APP_TMDB_URL;
export const API_KEY = process.env.REACT_APP_TMDB_KEY;
export const IMAGES_API = 'https://image.tmdb.org/t/p/w1280' 

export const API_TRENDING = `${API_BASE}/trending/all/day?language=pt-BR&sort_by=vote_count.desc&api_key=${API_KEY}`;
export const API_TOP = `${API_BASE}/movie/top_rated?language=pt-BR&api_key=${API_KEY}`;
export const API_COMEDY = `${API_BASE}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=35&sort_by=vote_count.desc&page=1`;
export const API_ACTION = `${API_BASE}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=28&sort_by=vote_count.desc&page=1`;
export const API_HORROR = `${API_BASE}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=27&sort_by=vote_count.desc&page=1`;
export const API_ROMANCE = `${API_BASE}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=10749&sort_by=vote_count.desc&page=1`;
export const API_DOCUMENTARY = `${API_BASE}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=99&sort_by=vote_count.desc&page=1`;

export const MOVIES_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=`
export const GENERAL_API = `https://api.themoviedb.org/3/movie/discover?api_key=${API_KEY}&language=pt-BR&page=`
export const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=pt-BR`
export const GENRES = `https://api.themoviedb.org/3/genre/movie/list?&api_key=${API_KEY}`;