// Write the code to use the library
import Sortable from 'sortablejs';

const initSortable = () => {
  var el = document.querySelector('#results');
  Sortable.create(el, {
    animation: 150,
    ghostClass: "ghost",
    onEnd: (event) => {
      alert(`Moved from ${event.oldIndex} to ${event.newIndex}`)
    }
  });
};

export { initSortable };
