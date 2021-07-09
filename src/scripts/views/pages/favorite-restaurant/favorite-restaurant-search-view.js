import { createrestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  
  getTemplate() {
    return `
         <search-bar></search-bar>
         <div class="content">
         <h2 class="content__heading">Your Liked Restaurant</h2>
         <loading-indicator></loading-indicator>
         <div id="error" class="error"></div>
            <div id="restaurant" class="restaurant">
 
            </div>
         </div>
     `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurant(restaurant) {
    this.showFavoriteRestaurant(restaurant);
  }

  showFavoriteRestaurant(restaurant = []) {
    let html;
    let htmlError;
    const loading = document.querySelector('.loader');
    const error = document.getElementById('error');
    const resto = document.getElementById('restaurant');

    if (restaurant.length) {
      html = restaurant.reduce((carry, resto) => carry.concat(createrestaurantItemTemplate(resto)), '');

      htmlError = this._blank();
    } else {
     
      htmlError = this._getEmptyRestaurantTemplate();
      
      html = this._blank();
    }

    resto.innerHTML = html;

    resto.dispatchEvent(new Event('restaurant:updated'));

    loading.style.display = 'none';

    error.innerHTML = htmlError;

    error.style.display = 'flex';
    
  }

  _getEmptyRestaurantTemplate() {
    return '<favorite-message class="restaurant-item__not__found"></favoite-message>';
  }

  _blank() {
    return '<div></div>';
  }

}

export default FavoriteRestaurantSearchView;
