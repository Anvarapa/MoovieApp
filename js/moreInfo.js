const aboutFilms = document.querySelector("#aboutFilms");
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9d72328da905ad751bd708166e233c7d&page=1";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=9d72328da905ad751bd708166e233c7d&query="';

//GET initial movies
getInfo(API_URL);

async function getInfo(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);
  showMovies(data.results);
}

function showMovies(movies) {
    aboutFilms.innerHTML = "";
  movies.forEach((movie) => {
    const { original_language, release_date, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("info");
    movieEl.innerHTML = `
    <h1>About:${original_language}</h1>
<h1>About:${release_date}</h1>
    `;
      aboutFilms.appendChild(movieEl);
  });
}

