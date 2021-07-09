import CONFIG from '../../globals/config';

const createrestaurantDetailTemplate = (restaurant) => `
<div class="detail-container">
<div class="detail-img">
  <img src=${CONFIG.BASE_IMAGE_URL.MEDIUM}${restaurant.pictureId} alt=${restaurant.name} crossorigin="anonymous" />
</div>
<div class="detail-content">
  <div class="detail-restaurant">
    <h1 class="title-restaurant">${restaurant.name}</h1>
    <div class="rating">
      <span class="material-icons">grade</span>
      <p>${restaurant.rating}</p>
    </div>
    <p class="description-restaurant">${restaurant.description}</p>
    <p class="location-restaurant"><span class="material-icons">location_on</span>${restaurant.address}, ${restaurant.city}</p>
  </div>
  <div class="detail-menu">
    <p class="detail-menu-title">Kategori</p>
    ${restaurant.categories.map((categori) => `
      <span class="category-name">${categori.name}</span>
    `).join('')}
    <p class="detail-menu-title">Daftar makanan</p>
    ${restaurant.menus.foods.map((food) => `
      <span class="food-name">${food.name}</span>
    `)}
    <p class="detail-menu-title">Daftar minuman</p>
    ${restaurant.menus.drinks.map((drink) => `
      <span class="drink-name">${drink.name}</span>
    `)}
  </div>
</div>
<div class="reviews">
  <h1 class="review-title">Review restoran</h1>
  <div class="review-container">
    ${restaurant.customerReviews.map((review) => `
      <div class="review-card">
        <span class="material-icons">account_circle</span>
        <p class="review-name">${review.name}</p>
        <p class="review-date">${review.date}</p>
        <p class="review-comment">${review.review}</p>
      </div>
    `).join('')}
  </div>
</div>
</div>
`;

const createSkeletonItemTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
    <skeleton-items></skeleton-items>
  `;
  }
  return template;
};

const createrestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
  <a class="restaurant-click" href="${`/#/detail/${restaurant.id}`}">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
        data-src=${CONFIG.BASE_IMAGE_URL.MEDIUM}${restaurant.pictureId} crossorigin="anonymous">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${
  restaurant.rating
}</span></p>
     </div>
    </div>
    <div class="restaurant-item__content">
        <h3 class="restaurant__title">${restaurant.name}</h3>
        <p>${restaurant.description}</p>
    </div>
    </a>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createFormReviewTemplate = () => `
  <form>
    <label for="inputName">Nama</label>
    <input type="text" name="nama" class="inputName" id="inputName" placeholder="Masukan nama">
    <label for="inputReview">Review</label>
    <textarea name="review" class="inputReview" id="inputReview" placeholder="Masukan review"></textarea>
    <button type="submit" class="btnSubmit">Kirim</button>
  </form>
`;

export {
  createrestaurantItemTemplate,
  createrestaurantDetailTemplate,
  createFormReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createSkeletonItemTemplate,
};
