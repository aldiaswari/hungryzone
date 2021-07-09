/* eslint-disable no-new */
import FavoriteRestaurantIdb from '../../data/restaurant-favorite';
import FavoriteRestaurantSearchView from './favorite-restaurant/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './favorite-restaurant/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './favorite-restaurant/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();
const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurant: FavoriteRestaurantIdb });
  },
};

export default Like;
