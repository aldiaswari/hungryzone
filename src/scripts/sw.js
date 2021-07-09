import 'regenerator-runtime'; /* for async await transpile */
import { setCacheNameDetails, skipWaiting, clientsClaim } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

import CONFIG from './globals/config';

console.log('hello, from service worker');

skipWaiting();
clientsClaim();

if (workbox) console.log('Yay! Workbox is loaded 🎉');
else console.log('Boo! Workbox didn\'t load');

setCacheNameDetails(CONFIG.CACHE_NAME);
precacheAndRoute(self.__WB_MANIFEST, {
  ignoreUrlParametersMatching: [/.*/],
});

registerRoute(
  ({ request }) => request.destination === 'image',
  new NetworkFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  }),
);

registerRoute(
  new RegExp('^https://dicoding-restaurant-api.el.r.appspot.com/'),
  new StaleWhileRevalidate({
    cacheName: 'dicoding-restaurant-api',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200, 404],
      }),
    ],
  }),
);

// Menyimpan cache dari CSS Google Fonts
registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  staleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  }),
);

registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  cacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  }),
);
  
cleanupOutdatedCaches();