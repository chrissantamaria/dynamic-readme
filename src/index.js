import renderContent from './renderer';

addEventListener('fetch', (event) => {
  const content = renderContent();

  const res = new Response(content, {
    headers: {
      'content-type': 'image/svg+xml',
    },
  });
  event.respondWith(res);
});
