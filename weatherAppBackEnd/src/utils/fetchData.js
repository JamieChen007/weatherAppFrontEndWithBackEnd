const dotenv = require('dotenv');

const fetchData = async (cityName, forecastCity, lon, lat) => {
  if (process.env.NODE_ENV === 'development') {
    dotenv.config({ path: '.env.development' });
  } else {
    dotenv.config();
  }
  const apiUrl = process.env.APIURL;
  const apiKey = process.env.APIKEY;

  let url;
  if (cityName) {
    url = `${apiUrl}weather?q=${cityName}&appid=${apiKey}&units=metric`;
  } else if (forecastCity) {
    url = `${apiUrl}forecast?q=${forecastCity}&appid=${apiKey}&units=metric`;
  } else {
    url = `${apiUrl}air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  }
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return false;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { fetchData };
