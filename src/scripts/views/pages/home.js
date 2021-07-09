import RestaurantSource from '../../data/restaurant-source';
import { createrestaurantItemTemplate } from '../templates/template-creator';
import '../../components/home/content-restaurant';

const Home = {
  async render() {
    return `
  <hero-image></hero-image>
  <our-services></our-services> 
  <content-restaurant>
  </content-restaurant>
  <gallery-foods></gallery-foods>
  <our-menus></our-menus>
  <home-review></home-review>
   `;
  },

  async afterRender() {
    
    const restaurantContainer = document.querySelector('#restaurant');
    const loading = document.querySelector('.loader');
    const gallery = document.querySelector('gallery-foods');
    try {
      const restaurants = await RestaurantSource.bestRestaurant();
      console.log(restaurants);
      loading.style.display = 'none';
      gallery.style.display = 'block';
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createrestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      loading.style.display = 'none';
      console.log(error);
      restaurantContainer.innerHTML = '<error-message></error-message>';
      restaurantContainer.style.display = 'flex';
    }
  },
};

export default Home;
