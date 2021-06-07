import renderContent from './renderer';

addEventListener('fetch', (event) => {
  const day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
    new Date()
  );

  const content = renderContent({
    day,
    degF: '80',
    degC: '20',
    weatherEmoji: '🌦️',
  });

  const res = new Response(content, {
    headers: {
      'content-type': 'image/svg+xml',
    },
  });
  event.respondWith(res);
});
