// export const fetchData = async (cityName, forecastCity, lon, lat) => {
//   const apiKey = process.env.REACT_APP_APIKET;
//   const apiUrl = process.env.REACT_APP_APIURL;
//   let url;
//   if (cityName) {
//     url = `${apiUrl}weather?q=${cityName}&appid=${apiKey}&units=metric`;
//   } else if (forecastCity) {
//     url = `${apiUrl}forecast?q=${forecastCity}&appid=${apiKey}&units=metric`;
//   } else {
//     url = `${apiUrl}air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
//   }
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       return false;
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error(error);
//   }
// };
