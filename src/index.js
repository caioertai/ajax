// TODO: Have a default movie seach on page load.
// TODO: Refactor code to be more descriptive, modular and less indented.
// TODO: Separate concerns into different files.
const results = document.querySelector('#results');

const searchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then((response) => response.json())
    .then((data) => {
      data.Search.forEach((result) => {
        const movie = `<li class="list-inline-item">
          <img src="${result.Poster}" alt="">
          <p>${result.Title}</p>
        </li>`;
        results.insertAdjacentHTML('beforeend', movie);
      });
    });
};

const form = document.querySelector('#search-movies');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  results.innerHTML = '';
  const input = event.currentTarget.querySelector('.form-control');
  searchMovies(input.value);
});
