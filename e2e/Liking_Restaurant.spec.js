const assert = require('assert');

Feature('Liking Restaurants');

Before((I) => {
  I.amOnPage('/#/favorite');
});

const messageText = 'Data restaurant favorit tidak ditemukan';

Scenario('showing empty liked restaurants', (I) => {
  I.seeElement('.restaurant');
  I.see(messageText, 'favorite-message');
});

Scenario('like and unlike one restaurant', async (I) => {
  // Like restoran
  I.see(messageText, 'favorite-message');

  I.amOnPage('/');

  I.seeElement('.restaurant-item');

  const firstRestaurant = locate('.restaurant-item a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const likeRestaurantTitle = await I.grabTextFrom('.restaurant-item a');
  assert.strictEqual(firstRestaurantTitle, likeRestaurantTitle);

  // Unlike restoran
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('favorite-message');

  const favPageMessage = await I.grabTextFrom('p.favorite-message');
  assert.strictEqual(favPageMessage, messageText);
});