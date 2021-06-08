import getWeatherData from './getWeatherData';
import renderContent from './renderer';

const eventHandler = async () => {
  const day = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    timeZone: 'America/New_York',
  }).format(new Date());

  const { tempF, tempC } = await getWeatherData();

  const content = renderContent({ day, tempF, tempC });

  return new Response(content, {
    headers: {
      'content-type': 'image/svg+xml',
      'cache-control': 'max-age=3600',
    },
  });
};

addEventListener('fetch', (event) => {
  event.respondWith(eventHandler(event));
});
