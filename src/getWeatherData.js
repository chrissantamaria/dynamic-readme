// City center of Saint Petersburg, FL
const LOCATION = '27.767599, -82.640213';

const WEATHER_API_URL = 'http://api.weatherapi.com/v1/current.json';

const getWeatherData = async () => {
  const data = await fetch(
    `${WEATHER_API_URL}?key=${WEATHER_API_KEY}&q=${LOCATION}&aqi=no`
  ).then((res) => res.json());

  return {
    tempC: Math.round(data.current.temp_c),
    tempF: Math.round(data.current.temp_f),
  };
};

export default getWeatherData;
