const results = document.querySelector('#results');

const insertSearchedMovieTags = (data) => {
  data.Search.forEach((result) => {
    const movie = `<li class="list-inline-item">
      <img src="${result.Poster}" alt="">
    </li>`;
    results.insertAdjacentHTML('beforeend', movie);
  });
}

const searchAndInsertMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then((response) => response.json())
    .then(insertSearchedMovieTags);
};

const handleFormMoviesSearch = (event) => {
  event.preventDefault();
  results.innerHTML = '';
  const input = event.currentTarget.querySelector('.form-control');
  searchAndInsertMovies(input.value);
};

export { searchAndInsertMovies, handleFormMoviesSearch };
