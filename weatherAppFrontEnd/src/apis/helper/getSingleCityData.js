// import { fetchData } from '../fetchData';
// import dayjs from 'dayjs';

// export const getSingleCityData = async (cityName) => {
//   const weatherData = await fetchData(cityName);
//   const airData = await fetchData(null, null, weatherData.coord.lon, weatherData.coord.lat);
//   const singleCityData = {
//     cityName: weatherData.name,
//     dateTime: dayjs().format('DD MMMM, dddd HH:mm'),
//     minTemp: Math.ceil(weatherData.main.temp_min),
//     maxTemp: Math.ceil(weatherData.main.temp_max),
//     currentTemp: Math.ceil(weatherData.main.temp),
//     weather: weatherData.weather[0].main,
//     humidity: Math.ceil(weatherData.main.humidity),
//     windSpeed: Math.ceil(weatherData.wind.speed),
//     PM25: Math.ceil(airData.list[0].components.pm2_5),
//   };
//   return singleCityData;
// };
