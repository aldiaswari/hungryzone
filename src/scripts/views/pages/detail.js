import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createrestaurantDetailTemplate,
} from '../templates/template-creator';
import FormReviewInitiator from '../../utils/form-review-initiator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
    <div class="detail-page content">
    <h1 class="detail-title">Detail Restoran</h1>
    <loading-indicator></loading-indicator>
    <div id="restaurant__detail" class="restaurant__detail"></div>
    <div class="detail-content"></div>
    <div class="detail-form">
    <h1 class="add-review-title">Tambahkan review</h1>
    <div id="formReviewContainer"></div>
    </div>
    <div id="likeButtonContainer"></div>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    
    const restaurantContainer = document.querySelector('.detail-content');
    const detailForm = document.querySelector('.detail-form');
    const loading = document.querySelector('.loader');
    const addReviewTitle = document.querySelector('.add-review-title');

    try {
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      restaurantContainer.innerHTML = createrestaurantDetailTemplate(restaurant);

      loading.style.display = 'none';
      addReviewTitle.style.display = 'block';
      window.scrollTo(0, 0);
    
      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          city: restaurant.city,
          address: restaurant.address,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
        },
      });
      await FormReviewInitiator.init({
        formReviewContainer: document.querySelector('#formReviewContainer'),
        id: restaurant.id,
      });
    } catch (error) {
      console.log(error);
      loading.style.display = 'none';
      restaurantContainer.innerHTML = '<error-message></error-message>';
      detailForm.style.display = 'none';
    }
  },
};

export default Detail;
