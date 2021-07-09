class FavoriteRestaurantshowPresenter {
  constructor({ view, favoriteRestaurants }) {
    this._view = view;
    this._favoriteRestaurants = favoriteRestaurants;

    this._showFavoriteRestaurant();
  }

  async _showFavoriteRestaurant() {
    const restaurant = await this._favoriteRestaurants.getAllRestaurants();
    this._displayRestaurant(restaurant);
  
  }

  _displayRestaurant(restaurant) {
    this._view.showFavoriteRestaurant(restaurant);
  }
}

export default FavoriteRestaurantshowPresenter;
