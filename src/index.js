// // GET request by default
// fetch('http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7')
//   //    Convert the text to json
//   .then((response) => response.json())
//   //   We are going to process it
//   .then((movieObject) => {
//     //     Print it!
//     const title = document.querySelector('#title');
//     const plot = document.querySelector('#plot');
//     const img = document.querySelector('#movie-img');

//     const firstMovie = movieObject.Search[0];
//     const firstMovieTitle = firstMovie.Title;
//     const firstMoviePlot = firstMovie.plot;
//     const firstMovieImg = firstMovie.Poster;

//     title.innerText = firstMovieTitle;
//     plot.innerText = firstMoviePlot;
//     img.src = firstMovieImg;
//   });

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
  // ALWAYS EVENT.preventDefault() when handling form events
  event.preventDefault();
  const input = event.currentTarget.querySelector('.form-control');
  results.innerHTML = '';
  searchMovies(input.value);
});
// fetch('http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7')
//   .then((response) => response.json())
//   .then((data) => {
//     data.Search.forEach((result) => {
//       const movie = `<li class="list-inline-item">
//         <img src="${result.Poster}" alt="">
//         <p>${result.Title}</p>
//       </li>`;
//       results.insertAdjacentHTML('beforeend', movie);
//     });
//   });

const searchAlgoliaPlaces = (event) => {
  fetch('https://places-dsn.algolia.net/1/places/query', {
    method: 'POST',
    body: JSON.stringify({ query: event.currentTarget.value }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.hits); // Look at local_names.default
    });
};

const input = document.querySelector('#search');
input.addEventListener('keyup', searchAlgoliaPlaces);
