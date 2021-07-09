Feature('Reviewing Restaurants');

Before((I) => {
  I.amOnPage('/');
});

Scenario('Post review restaurant', async (I) => {
  const review = 'gokills';

  I.seeElement('.restaurant-item');

  I.click(locate('.restaurant-item a').first());

  I.seeElement('form');
  I.fillField('nama', 'aldi');
  I.fillField('review', review);
  I.click('.btnSubmit');

  I.see(review, '.review-comment');
});
