// Importing modules and plugins
import { searchAndInsertMovies, handleFormMoviesSearch } from "./movies";
import { initSortable } from "./plugins/init_sortable";
import { initMarkdown } from "./plugins/init_markdown";
import { initSelect2 } from "./plugins/init_select2";

// Init plugins
initSortable();
initMarkdown();
initSelect2();

// Adds the new behaviour to the form
const form = document.querySelector('#search-movies');
form.addEventListener('submit', handleFormMoviesSearch);

// Ajax calls
searchAndInsertMovies("Avengers");
