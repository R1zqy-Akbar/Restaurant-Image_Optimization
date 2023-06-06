import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import { createMovieItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading" id="title">Your Liked Restaurant</h2>
        <div id="movies" class="movies">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteMovieIdb.getAllMovies();
    const moviesContainer = document.querySelector('#movies');
    if (restaurants.length !== 0) {
      restaurants.forEach((restaurant) => {
        moviesContainer.innerHTML += createMovieItemTemplate(restaurant);
      });
    } else {
      const title = document.querySelector('.title');
      title.innerHTML = 'No Liked Restaurant';
    }
  },
};

export default Favorite;
