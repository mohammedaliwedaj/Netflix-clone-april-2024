const API_KEY = process.env.REACT_APP_API_KEY
const requests = {
  fetchTrending: "/trending/all/week?api_key=${API_KEY}&language=enUS",
  fetchNetflixOriginals: "/discover/tv/?api_key=${API_KEY}&with_networks=18",
  fetchTopRatedMovies:"/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1",
  fetchActionMovies: "/discover/movie?api_key=${API_KEY}&with_genres=28",
  fetchComedyMovies: "/discover/movie?api_key=${API_KEY}&with_genres=35",
  fetchHorrorMovies: "/discover/movie?api_key=${API_KEY}&with_genres=27",
  fetchRomanceMovies: "/discover/movie?api_key=${API_KEY}&with_genres=10749",
  fetchDocumentaries: "/discover/movie?api_key=${API_KEY}&with_genres=99",
  fetchAdventureMovies: "/discover/movie?api_key=${API_KEY}&with_genres=12",
  fetchFamilyMovies: "/discover/movie?api_key=${API_KEY}&with_genres=10751",
  fetchHistoryMovies: "/discover/movie?api_key=${API_KEY}&with_genres=36",
  fetchTvShow: "/discover/movie?api_key=${API_KEY}&with_genres=10770",
};
export default requests