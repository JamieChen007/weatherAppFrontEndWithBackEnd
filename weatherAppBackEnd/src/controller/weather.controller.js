const dayjs = require('dayjs');
const { fetchData } = require('../utils/fetchData');

const getSingleCityData = async (req, res) => {
  try {
    const { cityName } = req.query;
    const weatherData = await fetchData(cityName);
    if (!weatherData) {
      res.status(404).json({ msg: 'weatherData not found, please check cityName' });
    }
    const airData = await fetchData(null, null, weatherData.coord.lon, weatherData.coord.lat);
    const singleCityData = {
      cityName: weatherData.name,
      dateTime: dayjs().format('DD MMMM, dddd HH:mm'),
      minTemp: Math.ceil(weatherData.main.temp_min),
      maxTemp: Math.ceil(weatherData.main.temp_max),
      currentTemp: Math.ceil(weatherData.main.temp),
      weather: weatherData.weather[0].main,
      humidity: Math.ceil(weatherData.main.humidity),
      windSpeed: Math.ceil(weatherData.wind.speed),
      PM25: Math.ceil(airData.list[0].components.pm2_5),
    };
    res.json(singleCityData);
  } catch (error) {
    console.error(error);
  }
};

const getForecastData = async (req, res) => {
  const { cityName } = req.query;
  const forecastFetchResult = await fetchData(null, cityName);
  res.json(forecastFetchResult);
};

module.exports = { getSingleCityData, getForecastData };
